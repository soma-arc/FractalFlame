export const VARIATIONS = [
    {id: 0, name: "Linear", numParams: 0,
     body: `vec2 var0(vec2 p, float v) {
  return vec2(p.xy);
}`},
    {id: 1, name: "Sinusoidal", numParams: 0,
     body:`vec2 var1(vec2 p, float v) {
    return vec2(sin(p.x), sin(p.y));
}`},
    {id:2, name: "Spherical", numParams: 0,
     body: `vec2 var2(vec2 p, float v) {
    float r = sqrt(dot(p, p));
    float r2 = r * r;
    return vec2(p.x/r2, p.y/r2);
}`},
    {id:3, name: "Swirl", numParams: 0,
     body: `vec2 var3(vec2 p, float v) {
    float r = sqrt(dot(p, p));
    float r2 = r * r;
    return vec2(p.x * sin(r2) - p.y * cos(r2),
                p.x * cos(r2) + p.y * sin(r2));
}`},
    {id:4, name: "Horseshoe", numParams: 0,
     body: `vec2 var4(vec2 p, float v){
    float r = sqrt(dot(p, p));
    return vec2((p.x - p.y) * (p.x + p.y) / r, (2.0 * p.x * p.y) / r);
}`},
    {id:5, name:"Polar", numParams: 0,
     body: `vec2 var5(vec2 p, float v){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    return vec2(theta / 3.141592653589, r - 1.);
}`},
    {id:6, name:"Handkerchief", numParams: 0,
     body: `vec2 var6(vec2 p, float v) {
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    return vec2(r * sin(theta + r), r * cos(theta - r));
}`},
    {id:7, name:"Heart", numParams: 0,
     body: `vec2 var7(vec2 p, float v) {
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    return vec2(r * sin(theta * r), - r * cos(theta * r));
}`},
    {id:8, name:"Disc", numParams: 0,
     body: `vec2 var8(vec2 p, float v) {
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float k = theta / 3.141592653589;
    return vec2(k * sin(3.141592653589 * r),
                k * cos(3.141592653589 * r));
}`},
    {id:9, name:"Spiral", numParams: 0,
     body: `vec2 var9(vec2 p, float v) {
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float invR = 1.0 / r;
     return vec2(invR * (cos(theta) + sin(r)),
                 invR * (sin(theta) - cos(r)));
}`},
    {id:10, name:"Hyperbolic", numParams: 0,
     body: `vec2 var10 (vec2 p, float v){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     return vec2(sin(theta)/r, r * cos(theta));
}`},
    {id:11, name:"Diamond", numParams: 0,
     body: `vec2 var11 (vec2 p, float v){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     return vec2(sin(theta) * cos(r),
                 cos(theta) * sin(r));
}`},
    {id:12, name:"Ex", numParams: 0,
     body: `vec2 var12 (vec2 p, float v){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float p0 = sin(theta + r);
     float p1 = cos(theta - r);
     float p03 = p0 * p0 * p0;
     float p13 = p1 * p1 * p1;
     return vec2(r * (p03 + p13), r * (p03 - p13));
}`},
    {id:13, name:"Julia", numParams: 0,
     body: `vec2 var13 (vec2 p, float v){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float sqrtR = sqrt(r);
     float rnd = rand(p);
     float omega = rnd < 0.5 ? 0.0 : 3.141592653589;
     return vec2(sqrtR * cos(theta / 2. + omega),
                 sqrtR * sin(theta / 2. + omega));
}`},
    {id:14, name:"Bent", numParams: 0,
     body: `vec2 var14 (vec2 p, float v){
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
    {id:15, name:"Waves", numParams: 4,
     body: `vec2 var15 (vec2 p, float v, float b, float c, float e, float f){
     return vec2(p.x + b * sin(p.y / (c * c)),
                 p.y + e * sin(p.x / (f * f)));
}`},
    {id:16, name:"Fisheye", numParams: 0,
     body: `vec2 var16 (vec2 p, float v){
     float r = sqrt(dot(p, p));
     float k = 2. / (r + 1.);
     return vec2(k * p.y, k * p.x);
}`},
    {id:17, name:"Popcorn", numParams: 2,
     body: `vec2 var17 (vec2 p, float v, float c, float f){
     return vec2(p.x + c * sin(tan(3. * p.y)),
                 p.y + f * sin(tan(3. * p.x)));
}`},
    {id:18, name:"Exponential", numParams: 0,
     body: `vec2 var18 (vec2 p, float v){
     float k = exp(p.x - 1.);
     return vec2(k * cos(3.141592653589 * p.y),
                 k * sin(3.141592653589 * p.y));
}`},
    {id: 19, name: "Power", numParams: 0,
     body: `vec2 var19 (vec2 p, float v){
     float r = sqrt(dot(p, p));
     float theta = atan(p.x / p.y);
     float k = pow(r, sin(theta));
     return vec2(k * cos(theta), k * sin(theta));
}`},
    {id: 20, name: "Cosine", numParams: 0,
     body: `vec2 var20 (vec2 p, float v) {
     return vec2(cos(3.141592653589 * p.x) * cosh(p.y),
          -sin(3.141592653589 * p.x) * sinh(p.y));
}`},
    {id: 21, name: "Rings", numParams: 1,
     body: `vec2 var21 (vec2 p, float v, float c) {
     float r = sqrt(dot(p, p));
     float c2 = c * c;
     float k = mod((r + c2), (2. * c2)) - c2 + r * (1. - c2);
     return vec2(k * cos(theta), sin(theta));
}`},
    {id: 22, name: "Fan", numParams: 2,
     body: `vec2 var22 (vec2 p, float v, float c, float f) {
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
    {id: 23, name: "Blob", numParams: 3,
     body: `vec2 var23 (vec2 p, float v, float high, float low, float waves){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float p1 = high;
    float p2 = low;
    float p3 = waves;
    float k = r * (p2 + (p1 - p2)/2. * (sin(p3 * theta) + 1.));
    return vec2(k * cos(theta), k * sin(theta));
}`},
    {id: 24, name: "PDJ", numParams: 4,
     body: `vec2 var24 (vec2 p, float v, float a, float, b, float c, float d){
    float p1 = a;
    float p2 = b;
    float p3 = c;
    float p4 = d;
    return vec2(sin(p1 * y) - cos(p2 * x),
                sin(p3 * x) - cos(p4 * y));
}`},
    {id: 25, name:"Fan2", numParams: 2,
     body: `vec2 var25 (vec2 p, float v, float fan2x, float fan2y){
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
    {id:26, name:"Rings2", numParams: 1,
     body: `vec2 var26 (vec2 p, float v, float vVal){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y);
    float p = vVal * vVal;
    float t = r - 2 * p * trunc((r + p) / (2 * p)) + r * (1 - p);
    return vec2(t * sin(theta),
                t * cos(theta));
}`},
    {id:27, name:"Eyefish", numParams: 0,
     body: `vec2 var27(vec2 p, float v){
    float r = sqrt(dot(p, p));
    float k = 2.0 / (r + 1.0);
    return vec2(k * p.x, k * p.y);
}`},
    {id:28, name: "Bubble", numParams: 0,
     body: `vec2 var28(vec2 p, float v) {
    float r = sqrt(dot(p, p));
    float k = 4.0 / (r * r + 4.0);
    return vec2(k * p.x, k * p.y);
}`},
    {id:29, name: "Cylinder", numParams: 0,
     body: `vec2 var29(vec2 p, float v){
    return vec2(sin(p.x), p.y);
}`},
    {id: 30, name: "Perspective", numParams: 2,
     body: `vec2 var30(vec2 p, float v, float angle, float dist){
    float p1 = angle;
    float p2 = dist;
    float k = p2 / (p2 - p.y * sin(p1));
    return vec2(k * p.x, k * p.y * cos(p1));
}`},
    {id: 31, name: "Noise",  numParams: 0,
     body: `vec2 var31(vec2 p, float v) {
    vec2 rnd2 = rand2n(p, rand(p));
    float psi1 = rnd2.x;
    float psi2 = rnd2.y;
    return vec2(psi1 * p.x * cos(2. * 3.141592653589 * psi2),
                psi1 * p.y * sin(2. * 3.141592653589 * psi2));
}`},
    {id:32, name: "JuliaN", numParams: 2,
     body: `vec2 var32(vec2 p, float v, float power, float dist){
    float psi = rand(p);
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(p.y / p.x);
    float t = (phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    return vec2(k * cos(t), k * sin(t));
}`},
    {id:33, name:"JuliaScope", numParams: 2,
     body: `vec2 var33 (vec2 p, float v, float power, float dist){
    vec2 rnd2 = rand2n(p, rand(p));
    float psi = rnd2.x;
    float psi2 = rnd2.y;
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(p.y / p.x);
    float delta = (psi2 - 0.5) * 2.0;
    float t = (delta * phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    return vec2(k * cos(t), k * sin(t));
}`},
    {id:34, name:"Blur", numParams: 0,
     body: `vec2 var34(vec2 p, float v) {
    vec2 rnd2 = rand2n(p, rand(p));
    float psi1 = rnd2.x;
    float psi2 = rnd2.y;
    return vec2(psi1 * cos(2. * 3.141592653589 * psi2),
                psi1 * sin(2. * 3.141592653589 * psi2));
}`},
    {id:35, name:"Gaussian", numParams: 0,
     body: `vec2 var35(vec2 p, float v){
     vec2 rnd1 = rand2n(p, rand(p));
     float psi1 = rnd1.x;
     float psi2 = rnd1.y;
     vec2 rnd2 = rand2n(p + vec2(psi2, psi1), rand(p));
     float psi3 = rnd2.x;
     float psi4 = rnd2.y;
     float psi5 = rand(p);
     float k = psi1 + psi2 + psi3 + psi4 - 2.;
     return vec2(k * cos(2. * 3.141592653589 * psi5),
                 k * sin(2. * 3.141592653589 * psi5));
}`},
    {id:36, name:"RadialBlur", numParams: 1,
     body: `vec2 var36(vec2 p, float v, float angle){
     float p1 = angle * (3.141592653589 * 0.5);
     vec2 rnd1 = rand2n(p, rand(p));
     float psi1 = rnd1.x;
     float psi2 = rnd1.y;
     vec2 rnd2 = rand2n(p + vec2(psi2, psi1), rand(p));
     float psi3 = rnd2.x;
     float psi4 = rnd2.y;
     float t1 = psi1 + psi2 + psi3 + psi4 - 2.;
     float phi = atan(p.y / p.x);
     float t2 = phi + t1 * sin(p1);
     float t3 = t1 * cos(p1) - 1.0;
     float r = sqrt(dot(p, p));
     return vec2((r * cos(t2) + t3 * p.x)/v,
                 (r * sin(t2) + t3 * p.y)/v);
}`},
    {id:37, name:"Pie", numParams: 3,
     body: `vec2 var37(vec2 p, float v, float slices, float rotation, float thickness){
     vec2 rnd1 = rand2n(p, rand(p));
     float psi1 = rnd1.x;
     float psi2 = rnd1.y;
     float psi3 = rand(p + vec2(psi2, psi1));
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
    {id:39, name:"Curl", numParams: 2,
     body: `vec2 var39(vec2 p, float v, float c1, float c2) {
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
    {id:41, name:"Arch", numParams: 0,
     body:`vec2 var41(vec2 p, float v){
    float psi = rand(p);
    float s = sin(psi * 3.141592653589 * v);
    float s2 = s * s;
    return vec2(s, s2 / cos(psi * 3.141592653589 * v));
}`},
    {id:42, name:"Tangent", numParams: 0,
     body:`vec2 var42(vec2 p, float v){
    return vec2(sin(p.x) / cos(p.y), tan(p.y));
}`},
    {id:43, name:"Square", numParams: 0,
     body: `vec2 var43(vec2 p, float v){
     vec2 rnd1 = rand2n(p, rand(p));
     return vec2(rnd1.x - 0.5, rnd1.y - 0.5);
}`},
    {id:44, name:"Rays", numParams: 0,
     body: `vec2 var44(vec2 p, float v){
    float r2 = dot(p, p);
    float psi = rand(p);
    float k = (v * tan(psi * 3.141592653589 * v)) / r2;
    return vec2(k * cos(p.x), k * sin(p.y));
}`},
    {id:45, name:"Blade", numParams: 0,
     body:`vec2 var45(vec2 p, float v){
    float psi = rand(p);
    float r = sqrt(dot(p, p));
    float c = cos(psi * r * v);
    float s = sin(psi * r * v);
    return vec2(p.x * (c + s), p.x * (c - s));
}`},
    {id:46, name:"Secant", numParams: 0,
     body:`vec2 var46(vec2 p, float v){
    float r = sqrt(dot(p, p));
    return vec2(p.x, 1.0 / (v * cos(v * r)));
}`},
    {id:47, name:"Twintrian", numParams: 0,
     body: `vec2 var47(vec2 p, float v){
    float psi = rand(p);
    float r = sqrt(dot(p, p));
    float sin2 = sin(psi * r * v) *
                 sin(psi * r * v);
    float t = log(sin2) / log(10.0)  + cos(psi * r * v);
    return vec2(p.x * t,
                p.x * (t - 3.141592653589 * sin(psi * r * v)));
}`},
    {id:48, name:"Cross", numParams: 0,
     body: `vec2 var48(vec2 p, float v){
    float n = (p.x * p.x - p.y * p.y);
    float k = sqrt(1.0 / (n * n));
    return vec2(k * p.x, k * p.y);
}`},
    {id:49, name:"Loxodromic", numParams: 0,
     body: `
vec4 c1 = vec4(-1.2, 0, 0.5, 0.5 * 0.5);
vec4 c2 = vec4(-1.5, 0, 1, 1 * 1);
vec4 c3 = vec4(-0.1, 1.85, 2.0934421415458306,
               2.0934421415458306 * 2.0934421415458306);
// [loxoDir.x, loxoDir.y, loxoNormal.x loxoNormal.y]
vec4 line = vec4(-1, 0, 0, -1);
vec2 var49(vec2 pos, float v) {
     pos = circleInvert(pos, c2);
     pos = circleInvert(pos, c1);

     pos = circleInvert(pos, c3);
    
// The line is pass through the center of c2,
// thus subtract c2.xy, and the line path through the origin.
     pos = pos - c2.xy;
     float d = dot(pos, line.zw);
     pos = pos - line.zw * (2.0 * d);
     pos = pos + c2.xy;
     return pos;
}

`},
    {id:50, name:"Loxodromic2", numParams: 0,
     body: `
vec4 c1 = vec4(-1.2, 0, 0.5, 0.5 * 0.5);
vec4 c2 = vec4(-1.5, 0, 1, 1 * 1);
vec4 c3 = vec4(-0.1, 1.85, 2.0934421415458306,
               2.0934421415458306 * 2.0934421415458306);
// [loxoDir.x, loxoDir.y, loxoNormal.x loxoNormal.y]
vec4 line = vec4(-1, 0, 0, -1);

vec2 var50(in vec2 pos, float v) {
    pos = pos - c2.xy;
    float d = dot(pos, line.zw);
    pos = pos - line.zw * (2.0 * d);
    pos = pos + c2.xy;

    pos = circleInvert(pos, c3);
    
    pos = circleInvert(pos, c1);
    pos = circleInvert(pos, c2);
    return pos;
}

`},
    {id:51, name:"LoxoScale", numParams: 0,
     body: `
vec2 var51(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 lambda = vec2(sqrt(3.) * 0.5, 0.5) * 0.8;
    tmp = complexProd(tmp, lambda);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:52, name:"LoxoScale2", numParams: 0,
     body: `
vec2 var52(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 lambda = vec2(sqrt(3.) * 0.5, 0.5) * 0.8;
    tmp = complexProd(tmp, lambda);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
    {id:53, name:"LoxoSwirlA", numParams: 0,
     body: `
vec2 var53(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r2 = dot(tmp, tmp);
    tmp = vec2(tmp.x * sin(r2) - tmp.y * cos(r2),
               tmp.x * cos(r2) + tmp.y * sin(r2));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:54, name:"LoxoSwirlB", numParams: 0,
     body: `
vec2 var54(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r2 = dot(tmp, tmp);
    tmp = vec2(tmp.x * sin(r2) - tmp.y * cos(r2),
               tmp.x * cos(r2) + tmp.y * sin(r2));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
    {id:55, name:"LoxoTangentA", numParams: 0,
     body: `
vec2 var55(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(sin(tmp.x) / cos(tmp.y), tan(tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:56, name:"LoxoTangentB", numParams: 0,
     body: `
vec2 var56(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(sin(tmp.x) / cos(tmp.y), tan(tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`}];


//Λ is a random variable that is either -1 or 1. Ψ is a random variable
//uniformally distributed on the interval [0, 1]. The ’trunc’ function returns the
//integer part of a floating-point value.
