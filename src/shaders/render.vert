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

void main() {
  float x = vPosition.x;
  float y = vPosition.z;

  vec2 xy = vec2(x, y);
  float alpha = 0.1;

  for (int i = 0; i < 30; i++) {
      vec2 n = rand2n(vPosition.xz, float(i));
      vec2 n2 = rand2n(vPosition.yz, float(i)*2.);
      vColor = vec4(n.x, n2.x, n2.y, alpha);
  }
  vColor = vec4(1, 0, 0, alpha);
  vColor = clamp(vColor, 0.0, 1.0);
  gl_Position = u_mvpMatrix * vec4(vec3(xy.x, 0, xy.y), 1.0);
  gl_PointSize = 5.;
}
