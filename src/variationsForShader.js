export const VARIATIONS = [{id: 0, body: `vec2 var0(vec2 p) {
  return vec2(p.xy);
}`},
 {id: 1, body:`vec2 var1(vec2 p) {
    return vec2(sin(p.x), sin(p.y));
}`},
 {id:2, body: `vec2 var2(vec2 p) {
    float r = sqrt(dot(p, p));
    float r2 = r * r;
    return vec2(p.x/r2, p.y/r2);
}`},
 {id:3, body: `vec2 var3(vec2 p) {
    float r = sqrt(dot(p, p));
    float r2 = r * r;
    return vec2(p.x * sin(r2) - p.y * cos(r2),
                p.x * cos(r2) + p.y * sin(r2));
}`},
 {id:4, body: `vec2 var4(vec2 p){
    float r = sqrt(dot(p, p));
    return vec2((p.x - p.y) * (p.x + p.y) / r, (2 * p.x * p.y) / r);
}`},
{id:5, body: `vec2 var5(vec2 p){
    float r = sqrt(dot(p, p));
    float theta = atan(p.x / p.y)
    return vec2(theta / 3.141592653589, r - 1.);
}`}];
