import { GetWebGL2Context, CreateSquareVbo, AttachShader,
         LinkProgram, CreateRGBTextures } from './glUtils.js';
import Canvas from './canvas.js';

export default class Canvas2D extends Canvas {
    constructor(canvasId, scene) {
        super(canvasId);
        this.scene = scene;
        
        this.isRendering = false;
    }

    init(){
        this.canvas = document.getElementById(this.canvasId);
        this.gl = GetWebGL2Context(this.canvas);
    }

    render() {
    }
}
