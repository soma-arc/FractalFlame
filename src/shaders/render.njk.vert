#version 300 es
precision mediump float;

uniform mat4 u_mvpMatrix;
{% if numFunctions == 0 %}
uniform float u_Weight[1];
uniform float u_AffineParams[6];
uniform float u_PostAffineParams[6];
{% else %}
uniform float u_Weight[{{ numFunctions }}];
uniform float u_AffineParams[{{ numFunctions * 6 }}];
uniform float u_PostAffineParams[{{ numFunctions * 6 }}];

{% endif %}
{% if numVariationParams == 0 %}
uniform float u_VariationParams[1];
{% else %}
uniform float u_VariationParams[{{ numVariationParams }}];
{% endif %}

uniform float u_FinalAffineParams[6];
{% if numFinalVariationParams == 0 %}
uniform float u_FinalVariationParams[1];
{% else %}
uniform float u_FinalVariationParams[{{ numFinalVariationParams }}];
{% endif %}
uniform float u_FinalPostAffineParams[6];

uniform bool u_yFlipped;
uniform bool u_useFinal;

in vec3 vPosition;
//in vec4 color;
out vec4 vColor;

vec2 rand2n(const vec2 co, const float sampleIndex) {
    vec2 seed = co * (sampleIndex + 1.0);
    seed+=vec2(-1,1);
    // implementation based on: lumina.sourceforge.net/Tutorials/Noise.html
    return vec2(fract(sin(dot(seed.xy ,vec2(12.9898,78.233))) * 43758.5453),
                fract(cos(dot(seed.xy ,vec2(4.898,7.23))) * 23421.631));
}

// circle [x, y, radius, radius * radius]
vec2 circleInvert(const vec2 pos, const vec4 circle){
    vec2 p = pos - circle.xy;
    float d = length(p);
    return (p * circle.w)/(d * d) + circle.xy;
}

void affine(inout vec2 p, float a, float b, float c, float d, float e, float f) {
    float x = p.x;
    float y = p.y;
 
    p.x = a*x + b*y + c;
    p.y = d*x + e*y + f;
}

vec2 complexProd(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y,
                a.x * b.y + a.y * b.x);

}

const float INFINITY = 999999.;
vec2 complexDiv(vec2 a, vec2 b) {
    float denom = b.x * b.x + b.y * b.y;
	if(denom == 0.){
	    return vec2(INFINITY);
	}else if(denom == INFINITY){
	    return vec2(0, 0);
	}
	return vec2((a.x * b.x + a.y * b.y) / denom,
                (a.y * b.x - a.x * b.y) / denom);
}

{% for n in variationsIndex %}
{% for item in items %}
{% if item.id == n %}
// {{ item.name }}
{{ item.body | safe }}
  {% endif %}
{% endfor %}
{% endfor %}


// vec2 var4(in vec2 pos) {
//     pos = circleInvert(pos, c2);
//     pos = circleInvert(pos, c1);

//     pos = circleInvert(pos, c3);
    
//     pos = pos - c2.xy;
//     float d = dot(pos, line.zw);
//     pos = pos - line.xy * (2.0 * d);
//     pos = pos + c2.xy;    

//     return pos;
// }
 
// vec2 var5(in vec2 pos, float r2) {
//     pos = pos - c2.xy;
//     float d = dot(pos, line.zw);
//     pos = pos - line.xy * (2.0 * d);
//     pos = pos + c2.xy;

//     pos = circleInvert(pos, c3);
    
//     pos = circleInvert(pos, c1);
//     pos = circleInvert(pos, c2);
//     return pos;
// }

// void variation(inout vec2 p, in float v1, in float v2, in float v3, in float v4, in float v5) {
//     float r2 = p.x * p.x + p.y * p.y + 0.00001;
//     p = var1(p) * v1 + var2(p, r2) * v2 + var3(p, r2) * v3 + var4(p) * v4 + var5(p, r2) * v5;
// }
{% for n in range(0, numFunctions) %}
void variationF{{ n }}(inout vec2 p) {
    vec2 tmp = vec2(0);
    {% for variation in functions[n].variations %}
    tmp += var{{ variation.id }}(p) * u_VariationParams[{{numVariationParamsProcess[n] + loop.index0}}];
    {% endfor %}
    p = tmp;
}
{% endfor %}

void finalVariation(inout vec2 p) {
    vec2 tmp = vec2(0);
    {% for variation in finalVariations %}
    tmp += var{{ variation.id }}(p) * u_FinalVariationParams[{{ loop.index0}}];
    {% endfor %}
    p = tmp;
}

void applyTransformations(inout vec2 xy, float rnd, float alpha) {
    {% if numFunctions >= 1  %}
    float totalWeight = u_Weight[0];
    if(rnd < totalWeight) {
        affine(xy,
               u_AffineParams[0], u_AffineParams[1],
               u_AffineParams[2], u_AffineParams[3],
               u_AffineParams[4], u_AffineParams[5]);
        variationF0(xy);
        affine(xy,
               u_PostAffineParams[0], u_PostAffineParams[1],
               u_PostAffineParams[2], u_PostAffineParams[3],
               u_PostAffineParams[4], u_PostAffineParams[5]);

        vColor = vec4(((vec3(1, 0, 0) + vColor.xyz)/2.), alpha);
    }
    {% endif %}
    {% if numFunctions >= 2 %}
    {% for n in range(1, numFunctions) %}
    else if(rnd < totalWeight + u_Weight[{{ n }}]) {
        totalWeight += u_Weight[{{ n }}];
        affine(xy,
               u_AffineParams[{{ n * 6 }}], u_AffineParams[{{ n * 6 + 1 }}],
               u_AffineParams[{{ n * 6 + 2 }}], u_AffineParams[{{ n * 6 + 3 }}],
               u_AffineParams[{{ n * 6 + 4 }}], u_AffineParams[{{ n * 6 + 5 }}]);
        variationF{{ n }}(xy);
        // post transform
        affine(xy,
               u_PostAffineParams[{{ n * 6 }}], u_PostAffineParams[{{ n * 6 + 1 }}],
               u_PostAffineParams[{{ n * 6 + 2 }}], u_PostAffineParams[{{ n * 6 + 3 }}],
               u_PostAffineParams[{{ n * 6 + 4 }}], u_PostAffineParams[{{ n * 6 + 5 }}]);
        vColor = vec4(((vec3(1, 1, 0) + vColor.xyz)/2.), alpha);
    }
    {% endfor %}
    {% endif %}

    // Final transform
    if(u_useFinal) {
        affine(xy,
               u_FinalAffineParams[0], u_FinalAffineParams[1],
               u_FinalAffineParams[2], u_FinalAffineParams[3],
               u_FinalAffineParams[4], u_FinalAffineParams[5]);
        finalVariation(xy);
        affine(xy,
               u_FinalPostAffineParams[0], u_FinalPostAffineParams[1],
               u_FinalPostAffineParams[2], u_FinalPostAffineParams[3],
               u_FinalPostAffineParams[4], u_FinalPostAffineParams[5]);
    }
}

void main() {
  float x = vPosition.x;
  float y = vPosition.z;

  vec2 xy = vec2(x, y);
//  vColor = vec4(1, 0, 0, 1);
//  gl_Position = u_mvpMatrix * vec4(vec3(xy.x, 0, xy.y), 1.0);
//  return;
  float alpha = 0.1;

  for (int i = 0; i < 30; i++) {
      vec2 n = rand2n(vPosition.xz, float(i));
      vec2 n2 = rand2n(vPosition.yz, float(i)*2.);
      vColor = vec4(n.x, n2.x, n2.y, alpha);
      applyTransformations(xy, n.y, alpha);
  }
  // vColor = vec4(u_Mobius[0].x, u_Mobius[0].y, 0, alpha);
  //vColor = vec4(u_Weight[0], u_Weight[1], 0, alpha);
  if(u_yFlipped) {
      xy.y *= -1.;
  }
  //vColor = clamp(vColor, 0.0, 1.0);
  gl_Position = u_mvpMatrix * vec4(vec3(xy.x, 0, xy.y), 1.0);
  gl_PointSize = 1.;
}
