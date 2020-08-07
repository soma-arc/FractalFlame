const PI = Math.PI;

// Linear
export function v0(x, y) {
    return [x, y];
}

//Sinusoidal
export function v1(x, y) {
    return [Math.sin(x), Math.sin(y)];
}

// Spherical
export function v2(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const r2 = r * r;
    return [x/r2, y/r2];
}

// Swirl
export function v3(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const r2 = r * r;
    return [x * Math.sin(r2) - y * Math.cos(r2),
            x * Math.cos(r2) + y * Math.sin(r2)];
}

// Horseshoe
export function v4(x, y) {
    const r = Math.sqrt(x * x + y * y);
    return [(x - y) * (x + y) / r, (2 * x * y) / r];
}

// Polar
export function v5(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    return [theta / PI, r - 1];
}

// Handkerchief
export function v6(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    return [r * Math.sin(theta + r), r * Math.cos(theta - r)]
}

// Heart
export function v7(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);

    return [r * Math.sin(theta * r), - r * Math.cos(theta * r)]
}

// Disc
export function v8(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const k = theta / PI;
    return [k * Math.sin(PI * r), k * Math.cos(PI * r)]
}

// Spiral
export function v9(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const invR = 1 / r;
    return [invR * (Math.cos(theta) + Math.sin(r)),
            invR * (Math.sin(theta) - Math.cos(r))];
}

// Hyperbolic
export function v10(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    return [Math.sin(theta)/r, r * Math.cos(theta)];
}

// Diamond
export function v11(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    return [Math.sin(theta) * Math.cos(r),
            Math.cos(theta) * Math.sin(r)];
}

// Ex
export function v12(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const p0 = Math.sin(theta + r);
    const p1 = Math.cos(theta - r);
    const p03 = p0 * p0 * p0;
    const p13 = p1 * p1 * p1;
    return [r * (p03 + p13), r * (p03 - p13)];
}

// Julia
// Ω is a random variable that is either 0 or π.
export function v13(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const sqrtR = Math.sqrt(r)
    const omega = Math.random() ? 0 : PI;
    return [sqrtR * Math.cos(theta / 2 + omega),
            sqrtR * Math.sin(theta / 2 + omega)];
}

// Bent
export function v14(x, y) {
    if(x >= 0 && y >= 0) {
        return [x, y];
    } else if (x < 0 && y >= 0) {
        return [2 * x, y];
    } else if (x >= 0 && y < 0) {
        return [x, y / 2];
    } else if (x < 0 && y < 0) {
        return [2 * x, y / 2];
    }
}

// Waves
export function v15(x, y, a, b, c, d, e, f) {
    return [x + b * Math.sin(y / (c * c)),
            y + e * Math.sin(x / (f * f))];
}

// Fisheye
export function v16(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const k = 2 / (r + 1);
    return [k * y, k *  x];
}

// Popcorn
export function v17(x, y, a, b, c, d, e, f) {
    return [x + c * Math.sin(Math.tan(3 * y)),
            y + f * Math.sin(Math.tan(3 * x))];
}

// Exponential
export function v18(x, y) {
    const k = Math.exp(x - 1);
    return [k * Math.cos(PI * y),
            k * Math.sin(PI * y)];
}

// Power
export function v19(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const k = Math.pow(r, Math.sin(theta))
    return [k * Math.cos(theta),
            k * Math.sin(theta)];
}

// Cosine
export function v20 (x, y) {
    return [Math.cos(PI * x) * Math.cosh(y),
            -Math.sin(PI * x) * Math.sinh(y)];
}

// Rings
export function v21 (x, y, a, b, c, d, e, f) {
    const r = Math.sqrt(x * x + y * y);
    const c2 = c * c;
    const k = (r + c2) % (2 * c2) - c2 + r * (1 - c2);
    return [k * Math.cos(theta), Math.sin(theta)];
}

// Fan
export function v22 (x, y, a , b, c, d, e, f) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const t = PI * c * c;
    const m = (theta + f) % t;
    if(t > t / 2) {
        return [r * Math.cos(theta - t / 2),
                r * Math.sin(theta - t / 2)];
    } else if (t <= t / 2) {
        return [r * Math.cos(theta + t / 2),
                r * Math.sin(theta + t / 2)];
    }
}

//Blob
export function v23 (x, y, high, low, waves) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const p1 = high;
    const p2 = low;
    const p3 = waves;
    const k = r * (p2 + (p1 - p2)/2 * (Math.sin(p3 * theta) + 1));
    return [k * Math.cos(theta), k * Math.sin(theta)];
}

// PDJ
export function v24 (x, y, a, b, c, d) {
    const p1 = a;
    const p2 = b;
    const p3 = c;
    const p4 = d;
    return [Math.sin(p1 * y) - Math.cos(p2 * x),
            Math.sin(p3 * x) - Math.cos(p4 * y)];
}

// Fane2
export function v25 (x, y, fan2x, fan2y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const p1 = PI * fan2x;
    const p2 = fan2y;
    const t = theta + p2 - p1 * Math.trunc((2 * theta * p2) / p1);
    if (t > p1 / 2) {
        return [r * Math.sin(theta - p1 / 2),
                r * Math.cos(theta - p1 / 2)];
    } else if (t <= p1 / 2) {
        return [r * Math.sin(theta + p1 / 2),
                r * Math.cos(theta + p1 / 2)];
    }
}

// Rings2
export function v26 (x, y, v) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan(x / y);
    const p = v * v;
    const t = r - 2 * p * Math.trunc((r + p) / (2 * p)) + r * (1 - p);
    return [t * Math.sin(theta),
            t * Math.cos(theta)];
}

// Eyefish
export function v27(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const k = 2 / (r + 1);
    return [k * x, k * y];
}

// Bubble
export function v28(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const k = 4 / (r * r + 4);
    return [k * x, k * y];
}

//Cylinder
export function v29(x, y) {
    return [Math.sin(x), y];
}

// Perspective
export function v30(x, y, angle, dist) {
    const p1 = angle;
    const p2 = dist;
    const k = p2 / (p2 - y * Math.sin(p1));
    return [k * x, k * y * Math.cos(p1)];
}

// Noise
export function v31(x, y) {
    const psi1 = Math.random();
    const psi2 = Math.random();
    return [psi1 * x * Math.cos(2 * PI * psi2),
            psi1 * y * Math.sin(2 * PI * psi2)];
}

// JuliaN
export function v32(x, y, power, dist) {
    const psi = Math.random();
    const p1 = power;
    const p2 = dist;
    const p3 = Math.trunc(Math.abs(p1) * psi);
    const phi = Math.atan(y / x);
    const t = (phi + 2 * PI * p3) / p1;
    const k = Math.pow(r, p2 / p1);
    return [k * Math.cos(t), k * Math.sin(t)];
}

// JuliaScope
export function v33(x, y, power, dist) {
    const psi = Math.random();
    const p1 = power;
    const p2 = dist;
    const p3 = Math.trunc(Math.abs(p1) * psi);
    const phi = Math.atan(y / x);
    const delta = (Math.random() - 0.5) * 2.0;
    const t = (delta * phi + 2 * PI * p3) / p1;
    const k = Math.pow(r, p2 / p1);
    return [k * Math.cos(t), k * Math.sin(t)];
}

// Blur
export function v34(x, y) {
    const psi1 = Math.random();
    const psi2 = Math.random();
    return [psi1 * Math.cos(2 * PI * psi2),
            psi1 * Math.sin(2 * PI * psi2)];
}

// Gaussian
export function v35(x, y) {
    const k = Math.random() + Math.random() +
          Math.random() + Math.random() - 2;
    const psi5 = Math.random();
    return [k * Math.cos(2 * PI * psi5),
            k * Math.sin(2 * PI * psi5)];
}

// RadialBlur
// export function v36(x, y) {
// }
//

// Pie
export function v37 (x, y, slices, rotation, thickness) {
    const p1 = slices;
    const p2 = rotation;
    const p3 = thickness;
    const t1 = Math.trunc(Math.random() * p1 + 0.5);
    const t2 = p2 + (2 * PI) / p1 * (t1 + Math.random() * p3);
    const psi3 = Math.random();
    return [psi3 * Math.cos(t2), psi3 * Math.sin(t2)];
}

// Ngon
// export function v38(x, y, power, sides, corners, circle) {
//     const p1 = power;
//     const p2 = (2 * PI) / sides;
//     const p3 = corners;
//     const p4 = circle;
//     const phi = Math.atan(y / x);    
//     const t3 = phi - 
// }

// Curl
export function v39(x, y, c1, c2) {
    const p1 = c1;
    const p2 = c2;
    const t1 = 1 + p1 * x + p2 * (x * x - y * y);
    const t2 = p1 * y + 2 * p2 * x * y;
    const k = 1 / (t1 * t1 + t2 * t2);
    return [k * (x * t1 + y * t2),
            k * (y * t1 - x * t2)];
}

// Rectangles
// export function v40(x, y, rectX, rectY) {
//     const p1 = rectX;
//     const p2 = rectY;
// }

// Arch
export function v41(x, y, blend) {
    const psi = random();
    const s = Math.sin(psi * PI * blend);
    const s2 = s * s;
    return [s, s2 / Math.cos(psi * PI * blend)];
}

// Tangent
export function v42(x, y) {
    return [Math.sin(x) / Math.cos(y), Math.tan(y)];
}

// Square
export function v43(x, y) {
    return [Math.random() - 0.5, Math.random() - 0.5];
}

// Rays
export function v44(x, y, blend) {
    const r = Math.sqrt(x * x + y * y);
    const psi = random();
    const k = (blend * Math.tan(psi * PI * blend)) / (r * r);
    return [k * Math.cos(x), k * Math.sin(y)];
}

// Blade
export function v45(x, y, blend) {
    const r = Math.sqrt(x * x + y * y);
    const psi = random();
    const c = Math.cos(psi * r * blend);
    const s = Math.sin(psi * r * blend);
    return [x * (c + s), x * (c - s)];
}

// Secant
export function v46(x, y, blend) {
    const r = Math.sqrt(x * x + y * y);
    return [x, 1.0 / (blend * Math.cos(blend * r))];
}

// Twintrian
export function v47(x, y, blend) {
    const r = Math.sqrt(x * x + y * y);
    const psi = random();
    const sin2 = Math.sin(psi * r * blend) *
          Math.sin(psi * r * blend);
    const t = Math.log10(sin2) + Math.cos(psi * r * blend);
    return [x * t, x * (t - PI * Math.sin(psi * r * blend))];
}

// Cross
export function v48 (x, y) {
    const n = (x * x - y * y);
    const k = Math.sqrt(1 / (n * n));
    return [k * x, k * y];
}

//Λ is a random variable that is either -1 or 1. Ψ is a random variable
//uniformally distributed on the interval [0, 1]. The ’trunc’ function returns the
//integer part of a floating-point value.
