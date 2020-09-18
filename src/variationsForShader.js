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
     float theta = atan(p.x, p.y);
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
     body: `vec2 var24 (vec2 p, float v, float a, float b, float c, float d){
    float p1 = a;
    float p2 = b;
    float p3 = c;
    float p4 = d;
    return vec2(sin(p1 * p.y) - cos(p2 * p.x),
                sin(p3 * p.x) - cos(p4 * p.y));
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
     body: `vec2 var26 (vec2 pos, float v, float vVal){
    float r = sqrt(dot(pos, pos));
    float theta = atan(pos.x / pos.y);
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
     float t2 = p2 + (2. * 3.141592653589) / p1 * (t1 + psi2 * p3);
     return vec2(psi3 * cos(t2), psi3 * sin(t2));
}`},
    {id:38, name:"Ngon", numParams: 4,
     body: `vec2 var38(vec2 p, float v, float power, float sides, float corners, float circle) {
     float phi = atan(y/x);
     float p1 = power;
     float p2 = 2. * 3.141592653589;
     float p3 = corners;
     float p4 = circle;
     float t3 = phi - p2 * floor(phi/p2);
     float t4 = t3 > p2/2.0 ? t3 : t3-p2;
     float r = sqrt(dot(p, p));
     float k = (p3 * (1.0/cos(t4) - 1.0) + p4) / pow(r, p1);
     return k * p;
}`},
    {id:39, name:"Curl", numParams: 2,
     body: `vec2 var39(vec2 p, float v, float c1, float c2) {
    float p1 = c1;
    float p2 = c2;
    float t1 = 1.0 + p1 * p.x + p2 * (p.x * p.x - p.y * p.y);
    float t2 = p1 * p.y + 2.0 * p2 * p.x * p.y;
    float k = 1.0 / (t1 * t1 + t2 * t2);
    return vec2(k * (p.x * t1 + p.y * t2),
                k * (p.y * t1 - p.x * t2));
}`},
    {id:40, name:"Rectangles", numParams: 2,
     body:`vec2 var40(vec2 p, float v, float rectX, float rectY) {
     float p1 = rectX;
     float p2 = rectY;
     return vec2((2. * floor(p.x / p1) + 1.0) * p1 - p.x,
                 (2. * floor(p.y / p2) + 1.0) * p2 - p.y;
}`},
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
{id:49, name:"LoxoScaleA", numParams: 0,
     body: `
vec2 var49(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float torsion = 0.8;
    vec2 lambda = vec2(sqrt(3.) * 0.5, 0.5) * torsion;
    tmp = complexProd(tmp, lambda);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:50, name:"LoxoScaleB", numParams: 0,
     body: `
vec2 var50(in vec2 pos, float v) {
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
{id:51, name:"LoxoLinearA", numParams: 0,
     body: `
vec2 var51(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp =  vec2(tmp.x, tmp.y);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:52, name:"LoxoLinearB", numParams: 0,
     body: `
vec2 var52(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp =  vec2(tmp.x, tmp.y);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:53, name:"LoxoSinusoidalA", numParams: 0,
     body: `
vec2 var53(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(sin(tmp.x), sin(tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:54, name:"LoxoSinusoidalB", numParams: 0,
     body: `
vec2 var54(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(sin(tmp.x), sin(tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:55, name:"LoxoSphericalA", numParams: 0,
     body: `
vec2 var55(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float r2 = r * r;
    tmp = vec2(tmp.x/r2, tmp.y/r2);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:56, name:"LoxoSphericalB", numParams: 0,
     body: `
vec2 var56(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float r2 = r * r;
    tmp = vec2(tmp.x/r2, tmp.y/r2);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
 {id:57, name:"LoxoSwirlA", numParams: 0,
     body: `
vec2 var57(in vec2 pos, float v) {
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
{id:58, name:"LoxoSwirlB", numParams: 0,
     body: `
vec2 var58(in vec2 pos, float v) {
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
{id:59, name:"LoxoHorseshoeA", numParams: 0,
     body: `
vec2 var59(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    tmp = vec2((tmp.x - tmp.y) * (tmp.x + tmp.y) / r, (2.0 * tmp.x * tmp.y) / r);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:60, name:"LoxoHorseshoeB", numParams: 0,
     body: `
vec2 var60(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    tmp = vec2((tmp.x - tmp.y) * (tmp.x + tmp.y) / r, (2.0 * tmp.x * tmp.y) / r);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:61, name:"LoxoPolarA", numParams: 0,
     body: `
vec2 var61(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    tmp = vec2(theta / 3.141592653589, r - 1.);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:62, name:"LoxoPolarB", numParams: 0,
     body: `
vec2 var62(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    tmp = vec2(theta / 3.141592653589, r - 1.);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:63, name:"LoxoHandkerchiefA", numParams: 0,
     body: `
vec2 var63(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    tmp = vec2(r * sin(theta + r), r * cos(theta - r));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:64, name:"LoxoHandkerchiefB", numParams: 0,
     body: `
vec2 var64(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    tmp = vec2(r * sin(theta + r), r * cos(theta - r));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:65, name:"LoxoHeartA", numParams: 0,
     body: `
vec2 var65(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    tmp = vec2(r * sin(theta * r), - r * cos(theta * r));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:66, name:"LoxoHeartB", numParams: 0,
     body: `
vec2 var66(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    tmp =  vec2(r * sin(theta * r), - r * cos(theta * r));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:67, name:"LoxoDiscA", numParams: 0,
     body: `
vec2 var67(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float k = theta / 3.141592653589;
    tmp = vec2(k * sin(3.141592653589 * r),
                k * cos(3.141592653589 * r));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:68, name:"LoxoDiscB", numParams: 0,
     body: `
    vec2 var68(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float k = theta / 3.141592653589;
    tmp =  vec2(k * sin(3.141592653589 * r),
                k * cos(3.141592653589 * r));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:69, name:"LoxoSpiralA", numParams: 0,
     body: `
vec2 var69(in vec2 pos, float v) {
     vec2 num = pos - vec2(1, 0);
     vec2 denom = pos + vec2(1, 0);
     vec2 tmp = complexDiv(num, denom);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     float invR = 1.0 / r;
     tmp =  vec2(invR * (cos(theta) + sin(r)),
                 invR * (sin(theta) - cos(r)));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
 {id:70, name:"LoxoSpiralB", numParams: 0,
     body: `
    vec2 var70(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     float invR = 1.0 / r;
     tmp = vec2(invR * (cos(theta) + sin(r)),
                invR * (sin(theta) - cos(r)));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:71, name:"LoxoHyperbolicA", numParams: 0,
     body: `
    vec2 var71(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     tmp = vec2(sin(theta)/r, r * cos(theta));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:72, name:"LoxoHyperbolicB", numParams: 0,
     body: `
    vec2 var72(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     tmp = vec2(sin(theta)/r, r * cos(theta));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:73, name:"LoxoDiamondA", numParams: 0,
     body: `
    vec2 var73(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     tmp = vec2(sin(theta) * cos(r),
                cos(theta) * sin(r));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:74, name:"LoxoDiamondB", numParams: 0,
     body: `
    vec2 var74(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     tmp = vec2(sin(theta) * cos(r),
                cos(theta) * sin(r));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:75, name:"LoxoExA", numParams: 0,
     body: `
    vec2 var75(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     float p0 = sin(theta + r);
     float p1 = cos(theta - r);
     float p03 = p0 * p0 * p0;
     float p13 = p1 * p1 * p1;
     tmp = vec2(r * (p03 + p13), r * (p03 - p13));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:76, name:"LoxoExB", numParams: 0,
     body: `
    vec2 var76(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

     float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     float p0 = sin(theta + r);
     float p1 = cos(theta - r);
     float p03 = p0 * p0 * p0;
     float p13 = p1 * p1 * p1;
     tmp = vec2(r * (p03 + p13), r * (p03 - p13));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:77, name:"LoxoJuliaA", numParams: 0,
     body: `
    vec2 var77(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float sqrtR = sqrt(r);
    float rnd = rand(tmp);
    float omega = rnd < 0.5 ? 0.0 : 3.141592653589;
    tmp =  vec2(sqrtR * cos(theta / 2. + omega),
                sqrtR * sin(theta / 2. + omega));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:78, name:"LoxoJuliaB", numParams: 0,
     body: `
    vec2 var78(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float sqrtR = sqrt(r);
    float rnd = rand(tmp);
    float omega = rnd < 0.5 ? 0.0 : 3.141592653589;
    tmp = vec2(sqrtR * cos(theta / 2. + omega),
               sqrtR * sin(theta / 2. + omega));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:79, name:"LoxoBentA", numParams: 0,
     body: `
    vec2 var79(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    if(tmp.x >= 0. && tmp.y >= 0.) {
        tmp = tmp;
    } else if (tmp.x < 0. && tmp.y >= 0.) {
        tmp = vec2(2. * tmp.x, tmp.y);
    } else if (tmp.x >= 0. && tmp.y < 0.) {
        tmp = vec2(tmp.x, tmp.y / 2.);
    } else if (tmp.x < 0. && tmp.y < 0.) {
        tmp = vec2(2. * tmp.x, tmp.y / 2.);
    }

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:80, name:"LoxoBentB", numParams: 0,
     body: `
    vec2 var80(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    if(tmp.x >= 0. && tmp.y >= 0.) {
        tmp = tmp;
    } else if (tmp.x < 0. && tmp.y >= 0.) {
        tmp = vec2(2. * tmp.x, tmp.y);
    } else if (tmp.x >= 0. && tmp.y < 0.) {
        tmp = vec2(tmp.x, tmp.y / 2.);
    } else if (tmp.x < 0. && tmp.y < 0.) {
        tmp = vec2(2. * tmp.x, tmp.y / 2.);
    }

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:81, name:"LoxoWavesA", numParams: 4,
     body: `
    vec2 var81(in vec2 pos, float v, float b, float c, float e, float f) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(tmp.x + b * sin(tmp.y / (c * c)),
               tmp.y + e * sin(tmp.x / (f * f)));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:82, name:"LoxoWavesB", numParams: 4,
     body: `
    vec2 var82(in vec2 pos, float v, float b, float c, float e, float f) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(tmp.x + b * sin(tmp.y / (c * c)),
               tmp.y + e * sin(tmp.x / (f * f)));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:83, name:"LoxoFisheyeA", numParams: 0,
     body: `
    vec2 var83(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float k = 2. / (r + 1.);
    tmp = vec2(k * tmp.y, k * tmp.x);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:84, name:"LoxoFisheyeB", numParams: 0,
     body: `
    vec2 var84(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float k = 2. / (r + 1.);
    tmp = vec2(k * tmp.y, k * tmp.x);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:85, name:"LoxoPopcornA", numParams: 2,
     body: `
    vec2 var85(in vec2 pos, float v, float c, float f) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(tmp.x + c * sin(tan(3. * tmp.y)),
               tmp.y + f * sin(tan(3. * tmp.x)));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:86, name:"LoxoPopcornB", numParams: 2,
     body: `
    vec2 var86(in vec2 pos, float v, float c, float f) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(tmp.x + c * sin(tan(3. * tmp.y)),
               tmp.y + f * sin(tan(3. * tmp.x)));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:87, name:"LoxoExponentialA", numParams: 0,
     body: `
    vec2 var87(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float k = exp(tmp.x - 1.);
    tmp = vec2(k * cos(3.141592653589 * tmp.y),
               k * sin(3.141592653589 * tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:88, name:"LoxoExponentialB", numParams: 0,
     body: `
    vec2 var88(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float k = exp(tmp.x - 1.);
    tmp = vec2(k * cos(3.141592653589 * tmp.y),
               k * sin(3.141592653589 * tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:89, name:"LoxoPowerA", numParams: 0,
     body: `
    vec2 var89(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float k = pow(r, sin(theta));
    tmp = vec2(k * cos(theta), k * sin(theta));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:90, name:"LoxoPowerB", numParams: 0,
     body: `
    vec2 var90(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float k = pow(r, sin(theta));
    tmp = vec2(k * cos(theta), k * sin(theta));    

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:91, name:"LoxoCosineA", numParams: 0,
     body: `
    vec2 var91(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(cos(3.141592653589 * tmp.x) * cosh(tmp.y),
               -sin(3.141592653589 * tmp.x) * sinh(tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:92, name:"LoxoCosineB", numParams: 0,
     body: `
    vec2 var92(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(cos(3.141592653589 * tmp.x) * cosh(tmp.y),
               -sin(3.141592653589 * tmp.x) * sinh(tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:93, name:"LoxoRingsA", numParams: 1,
     body: `
    vec2 var93(in vec2 pos, float v, float c) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float theta = atan(tmp.x, tmp.y);
    float r = sqrt(dot(tmp, tmp));
    float c2 = c * c;
    float k = mod((r + c2), (2. * c2)) - c2 + r * (1. - c2);
    tmp = vec2(k * cos(theta), sin(theta));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:94, name:"LoxoRingsB", numParams: 1,
     body: `
    vec2 var94(in vec2 pos, float v, float c) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float theta = atan(tmp.x, tmp.y);
    float r = sqrt(dot(tmp, tmp));
    float c2 = c * c;
    float k = mod((r + c2), (2. * c2)) - c2 + r * (1. - c2);
    tmp = vec2(k * cos(theta), sin(theta));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:95, name:"LoxoFanA", numParams: 2,
     body: `
    vec2 var95(in vec2 pos, float v, float c, float f) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
     float theta = atan(tmp.x / tmp.y);
     float t = 3.141592653589 * c * c;
     float m = mod((theta + f), t);
     if(t > t / 2.) {
            tmp = vec2(r * cos(theta - t / 2.),
                        r * sin(theta - t / 2.));
     } else if (t <= t / 2.) {
            tmp = vec2(r * cos(theta + t / 2.),
                        r * sin(theta + t / 2.));
     }

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:96, name:"LoxoFanB", numParams: 2,
     body: `
    vec2 var96(in vec2 pos, float v, float c, float f) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float t = 3.141592653589 * c * c;
    float m = mod((theta + f), t);
    if(t > t / 2.) {
           tmp = vec2(r * cos(theta - t / 2.),
                      r * sin(theta - t / 2.));
    } else if (t <= t / 2.) {
           tmp = vec2(r * cos(theta + t / 2.),
                      r * sin(theta + t / 2.));
    }

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:97, name:"LoxoBlobA", numParams: 3,
     body: `
    vec2 var97(in vec2 pos, float v, float high, float low, float waves) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float p1 = high;
    float p2 = low;
    float p3 = waves;
    float k = r * (p2 + (p1 - p2)/2. * (sin(p3 * theta) + 1.));
    tmp = vec2(k * cos(theta), k * sin(theta));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:98, name:"LoxoBlobB", numParams: 3,
     body: `
    vec2 var98(in vec2 pos, float v, float high, float low, float waves) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float p1 = high;
    float p2 = low;
    float p3 = waves;
    float k = r * (p2 + (p1 - p2)/2. * (sin(p3 * theta) + 1.));
    tmp = vec2(k * cos(theta), k * sin(theta));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:99, name:"LoxoPDJA", numParams: 4,
     body: `
    vec2 var99(in vec2 pos, float v, float a, float b, float c, float d) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float p1 = a;
    float p2 = b;
    float p3 = c;
    float p4 = d;
    tmp = vec2(sin(p1 * tmp.y) - cos(p2 * tmp.x),
               sin(p3 * tmp.x) - cos(p4 * tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:100, name:"LoxoPDJB", numParams: 4,
     body: `
    vec2 var100(in vec2 pos, float v, float a, float b, float c, float d) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float p1 = a;
    float p2 = b;
    float p3 = c;
    float p4 = d;
    tmp = vec2(sin(p1 * tmp.y) - cos(p2 * tmp.x),
                sin(p3 * tmp.x) - cos(p4 * tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:101, name:"LoxoFan2A", numParams: 2,
     body: `
    vec2 var101(in vec2 pos, float v, float fan2x, float fan2y) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float p1 = 3.141592653589 * fan2x;
    float p2 = fan2y;
    float t = theta + p2 - p1 * trunc((2. * theta * p2) / p1);
    if (t > p1 / 2.) {
        tmp = vec2(r * sin(theta - p1 / 2.),
                   r * cos(theta - p1 / 2.));
    } else if (t <= p1 / 2.) {
        tmp = vec2(r * sin(theta + p1 / 2.),
                   r * cos(theta + p1 / 2.));
    }

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:102, name:"LoxoFan2B", numParams: 2,
     body: `
    vec2 var102(in vec2 pos, float v, float fan2x, float fan2y) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float p1 = 3.141592653589 * fan2x;
    float p2 = fan2y;
    float t = theta + p2 - p1 * trunc((2. * theta * p2) / p1);
    if (t > p1 / 2.) {
        tmp = vec2(r * sin(theta - p1 / 2.),
                   r * cos(theta - p1 / 2.));
    } else if (t <= p1 / 2.) {
        tmp = vec2(r * sin(theta + p1 / 2.),
                   r * cos(theta + p1 / 2.));
    }

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:103, name:"LoxoRings2A", numParams: 1,
     body: `
    vec2 var103(in vec2 pos, float v, float vVal) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float p = vVal * vVal;
    float t = r - 2. * p * trunc((r + p) / (2. * p)) + r * (1. - p);
    tmp = vec2(t * sin(theta),
                t * cos(theta));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:104, name:"LoxoRings2B", numParams: 1,
     body: `
    vec2 var104(in vec2 pos, float v, float vVal) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float theta = atan(tmp.x / tmp.y);
    float p = vVal * vVal;
    float t = r - 2. * p * trunc((r + p) / (2. * p)) + r * (1. - p);
    tmp = vec2(t * sin(theta),
               t * cos(theta));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:105, name:"LoxoEyefishA", numParams: 0,
     body: `
    vec2 var105(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float k = 2.0 / (r + 1.0);
    tmp = vec2(k * tmp.x, k * tmp.y);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:106, name:"LoxoEyefishB", numParams: 0,
     body: `
    vec2 var106(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float k = 2.0 / (r + 1.0);
    tmp = vec2(k * tmp.x, k * tmp.y);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:107, name:"LoxoBubbleA", numParams: 0,
     body: `
    vec2 var107(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    float k = 4.0 / (r * r + 4.0);
    tmp = vec2(k * tmp.x, k * tmp.y);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:108, name:"LoxoBubbleB", numParams: 0,
     body: `
    vec2 var108(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    float k = 4.0 / (r * r + 4.0);
    tmp = vec2(k * tmp.x, k * tmp.y);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:109, name:"LoxoCylinderA", numParams: 0,
     body: `
    vec2 var109(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(sin(tmp.x), tmp.y);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:110, name:"LoxoCylinderB", numParams: 0,
     body: `
    vec2 var110(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(sin(tmp.x), tmp.y);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:111, name:"LoxoPerspectiveA", numParams: 2,
     body: `
    vec2 var111(in vec2 pos, float v, float angle, float dist) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float p1 = angle;
    float p2 = dist;
    float k = p2 / (p2 - tmp.y * sin(p1));
    tmp = vec2(k * tmp.x, k * tmp.y * cos(p1));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:112, name:"LoxoPerspectiveB", numParams: 2,
     body: `
    vec2 var112(in vec2 pos, float v, float angle, float dist) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float p1 = angle;
    float p2 = dist;
    float k = p2 / (p2 - tmp.y * sin(p1));
    tmp = vec2(k * tmp.x, k * tmp.y * cos(p1));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:113, name:"LoxoNoiseA", numParams: 0,
     body: `
    vec2 var113(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 rnd2 = rand2n(tmp, rand(tmp));
    float psi1 = rnd2.x;
    float psi2 = rnd2.y;
    tmp = vec2(psi1 * tmp.x * cos(2. * 3.141592653589 * psi2),
                psi1 * tmp.y * sin(2. * 3.141592653589 * psi2));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:114, name:"LoxoNoiseB", numParams: 0,
     body: `
    vec2 var114(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 rnd2 = rand2n(tmp, rand(tmp));
    float psi1 = rnd2.x;
    float psi2 = rnd2.y;
    tmp = vec2(psi1 * tmp.x * cos(2. * 3.141592653589 * psi2),
                psi1 * tmp.y * sin(2. * 3.141592653589 * psi2));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:115, name:"LoxoJuliaNA", numParams: 2,
     body: `
    vec2 var115(in vec2 pos, float v, float power, float dist) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float psi = rand(tmp);
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(tmp.y / tmp.x);
    float t = (phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    tmp = vec2(k * cos(t), k * sin(t));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:116, name:"LoxoJuliaNB", numParams: 2,
     body: `
    vec2 var116(in vec2 pos, float v, float power, float dist) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float psi = rand(tmp);
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(tmp.y / tmp.x);
    float t = (phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    tmp = vec2(k * cos(t), k * sin(t));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:117, name:"LoxoJuliaScopeA", numParams: 2,
     body: `
    vec2 var117(in vec2 pos, float v, float power, float dist) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 rnd2 = rand2n(tmp, rand(tmp));
    float psi = rnd2.x;
    float psi2 = rnd2.y;
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(tmp.y / tmp.x);
    float delta = (psi2 - 0.5) * 2.0;
    float t = (delta * phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    tmp = vec2(k * cos(t), k * sin(t));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:118, name:"LoxoJuliaScopeB", numParams: 2,
     body: `
    vec2 var118(in vec2 pos, float v, float power, float dist) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 rnd2 = rand2n(tmp, rand(tmp));
    float psi = rnd2.x;
    float psi2 = rnd2.y;
    float p1 = power;
    float p2 = dist;
    float p3 = trunc(abs(p1) * psi);
    float phi = atan(tmp.y / tmp.x);
    float delta = (psi2 - 0.5) * 2.0;
    float t = (delta * phi + 2 * 3.141592653589 * p3) / p1;
    float k = pow(r, p2 / p1);
    tmp = vec2(k * cos(t), k * sin(t));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:119, name:"LoxoBlurA", numParams: 0,
     body: `
    vec2 var119(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 rnd2 = rand2n(tmp, rand(tmp));
    float psi1 = rnd2.x;
    float psi2 = rnd2.y;
    tmp = vec2(psi1 * cos(2. * 3.141592653589 * psi2),
               psi1 * sin(2. * 3.141592653589 * psi2));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:120, name:"LoxoBlurB", numParams: 0,
     body: `
    vec2 var120(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 rnd2 = rand2n(tmp, rand(tmp));
    float psi1 = rnd2.x;
    float psi2 = rnd2.y;
    tmp = vec2(psi1 * cos(2. * 3.141592653589 * psi2),
               psi1 * sin(2. * 3.141592653589 * psi2));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:121, name:"LoxoGaussianA", numParams: 0,
     body: `
    vec2 var121(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 rnd1 = rand2n(tmp, rand(tmp));
    float psi1 = rnd1.x;
    float psi2 = rnd1.y;
    vec2 rnd2 = rand2n(p + vec2(psi2, psi1), rand(tmp));
    float psi3 = rnd2.x;
    float psi4 = rnd2.y;
    float psi5 = rand(tmp);
    float k = psi1 + psi2 + psi3 + psi4 - 2.;
    tmp = vec2(k * cos(2. * 3.141592653589 * psi5),
               k * sin(2. * 3.141592653589 * psi5));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:122, name:"LoxoGaussianB", numParams: 0,
     body: `
    vec2 var122(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 rnd1 = rand2n(tmp, rand(tmp));
    float psi1 = rnd1.x;
    float psi2 = rnd1.y;
    vec2 rnd2 = rand2n(p + vec2(psi2, psi1), rand(tmp));
    float psi3 = rnd2.x;
    float psi4 = rnd2.y;
    float psi5 = rand(tmp);
    float k = psi1 + psi2 + psi3 + psi4 - 2.;
    tmp = vec2(k * cos(2. * 3.141592653589 * psi5),
               k * sin(2. * 3.141592653589 * psi5));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:123, name:"LoxoRadialBlurA", numParams: 1,
     body: `
    vec2 var123(in vec2 pos, float v, float angle) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float p1 = angle * (3.141592653589 * 0.5);
    vec2 rnd1 = rand2n(tmp, rand(tmp));
    float psi1 = rnd1.x;
    float psi2 = rnd1.y;
    vec2 rnd2 = rand2n(p + vec2(psi2, psi1), rand(tmp));
    float psi3 = rnd2.x;
    float psi4 = rnd2.y;
    float t1 = psi1 + psi2 + psi3 + psi4 - 2.;
    float phi = atan(tmp.y / tmp.x);
    float t2 = phi + t1 * sin(p1);
    float t3 = t1 * cos(p1) - 1.0;
    float r = sqrt(dot(tmp, tmp));
    tmp = vec2((r * cos(t2) + t3 * tmp.x)/v,
               (r * sin(t2) + t3 * tmp.y)/v);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:124, name:"LoxoRadialBlurB", numParams: 1,
     body: `
    vec2 var124(in vec2 pos, float v, float angle) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float p1 = angle * (3.141592653589 * 0.5);
    vec2 rnd1 = rand2n(tmp, rand(tmp));
    float psi1 = rnd1.x;
    float psi2 = rnd1.y;
    vec2 rnd2 = rand2n(p + vec2(psi2, psi1), rand(tmp));
    float psi3 = rnd2.x;
    float psi4 = rnd2.y;
    float t1 = psi1 + psi2 + psi3 + psi4 - 2.;
    float phi = atan(tmp.y / tmp.x);
    float t2 = phi + t1 * sin(p1);
    float t3 = t1 * cos(p1) - 1.0;
    float r = sqrt(dot(tmp, tmp));
    tmp = vec2((r * cos(t2) + t3 * tmp.x)/v,
               (r * sin(t2) + t3 * tmp.y)/v);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:125, name:"LoxoPieA", numParams: 3,
     body: `
    vec2 var125(in vec2 pos, float v, float slices, float rotation, float thickness) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 rnd1 = rand2n(tmp, rand(tmp));
    float psi1 = rnd1.x;
    float psi2 = rnd1.y;
    float psi3 = rand(tmp + vec2(psi2, psi1));
    float p1 = slices;
    float p2 = rotation;
    float p3 = thickness;
    float t1 = trunc(psi1 * p1 + 0.5);
    float t2 = p2 + (2. * 3.141592653589) / p1 * (t1 + psi2 * p3);
    tmp = vec2(psi3 * cos(t2), psi3 * sin(t2));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:126, name:"LoxoPieB", numParams: 3,
     body: `
    vec2 var126(in vec2 pos, float v, float slices, float rotation, float thickness) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 rnd1 = rand2n(tmp, rand(tmp));
    float psi1 = rnd1.x;
    float psi2 = rnd1.y;
    float psi3 = rand(tmp + vec2(psi2, psi1));
    float p1 = slices;
    float p2 = rotation;
    float p3 = thickness;
    float t1 = trunc(psi1 * p1 + 0.5);
    float t2 = p2 + (2. * 3.141592653589) / p1 * (t1 + psi2 * p3);
    tmp = vec2(psi3 * cos(t2), psi3 * sin(t2));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:127, name:"LoxoNgonA", numParams: 4,
     body: `
    vec2 var127(in vec2 pos, float v, float power, float sides, float corners, float circle) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float phi = atan(tmp.y/tmp.x);
    float p1 = power;
    float p2 = 2. * 3.141592653589;
    float p3 = corners;
    float p4 = circle;
    float t3 = phi - p2 * floor(phi/p2);
    float t4 = t3 > p2/2.0 ? t3 : t3-p2;
    float r = sqrt(dot(tmp, tmp));
    float k = (p3 * (1.0/cos(t4) - 1.0) + p4) / pow(r, p1);
    tmp = k * tmp;

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:128, name:"LoxoNgonB", numParams: 4,
     body: `
    vec2 var128(in vec2 pos, float v, float power, float sides, float corners, float circle) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float phi = atan(tmp.y/tmp.x);
    float p1 = power;
    float p2 = 2. * 3.141592653589;
    float p3 = corners;
    float p4 = circle;
    float t3 = phi - p2 * floor(phi/p2);
    float t4 = t3 > p2/2.0 ? t3 : t3-p2;
    float r = sqrt(dot(tmp, tmp));
    float k = (p3 * (1.0/cos(t4) - 1.0) + p4) / pow(r, p1);
    tmp = k * tmp;

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:129, name:"LoxoCurlA", numParams: 2,
     body: `
    vec2 var129(in vec2 pos, float v, float c1, float c2) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float p1 = c1;
    float p2 = c2;
    float t1 = 1.0 + p1 * tmp.x + p2 * (tmp.x * tmp.x - tmp.y * tmp.y);
    float t2 = p1 * tmp.y + 2.0 * p2 * tmp.x * tmp.y;
    float k = 1.0 / (t1 * t1 + t2 * t2);
    tmp = vec2(k * (tmp.x * t1 + tmp.y * t2),
               k * (tmp.y * t1 - tmp.x * t2));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:130, name:"LoxoCurlB", numParams: 2,
     body: `
    vec2 var130(in vec2 pos, float v, float c1, float c2) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float p1 = c1;
    float p2 = c2;
    float t1 = 1.0 + p1 * tmp.x + p2 * (tmp.x * tmp.x - tmp.y * tmp.y);
    float t2 = p1 * tmp.y + 2.0 * p2 * tmp.x * tmp.y;
    float k = 1.0 / (t1 * t1 + t2 * t2);
    tmp = vec2(k * (tmp.x * t1 + tmp.y * t2),
               k * (tmp.y * t1 - tmp.x * t2));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:131, name:"LoxoRectanglesA", numParams: 2,
     body: `
    vec2 var131(in vec2 pos, float v, float rectX, float rectY) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float p1 = rectX;
    float p2 = rectY;
    tmp = vec2((2. * floor(tmp.x / p1) + 1.0) * p1 - tmp.x,
               (2. * floor(tmp.y / p2) + 1.0) * p2 - tmp.y;

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:132, name:"LoxoRectanglesB", numParams: 2,
     body: `
    vec2 var132(in vec2 pos, float v, float rectX, float rectY) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float p1 = rectX;
    float p2 = rectY;
    tmp = vec2((2. * floor(tmp.x / p1) + 1.0) * p1 - tmp.x,
               (2. * floor(tmp.y / p2) + 1.0) * p2 - tmp.y;

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:133, name:"LoxoArchA", numParams: 0,
     body: `
    vec2 var133(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float psi = rand(tmp);
    float s = sin(psi * 3.141592653589 * v);
    float s2 = s * s;
    tmp = vec2(s, s2 / cos(psi * 3.141592653589 * v));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:134, name:"LoxoArchB", numParams: 0,
     body: `
    vec2 var134(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float psi = rand(tmp);
    float s = sin(psi * 3.141592653589 * v);
    float s2 = s * s;
    tmp = vec2(s, s2 / cos(psi * 3.141592653589 * v));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:135, name:"LoxoTangentA", numParams: 0,
     body: `
vec2 var135(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    tmp = vec2(sin(tmp.x) / cos(tmp.y), tan(tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}
`},
{id:136, name:"LoxoTangentB", numParams: 0,
     body: `
vec2 var136(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    tmp = vec2(sin(tmp.x) / cos(tmp.y), tan(tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}
`},
{id:137, name:"LoxoSquareA", numParams: 0,
     body: `
    vec2 var137(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    vec2 rnd1 = rand2n(tmp, rand(tmp));
    tmp = vec2(rnd1.x - 0.5, rnd1.y - 0.5);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:138, name:"LoxoSquareB", numParams: 0,
     body: `
    vec2 var138(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    vec2 rnd1 = rand2n(tmp, rand(tmp));
    tmp = vec2(rnd1.x - 0.5, rnd1.y - 0.5);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:139, name:"LoxoRaysA", numParams: 0,
     body: `
    vec2 var139(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r2 = dot(tmp, tmp);
    float psi = rand(tmp);
    float k = (v * tan(psi * 3.141592653589 * v)) / r2;
    tmp = vec2(k * cos(tmp.x), k * sin(tmp.y));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:140, name:"LoxoRaysB", numParams: 0,
     body: `
    vec2 var140(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r2 = dot(tmp, tmp);
    float psi = rand(tmp);
    float k = (v * tan(psi * 3.141592653589 * v)) / r2;
    tmp = vec2(k * cos(tmp.x), k * sin(tmp.y));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:141, name:"LoxoBladeA", numParams: 0,
     body: `
    vec2 var141(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float psi = rand(tmp);
    float r = sqrt(dot(tmp, tmp));
    float c = cos(psi * r * v);
    float s = sin(psi * r * v);
    tmp = vec2(tmp.x * (c + s), tmp.x * (c - s));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:142, name:"LoxoBladeB", numParams: 0,
     body: `
    vec2 var142(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float psi = rand(tmp);
    float r = sqrt(dot(tmp, tmp));
    float c = cos(psi * r * v);
    float s = sin(psi * r * v);
    tmp = vec2(tmp.x * (c + s), tmp.x * (c - s));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:143, name:"LoxoSecantA", numParams: 0,
     body: `
    vec2 var143(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float r = sqrt(dot(tmp, tmp));
    tmp = vec2(tmp.x, 1.0 / (v * cos(v * r)));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:144, name:"LoxoSecantB", numParams: 0,
     body: `
    vec2 var144(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float r = sqrt(dot(tmp, tmp));
    tmp = vec2(tmp.x, 1.0 / (v * cos(v * r)));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:145, name:"LoxoTwintrianA", numParams: 0,
     body: `
    vec2 var145(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float psi = rand(tmp);
    float r = sqrt(dot(tmp, tmp));
    float sin2 = sin(psi * r * v) *
                 sin(psi * r * v);
    float t = log(sin2) / log(10.0)  + cos(psi * r * v);
    tmp = vec2(tmp.x * t,
                tmp.x * (t - 3.141592653589 * sin(psi * r * v)));

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:146, name:"LoxoTwintrianB", numParams: 0,
     body: `
    vec2 var146(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float psi = rand(tmp);
    float r = sqrt(dot(tmp, tmp));
    float sin2 = sin(psi * r * v) *
                 sin(psi * r * v);
    float t = log(sin2) / log(10.0)  + cos(psi * r * v);
    tmp = vec2(tmp.x * t,
               tmp.x * (t - 3.141592653589 * sin(psi * r * v)));

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`},
{id:147, name:"LoxoCrossA", numParams: 0,
     body: `
    vec2 var147(in vec2 pos, float v) {
    vec2 num = pos - vec2(1, 0);
    vec2 denom = pos + vec2(1, 0);
    vec2 tmp = complexDiv(num, denom);

    float n = (tmp.x * tmp.x - tmp.y * tmp.y);
    float k = sqrt(1.0 / (n * n));
    tmp = vec2(k * tmp.x, k * tmp.y);

    vec2 num2 = tmp + vec2(1, 0);
    vec2 denom2 = -tmp + vec2(1, 0);
    return complexDiv(num2, denom2);
}`},
{id:148, name:"LoxoCrossB", numParams: 0,
     body: `
    vec2 var148(in vec2 pos, float v) {
    vec2 num2 = pos + vec2(1, 0);
    vec2 denom2 = -pos + vec2(1, 0);
    vec2 tmp = complexDiv(num2, denom2);

    float n = (tmp.x * tmp.x - tmp.y * tmp.y);
    float k = sqrt(1.0 / (n * n));
    tmp = vec2(k * tmp.x, k * tmp.y);

    vec2 num = tmp - vec2(1, 0);
    vec2 denom = tmp + vec2(1, 0);
    return complexDiv(num, denom);
}`}
];


//Λ is a random variable that is either -1 or 1. Ψ is a random variable
//uniformally distributed on the interval [0, 1]. The ’trunc’ function returns the
//integer part of a floating-point value.
