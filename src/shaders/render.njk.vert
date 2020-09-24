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

{% for n in range(0, numFunctions) %}
{% for variation in functions[n].variations %}
uniform float u_F{{ n }}Params{{ loop.index0 }}[{{1 + variation.params | length}}];
{% endfor %}
{% endfor %}

uniform float u_FinalAffineParams[6];
{% for variation in finalVariations %}
uniform float u_FinalVariationParams{{ loop.index0 }}[{{ 1 + variation.params | length }}];
{% endfor %}
uniform float u_FinalPostAffineParams[6];

uniform bool u_yFlipped;
uniform bool u_useFinal;

in vec3 vPosition;
out vec4 vColor;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rand2n(const vec2 co, const float sampleIndex) {
    vec2 seed = co * (sampleIndex + 1.0);
    seed+=vec2(-1,1);
    // implementation based on: lumina.sourceforge.net/Tutorials/Noise.html
    return vec2(fract(sin(dot(seed.xy ,vec2(12.9898,78.233))) * 43758.5453),
                fract(cos(dot(seed.xy ,vec2(4.898,7.23))) * 23421.631));
}

vec3 hsv2rgb(float h, float s, float v){
    vec3 c = vec3(h, s, v);
    const vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
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

{% for n in range(0, numFunctions) %}
void variationF{{ n }}(inout vec2 p) {
    vec2 tmp = vec2(0);
    {% for variation in functions[n].variations %}
    {% set outer_loop = loop %}
    tmp += var{{ variation.id }}(p, u_F{{ n }}Params{{outer_loop.index0}}[0]
    {% for param in variation.params %}
        , u_F{{ n }}Params{{outer_loop.index0}}[{{loop.index}}]
    {% endfor %}
    ) * u_F{{ n }}Params{{outer_loop.index0}}[0];

    {% endfor %}
    
    p = tmp;
}
{% endfor %}

void finalVariation(inout vec2 p) {
    vec2 tmp = vec2(0);
    {% for variation in finalVariations %}
    {% set outer_loop = loop %}
    tmp += var{{ variation.id }}(p, u_FinalVariationParams{{outer_loop.index0}}[0]
    {% for param in variation.params %}
        , u_FinalVariationParams{{outer_loop.index0}}[{{loop.index}}]
    {% endfor %}
    ) * u_FinalVariationParams{{outer_loop.index0}}[0];
    {% endfor %}

    {% if finalVariation | length > 0 %}
    p = tmp;
    {% endif %}
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

        vColor = vec4(((hsv2rgb(1., 1., 1.) + vColor.xyz)/2.), alpha);
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
        vColor = vec4(((hsv2rgb({{ n * 0.1}}, 1., 1.) + vColor.xyz)/2.), alpha);
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
        vColor = vec4(((vec3(0, 1, 1) + vColor.xyz)/2.), alpha);
    }
}

void main() {
  float x = vPosition.x;
  float y = vPosition.z;

  vec2 xy = vec2(x, y);

  float alpha = 0.1;

  for (int i = 0; i < 30; i++) {
      vec2 n = rand2n(vPosition.xz, float(i));
      vec2 n2 = rand2n(vPosition.yz, float(i)*2.);
      vColor = vec4(n.x, n2.x, n2.y, alpha);
      applyTransformations(xy, n.y, alpha);
  }

  if(u_yFlipped) {
      xy.y *= -1.;
  }

  gl_Position = u_mvpMatrix * vec4(vec3(xy.x, 0, xy.y), 1.0);
  gl_PointSize = 1.;
}
