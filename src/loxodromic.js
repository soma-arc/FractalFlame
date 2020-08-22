import Vec2 from './geometry/vector2.js';
import Circle from './circle.js';

export default class Loxodromic {
        /**
     *
     * @param {Circle} c1
     * @param {Circle} c2
     * @param {Vec2} p
     */
    constructor(c1, c2, p) {
        this.c1 = c1;
        this.c2 = c2;
        this.p = p;

        this.lineWidth = 0.01;
        this.pointRadius = 0.01;

        this.update();
    }
    //(I_{C2} \circ I_{C1}) \circ (I_{C3} \circ I_L)
    //(I_L \circ I_{C3}) \circ (I_{C1} \circ I_{C2}) 

    update() {
        this.c1d = this.c2.invertOnCircle(this.c1);
        this.pC1Inv = this.c1.invertOnPoint(this.p);
        this.pC2Inv = this.c2.invertOnPoint(this.p);

        this.c3 = Circle.fromPoints(this.p, this.pC1Inv, this.pC2Inv);
        this.lineDir = this.c2.center.sub(this.c1.center).normalize();
        this.lineNormal = new Vec2(-this.lineDir.y, this.lineDir.x);
    }

    static get C1_BODY() {
        return 0;
    }

    static get C1_CIRCUMFERENCE() {
        return 1;
    }

    static get C2_BODY() {
        return 2;
    }

    static get C2_CIRCUMFERENCE() {
        return 3;
    }

    static get POINT() {
        return 4;
    }

    get name() {
        return 'Loxodromic';
    }
}
