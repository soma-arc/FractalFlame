import Canvas2D from './canvas2d.js';

export default class CanvasManager {
    constructor(scene){
        this.scene = scene;
        this.resizeCallback = this.resize.bind(this);
    }
    
    init() {
        // canvas should be initialize after initializing Vue
        this.canvas2d = new Canvas2D('canvas', this.scene2d);
        this.canvas2d.init();
    }

    resize() {
        this.canvas2d.resizeCanvas();
        this.canvas2d.preparePoints();
        this.canvas2d.render();
    }

    renderLoop() {
        if (this.canvas2d.isRendering) {
            this.canvas2d.render();
        }
    }
}
