#version 300 es
precision mediump float;

uniform mat4 u_mvpMatrix;
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

void main() {
  vColor = vec4(1);
  float x = vPosition.x;
  float y = vPosition.z;
  vec2 xy = vec2(x, y);
  for (int i = 0; i < 50; i++) {
      float n = rand2n(vPosition.xz, float(i)).x;
      // if (n < 0.3333333) {
      //     x = x / 2.;
      //     y = y / 2.;
      // } else if (n < 0.6666666) {
      //     x = (x + 1.) / 2.;
      //     y = y / 2.;
      // } else {
      //     x = x / 2.;
      //     y = (y + 1.) / 2.;
      // }
      if(n < 0.01) {
          affine(xy,
                 0., 0., 0.,
                 0., 0.16, 0.);
      } else if(n < 0.08) {
          affine(xy,
                 0.2, -0.26, 0.,
                 0.23, 0.22, 1.6);
      } else if(n < 0.15) {
          affine(xy,
                 -0.15, 0.28, 0.,
                 0.26, 0.24, 0.44);
      } else {
          affine(xy,
                 0.85, 0.04, 0.,
                 0.04, 0.85, 1.6);
      }
  }
  
  gl_Position = u_mvpMatrix * vec4(vec3(xy.x, 0, xy.y), 1.0);
  gl_PointSize = 1.;
}
