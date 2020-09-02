export const VARIATIONS = [
    {id: 0, name: "Linear", numParams: 1,
     body: `vec2 var0(vec2 p) {
  return vec2(p.xy);
}`},
    {id: 1, name: "Sinusoidal", numParams: 1,
     body:`vec2 var1(vec2 p) {
    return vec2(sin(p.x), sin(p.y));
}`},
    {id:2, name: "Spherical", numParams: 1,
     body: `vec2 var2(vec2 p) {
    float r = sqrt(dot(p, p));
    float r2 = r * r;
    return vec2(p.x/r2, p.y/r2);
}`},
    {id:3, name: "Swirl", numParams: 1,
     body: `vec2 var3(vec2 p) {
    float r = sqrt(dot(p, p));
    float r2 = r * r;
    return vec2(p.x * sin(r2) - p.y * cos(r2),
                p.x * cos(r2) + p.y * sin(r2));
}`},
    {id:4, name: "Horseshoe", numParams: 1,
     body: `vec2 var4(vec2 p){
    float r = sqrt(dot(p, p));
    return vec2((p.x - p.y) * (p.x + p.y) / r, (2.0 * p.x * p.y) / r);
}`},
    {id:5, name:"Polar", numParams: 1,
     body: `vec2 var5(vec2 p){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    return vec2(theta / 3.141592653589, r - 1.);
}`},
    {id:6, name:"Handkerchief", numParams: 1,
     body: `vec2 var6(vec2 p) {
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    return vec2(r * sin(theta + r), r * cos(theta - r))
}`},
    {id:7, name:"Heart", numParams: 1,
     body: `vec2 var7(vec2 p) {
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    return vec2(r * sin(theta * r), - r * cos(theta * r));
}`},
    {id:8, name:"Disc", numParams: 1,
     body: `vec2 var8(vec2 p) {
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float k = theta / 3.141592653589;
    return vec2(k * sin(3.141592653589 * r),
                k * cos(3.141592653589 * r));
}`},
    {id:9, name:"Spiral", numParams: 1,
     body: `vec2 var9(vec2 p) {
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float invR = 1.0 / r;
     return vec2(invR * (cos(theta) + sin(r)),
                 invR * (sin(theta) - cos(r)));
}`},
    {id:10, name:"Hyperbolic", numParams: 1,
     body: `vec2 var10 (vec2 p){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     return vec2(sin(theta)/r, r * cos(theta));
}`},
    {id:11, name:"Diamond", numParams: 1,
     body: `vec2 var11 (vec2 p){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     return vec2(sin(theta) * cos(r),
                 cos(theta) * sin(r));
}`},
    {id:12, name:"Ex", numParams: 1,
     body: `vec2 var12 (vec2 p){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float p0 = sin(theta + r);
     float p1 = cos(theta - r);
     float p03 = p0 * p0 * p0;
     float p13 = p1 * p1 * p1;
     return vec2(r * (p03 + p13), r * (p03 - p13))
}`},
    {id:13, name:"Julia", numParams: 2,
     body: `vec2 var13 (vec2 p, float rnd){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float sqrtR = sqrt(r);
     float omega = rnd < 0.5 ? 0.0 : 3.141592653589;
     return vec2(sqrtR * cos(theta / 2 + omega),
                 sqrtR * sin(theta / 2 + omega));
}`},
    {id:14, name:"Bent", numParams: 1,
     body: `vec2 var14 (vec2 p){
    if(p.x >= 0. && p.y >= 0.) {
        return p;
    } else if (p.x < 0. && p.y >= 0.) {
        return vec2(2. * p.x, p.y);
    } else if (p.x >= 0. && p.y < 0.) {
        return vec2(p.x, p.y / 2.);
    } else if (p.x < 0. && p.y < 0.) {
        return vec2(2. * p.x, p.y / 2.);
    }
}`},
    {id:15, name:"Waves", numParams: 5,
     body: `vec2 var15 (vec2 p, float b, float c, float e, float f){
     return vec2(p.x + b * sin(p.y / (c * c)),
                 p.y + e * sin(p.x / (f * f)));
}`},
    {id:16, name:"Fisheye", numParams: 1,
     body: `vec2 var16 (vec2 p){
     float r = sqrt(dot(p, p));
     float k = 2. / (r + 1.);
     return vec2(k * p.y, k * p.x);
}`},
    {id:17, name:"Popcorn", numParams: 3,
     body: `vec2 var17 (vec2 p, float c, float f){
     return vec2(p.x + c * sin(tan(3. * p.y)),
                 p.y + f * sin(tan(3. * p.x)));
}`},
    {id:18, name:"Exponential", numParams: 1,
     body: `vec2 var18 (vec2 p){
     float k = exp(p.x - 1.);
     return vec2(k * cos(3.141592653589 * p.y),
                 k * sin(3.141592653589 * p.y));
}`},
    {id: 19, name: "Power", numParams: 1,
     body: `vec2 var19 (vec2 p){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float k = pow(r, sin(theta));
     return vec2(k * cos(theta), k * sin(theta));
}`},
    {id: 20, name: "Cosine", numParams: 1,
     body: `vec2 var20 (vec2 p) {
     return vec2(cos(3.141592653589 * p.x) * cosh(p.y),
          -sin(3.141592653589 * p.x) * sinh(p.y));
}`},
    {id: 21, name: "Rings", numParams: 2,
     body: `vec2 var20 (vec2 p, float c) {
     float r = sqrt(dot(p, p));
     float c2 = c * c;
     float k = mod((r + c2), (2. * c2)) - c2 + r * (1. - c2);
     return vec2(k * Math.cos(theta), Math.sin(theta));
}`},
    {id: 22, name: "Fan", numParams: 3,
     body: `vec2 var22 (vec2 p, float c, float f) {
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float t = 3.141592653589 * c * c;
     float m = mod((theta + f), t);
     if(t > t / 2.) {
            return vec2(r * cos(theta - t / 2.),
                        r * sin(theta - t / 2.));
     } else if (t <= t / 2.) {
            return vec2(r * cos(theta + t / 2.),
                        r * sin(theta + t / 2.));
     }
}`},
    {id: 23, name: "Blob", numParams: 4,
     body: `vec2 var23 (vec2 p, float high, float low, float waves){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float p1 = high;
    float p2 = low;
    float p3 = waves;
    float k = r * (p2 + (p1 - p2)/2. * (sin(p3 * theta) + 1.));
    return vec2(k * Math.cos(theta), k * Math.sin(theta));
}`},
    {id: 24, name: "PDJ", numParams: 5,
     body: `vec2 var24 (vec2 p, float a, float, b, float c, float d){
    float p1 = a;
    float p2 = b;
    float p3 = c;
    float p4 = d;
    return vec2(sin(p1 * y) - cos(p2 * x),
                sin(p3 * x) - cos(p4 * y));
}`},
    {id: 25, name:"Fan2", numParams: 3,
     body: `vec2 var25 (vec2 p, float fan2x, float fan2y){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float p1 = 3.141592653589 * fan2x;
    float p2 = fan2y;
    float t = theta + p2 - p1 * trunc((2 * theta * p2) / p1);
    if (t > p1 / 2.) {
        return vec2(r * sin(theta - p1 / 2.),
                    r * cos(theta - p1 / 2.));
    } else if (t <= p1 / 2.) {
        return vec2(r * sin(theta + p1 / 2.),
                    r * cos(theta + p1 / 2.));
    }
`},
    {id:26, name:"Rings2", numParams: 2,
     body: `vec2 var26 (vec2 p, float v){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float p = v * v;
    float t = r - 2 * p * trunc((r + p) / (2 * p)) + r * (1 - p);
    return vec2(t * sin(theta),
                t * cos(theta));
}`},
    {id:27, name:"Eyefish", numParams: 1,
     body: `vec2 var27(vec2 p){
    float r = sqrt(dot(p, p));
    float k = 2.0 / (r + 1.0);
    return vec2(k * p.x, k * p.y);
}`},
    {id:28, name: "Bubble", numParams: 1,
     body: `vec2 var28(vec2 p) {
    float r = sqrt(dot(p, p));
    float k = 4.0 / (r * r + 4.0);
    return vec2(k * p.x, k * p.y);
}`},
    {id:29, name: "Cylinder", numParams: 1,
     body: `vec2 var29(vec2 p){
    return vec2(sin(p.x), p.y);
}`},
    {id: 30, name: "Perspective", numParams: 3,
     body: `vec2 var30(vec2 p, float angle, float dist){
    float p1 = angle;
    float p2 = dist;
    float k = p2 / (p2 - p.y * sin(p1));
    return vec2(k * p.x, k * p.y * cos(p1));
}`},
    {id: 31, name: "Noise",  numParams: 3,
     body: `vec2 var31(vec2 p, float psi1, float psi2) {
    return vec2(psi1 * p.x * cos(2 * 3.141592653589 * psi2),
                psi1 * p.y * sin(2 * 3.141592653589 * psi2))
}`},
    {id:32, name: "JuliaN", numParams: 4,
     body: `vec2 var32(vec2 p, float psi, float power, float dist){
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(p.y / p.x);
    float t = (phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    return vec2(k * cos(t), k * sin(t));
}`},
    {id:33, name:"JuliaScope", numParams: 5,
     body: `vec2 var33 (vec2 p, float psi, float psi2, float power, float dist){
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(p.y / p.x);
    float delta = (psi2 - 0.5) * 2.0;
    float t = (delta * phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    return vec2(k * cos(t), k * sin(t));
}`},
    {id:34, name:"Blur", numParams: 3,
     body: `vec2 var34(vec2 p, float psi1, float psi2) {
    return vec2(psi1 * cos(2 * 3.141592653589 * psi2),
                psi1 * sin(2 * 3.141592653589 * psi2));
}`},
    {id:35, name:"Gaussian", numParams: 3,
     body: `vec2 var35(vec2 p, float psi1, float psi2, 
                       float psi3, float psi4, float psi5){
     float k = psi1 + psi2 + psi3 + psi4 - 2.;
     return vec2(k * cos(2 * 3.141592653589 * psi5),
                 k * sin(2 * 3.141592653589 * psi5));
}`},
    {id:36, name:"RadialBlur", numParams: 1,
     body: `vec2 var36(vec2 p){
    return;
}`},
    {id:37, name:"Pie", numParams: 7,
     body: `vec2 var37(vec2 p, float slices, float rotation, float thickness, float psi1, flat psi2, float psi3){
    float p1 = slices;
    float p2 = rotation;
    float p3 = thickness;
    float t1 = trunc(psi1 * p1 + 0.5);
    float t2 = p2 + (2 * 3.141592653589) / p1 * (t1 + psi2 * p3);
    float psi3 = psi3;
    return vec2(psi3 * cos(t2), psi3 * sin(t2));
}`},
    {id:38, name:"Ngon", numParams: 6,
     body: `
`},
    {id:39, name:"Curl", numParams: 3,
     body: `vec2 var39(vec2 p, float c1, float c2) {
    float p1 = c1;
    float p2 = c2;
    float t1 = 1 + p1 * p.x + p2 * (p.x * p.x - p.y * p.y);
    float t2 = p1 * p.y + 2 * p2 * p.x * p.y;
    float k = 1 / (t1 * t1 + t2 * t2);
    return vec2(k * (p.x * t1 + p.y * t2),
                k * (p.y * t1 - p.x * t2));
}`},
    {id:40, name:"Rectangles", numParams: 4,
     body:`
`},
    {id:41, name:"Arch", numParams: 3,
     body:`vec2 var41(vec2 p, float blend, float psi){
    float s = sin(psi * 3.141592653589 * blend);
    float s2 = s * s;
    return vec2(s, s2 / cos(psi * 3.141592653589 * blend));
}`},
    {id:42, name:"Tangent", numParams: 1,
     body:`vec2 var42(vec2 p){
    return vec2(sin(p.x) / cos(p.y), tan(p.y));
}`},
    {id:43, name:"Square", numParams: 3,
     body: `vec2 var43(vec2 p, float psi1, float psi2){
    return vec2(psi1 - 0.5, psi2 - 0.5);
}`},
    {id:44, name:"Rays", numParams: 3,
     body: `vec2 var44(vec2 p, float blend, float psi){
    float r = sqrt(dot(p, p));
    float k = (blend * tan(psi * 3.141592653589 * blend)) / (r * r);
    return vec2(k * cos(p.x), k * sin(p.y));
}`},
    {id:45, name:"Blade", numParams: 3,
     body:`vec2 var45(vec2 p, float blend, float psi){
    float r = sqrt(dot(p, p));
    float c = cos(psi * r * blend);
    float s = sin(psi * r * blend);
    return vec2(p.x * (c + s), p.x * (c - s));
}`},
    {id:46, name:"Secant", numParams: 2,
     body:`vec2 var46(vec2 p, float blend){
    float r = sqrt(dot(p, p));
    return vec2(p.x, 1.0 / (blend * cos(blend * r)));
}`},
    {id:47, name:"Twintrian", numParams: 3,
     body: `vec2 var47(vec2 p, float blend, float psi){
    float r = sqrt(dot(p, p));
    float sin2 = sin(psi * r * blend) *
          sin(psi * r * blend);
    float t = log(sin2) / log(10)  + cos(psi * r * blend);
    return vec2(p.x * t,
                p.x * (t - 3.141592653589 * sin(psi * r * blend)));
}`},
    {id:48, name:"Cross", numParams: 1,
     body: `vec2 var48(vec2 p){
    float n = (p.x * p.x - p.y * p.y);
    float k = sqrt(1 / (n * n));
    return vec2(k * x, k * y);
}`}]

//Λ is a random variable that is either -1 or 1. Ψ is a random variable
//uniformally distributed on the interval [0, 1]. The ’trunc’ function returns the
//integer part of a floating-point value.
