export default class Variation {
    constructor(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;

        this.variation;
        this.postTransform;

        this.id = getUniqueStr();
    }

    getUniqueStr(myStrong) {
        let strong = 1000;
        if (myStrong) strong = myStrong;
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
    }
}
