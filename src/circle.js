import Vec2 from './geometry/vector2.js';

export default class Circle {
    constructor(center, r) {
        this.center = center;
        this.r = r;
        this.rSq = r * r;
        this.circumferenceThickness = 0.01;

        this.update();
    }

    update() {
        this.rSq = this.r * this.r;
    }

    /**
     * Apply inversion to a given point
    * @param {Vec2} p
     */
    invertOnPoint (p) {
        const r2 = this.r * this.r;
        const d = p.sub(this.center);
        const lenSq = d.lengthSq();
        return d.scale(r2 / lenSq).add(this.center);
    }

    /**
     * Apply inversion to a given circle
     * @param {Circle} c
     * @returns {Circle}
     */
    invertOnCircle (c) {
        const coeffR = c.r * Math.sqrt(2) / 2;
        const p1 = this.invertOnPoint(c.center.add(new Vec2(coeffR, coeffR)));
        const p2 = this.invertOnPoint(c.center.add(new Vec2(-coeffR, -coeffR)));
        const p3 = this.invertOnPoint(c.center.add(new Vec2(coeffR, -coeffR)));
        return Circle.fromPoints(p1, p2, p3);
    }

    /**
     * Compute a circle passing through three points
     * @param {Vec2} a
     * @param {Vec2} b
     * @param {Vec2} c
     * @returns {Circle}
     */
    static fromPoints (a, b, c) {
        const lA = Vec2.distance(b, c);
        const lB = Vec2.distance(a, c);
        const lC = Vec2.distance(a, b);
        const coefA = lA * lA * (lB * lB + lC * lC - lA * lA);
        const coefB = lB * lB * (lA * lA + lC * lC - lB * lB);
        const coefC = lC * lC * (lA * lA + lB * lB - lC * lC);
        const denom = coefA + coefB + coefC;
        const center = new Vec2((coefA * a.x + coefB * b.x + coefC * c.x) / denom,
                                (coefA * a.y + coefB * b.y + coefC * c.y) / denom);
        const r = Vec2.distance(center, a);
        return new Circle(center, r);
    }

    static get BODY() {
        return 0;
    }

    static get CIRCUMFERENCE() {
        return 1;
    }

    static get SNAP_NONE() {
        return 0;
    }

    static get SNAP_NEAREST() {
        return 1;
    }

    static get SNAP_TWO_CIRCLES() {
        return 2;
    }

    get name() {
        return 'Circle';
    }
}
