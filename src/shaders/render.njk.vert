#version 300 es
precision mediump float;

uniform mat4 u_mvpMatrix;
uniform float u_Weight[2];
uniform float u_AffineParams[18];
uniform float u_FinalAffineParams[6];
uniform float u_PostAffineParams[18];
uniform float u_FinalPostAffineParams[6];
uniform float u_VariationParams[15];
uniform float u_FinalVariationParams[15];
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

// https://github.com/soma-arc/HyperbolicBeing/blob/51d65264428505d698382c5274969f7f3430b0a6/web/scripts/optLimitSetExplorer.js
vec2 mobiusOnPoint (vec2 p, vec2 a, vec2 b, vec2 c, vec2 d) {
    if(p.x == INFINITY || p.y == INFINITY) {
        if(!(c.x == 0. && c.y == 0.)) {
            return complexDiv(a, c);
        } else {
            return vec2(INFINITY);
        }
    }
    
    vec2 numerix = complexProd(a, p) + b;
    vec2 denom = complexProd(c, p) + d;
    if(denom.x == 0. && denom.y == 0.) {
        return vec2(INFINITY);
    }
    return complexDiv(numerix, denom);
}

vec4 c1 = vec4(-1.2, 0, 0.5, 0.5 * 0.5);
vec4 c2 = vec4(-1.5, 0, 1, 1 * 1);
vec4 c3 = vec4(-0.1, 1.85, 2.0934421415458306,
               2.0934421415458306 * 2.0934421415458306);
// [loxoDir.x, loxoDir.y, loxoNormal.x loxoNormal.y]
vec4 line = vec4(-1, 0, 0, -1);

// https://ayumu-nagamatsu.com/archives/500/
// linear
vec2 var1(vec2 p) {
    return vec2(p.xy);
}
 
// spherical
vec2 var2(vec2 p, float r2) {
    vec2 tmp = vec2(p.xy);
    tmp = tmp / r2;
 
    return tmp;
}
 
// Fisheye
vec2 var3(vec2 p, float r2) {
    vec2 tmp = vec2(p.xy);
    float r = sqrt(r2);
    tmp = tmp * (2.0 / (r + 1.0));
 
    return tmp;
}
 
// tangent
// vec2 var4(vec2 p) {
//     vec2 tmp = vec2(sin(p.x)/cos(p.y), tan(p.y));
//     return tmp;
// }
// vec2 var4(vec2 p) {
//     return mobiusOnPoint(p, u_Klein[0], u_Klein[1], u_Klein[2], u_Klein[3]);
// }

vec2 var4(in vec2 pos) {
    pos = circleInvert(pos, c2);
    pos = circleInvert(pos, c1);

    pos = circleInvert(pos, c3);
    
    pos = pos - c2.xy;
    float d = dot(pos, line.zw);
    pos = pos - line.xy * (2.0 * d);
    pos = pos + c2.xy;    

    return pos;
}
 
// bubble
// vec2 var5(in vec2 p, in float r2) {
//     vec2 tmp = vec2(p.xy);
//     tmp = tmp * (4.0 / (r2 + 4.0));
//     return tmp;
// }
// vec2 var5(in vec2 p, in float r2) {
//     //return mobiusOnPoint(p, u_Klein[0], u_Klein[1], u_Klein[2], u_Klein[3]);
//     return mobiusOnPoint(p, u_Klein[4], u_Klein[5], u_Klein[6], u_Klein[7]);
// }

vec2 var5(in vec2 pos, float r2) {
    pos = pos - c2.xy;
    float d = dot(pos, line.zw);
    pos = pos - line.xy * (2.0 * d);
    pos = pos + c2.xy;

    pos = circleInvert(pos, c3);
    
    pos = circleInvert(pos, c1);
    pos = circleInvert(pos, c2);
    return pos;
}


void variation(inout vec2 p, in float v1, in float v2, in float v3, in float v4, in float v5) {
    float r2 = p.x * p.x + p.y * p.y + 0.00001;
    p = var1(p) * v1 + var2(p, r2) * v2 + var3(p, r2) * v3 + var4(p) * v4 + var5(p, r2) * v5;
}

void applyTransformations(inout vec2 xy, float n, float weight2, float alpha) {
    if(n < u_Weight[0]) {
        affine(xy,
               u_AffineParams[0], u_AffineParams[1], u_AffineParams[2],
               u_AffineParams[3], u_AffineParams[4], u_AffineParams[5]);
        variation(xy, u_VariationParams[0], u_VariationParams[1],
                  u_VariationParams[2], u_VariationParams[3],
                  u_VariationParams[4]);
        affine(xy,
               u_PostAffineParams[0], u_PostAffineParams[1], u_PostAffineParams[2],
               u_PostAffineParams[3], u_PostAffineParams[4], u_PostAffineParams[5]);
        // post transform
        // affine(xy);
        vColor = vec4(((vec3(1, 0, 0) + vColor.xyz)/2.), alpha);
    } else if(n < weight2) {
        affine(xy,
               u_AffineParams[6], u_AffineParams[7], u_AffineParams[8],
               u_AffineParams[9], u_AffineParams[10], u_AffineParams[11]);
        variation(xy, u_VariationParams[5], u_VariationParams[6],
                  u_VariationParams[7], u_VariationParams[8],
                  u_VariationParams[9]);
        // post transform
        affine(xy,
               u_PostAffineParams[6], u_PostAffineParams[7], u_PostAffineParams[8],
               u_PostAffineParams[9], u_PostAffineParams[10], u_PostAffineParams[11]);
        // affine(xy);
        vColor = vec4(((vec3(1, 1, 0) + vColor.xyz)/2.), alpha);
    } else {
        affine(xy,
               u_AffineParams[12], u_AffineParams[13], u_AffineParams[14],
               u_AffineParams[15], u_AffineParams[16], u_AffineParams[17]);
        variation(xy, u_VariationParams[10], u_VariationParams[11],
                  u_VariationParams[12], u_VariationParams[13],
                  u_VariationParams[14]);
        // post transform
        affine(xy,
               u_PostAffineParams[12], u_PostAffineParams[13], u_PostAffineParams[14],
               u_PostAffineParams[15], u_PostAffineParams[16], u_PostAffineParams[17]);
        // affine(xy);
        vColor = vec4(((vec3(0, 0, 1) + vColor.xyz)/2.), alpha);
    }

    // Final transform
    if(u_useFinal) {
        affine(xy,
               u_FinalAffineParams[0], u_FinalAffineParams[1],
               u_FinalAffineParams[2], u_FinalAffineParams[3],
               u_FinalAffineParams[4], u_FinalAffineParams[5]);
        variation(xy,
                  u_FinalVariationParams[0], u_FinalVariationParams[1],
                  u_FinalVariationParams[2], u_FinalVariationParams[3],
                  u_FinalVariationParams[4]);
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
  float weight2 = u_Weight[0] + u_Weight[1];

  for (int i = 0; i < 30; i++) {
      vec2 n = rand2n(vPosition.xz, float(i));
      vec2 n2 = rand2n(vPosition.yz, float(i)*2.);
      vColor = vec4(n.x, n2.x, n2.y, alpha);
      applyTransformations(xy, n.y, weight2, alpha);
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
