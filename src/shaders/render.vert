#version 300 es
precision mediump float;

uniform mat4 u_mvpMatrix;
uniform float u_Weight[2];
uniform float u_AffineParams[18];
uniform float u_VariationParams[15];
uniform float u_ColorParams[9];

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

void affine(inout vec2 p, float a, float b, float c, float d, float e, float f) {
    float x = p.x;
    float y = p.y;
 
    p.x = a*x + b*y + c;
    p.y = d*x + e*y + f;
}

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
vec2 var4(vec2 p) {
    vec2 tmp = vec2(sin(p.x)/cos(p.y), tan(p.y));
    return tmp;
}
 
// bubble
vec2 var5(in vec2 p, in float r2) {
    vec2 tmp = vec2(p.xy);
    tmp = tmp * (4.0 / (r2 + 4.0));
    return tmp;
}

void variation(inout vec2 p, in float v1, in float v2, in float v3, in float v4, in float v5) {
    float r2 = p.x * p.x + p.y * p.y + 0.00001;
    p = var1(p) * v1 + var2(p, r2) * v2 + var3(p, r2) * v3 + var4(p) * v4 + var5(p, r2) * v5;
}

void main() {
  float x = vPosition.x;
  float y = vPosition.z;
  vec2 xy = vec2(x, y);
  float alpha = 0.8;
  float weight2 = u_Weight[0] + u_Weight[1];

  for (int i = 0; i < 50; i++) {
      float n = rand2n(vPosition.xz, float(i)).x;

      if(n < u_Weight[0]) {
          affine(xy,
                 u_AffineParams[0], u_AffineParams[1], u_AffineParams[2],
                 u_AffineParams[3], u_AffineParams[4], u_AffineParams[5]);
          vColor = vec4(1, 0, 0, alpha);
      } else if(n < weight2) {
          affine(xy,
                 u_AffineParams[6], u_AffineParams[7], u_AffineParams[8],
                 u_AffineParams[9], u_AffineParams[10], u_AffineParams[11]);
          vColor = vec4(1, 1, 0, alpha);
      } else {
          affine(xy,
                 u_AffineParams[12], u_AffineParams[13], u_AffineParams[14],
                 u_AffineParams[15], u_AffineParams[16], u_AffineParams[17]);
          vColor = vec4(0, 0, 1, alpha);
      }
  }
  vColor = vec4(u_Weight[0], u_Weight[1], 0, alpha);
  gl_Position = u_mvpMatrix * vec4(vec3(xy.x, 0, xy.y), 1.0);
  gl_PointSize = 1.;
}
