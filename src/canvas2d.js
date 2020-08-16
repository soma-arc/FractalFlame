import { GetWebGL2Context, CreateSquareVbo, AttachShader,
         LinkProgram, CreateRGBTextures, CreateStaticVbo } from './glUtils.js';
import Vec3 from './geometry/vector3.js';
import Vec2 from './geometry/vector2.js';
import Point3 from './geometry/point3.js';
import Canvas from './canvas.js';
import Transform from './geometry/transform.js';

const RENDER_FRAG = require('./shaders/render.frag');
const RENDER_VERT = require('./shaders/render.vert');

export default class Canvas2D extends Canvas {
    constructor(canvasId, scene) {
        super(canvasId);
        this.scene = scene;
        
        this.isRendering = false;

        this.scale = 300;
        this.distScale = 1.25;
        this.translate = new Vec2(0, 0);

        this.mouseState = {
            isPressing: false,
            prevPosition: new Vec2(0, 0),
            prevTranslate: new Vec2(0, 0),
            button: -1
        };

        this.uWeight = [0.2, 0.3];
        this.uAffine = [0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0,
                       ];
        this.variation = [0, 0, 0, 0, 0,
                          0, 0, 0, 0, 0,
                          0, 0, 0, 0, 0]
    }

    init(){
        this.canvas = document.getElementById(this.canvasId);
        this.gl = GetWebGL2Context(this.canvas);
        this.addEventListeners();

        this.renderProgram = this.gl.createProgram();
        AttachShader(this.gl, RENDER_VERT,
                     this.renderProgram, this.gl.VERTEX_SHADER);
        AttachShader(this.gl, RENDER_FRAG,
                     this.renderProgram, this.gl.FRAGMENT_SHADER);
        LinkProgram(this.gl, this.renderProgram);

        this.vPositionAttrib = this.gl.getAttribLocation(this.renderProgram,
                                                         'vPosition');
        this.gl.enableVertexAttribArray(this.vPositionAttrib);

        this.preparePoints();
        this.getUniformLocations();
        this.render();
    }

    /**
     * Calculate screen coordinates from mouse position
     * [0, 0]x[width, height]
     * @param {number} mx
     * @param {number} my
     * @returns {Vec2}
     */
    calcCanvasCoord(mx, my) {
        const rect = this.canvas.getBoundingClientRect();
        return new Vec2((mx - rect.left - this.canvas.width/2) / this.scale,
                        (my - rect.top - this.canvas.height/2) / this.scale);
    }

    calcOriginalCoord() {
        const rect = this.canvas.getBoundingClientRect();
        return [(mx - rect.left),
                (my - rect.top)];
    }

    mouseDownListener(event) {
        event.preventDefault();
        this.canvas.focus();
        this.mouseState.isPressing = true;
        const mouse = this.calcCanvasCoord(event.clientX, event.clientY);
        this.mouseState.button = event.button;
        this.mouseState.prevPosition = mouse;
        this.mouseState.prevTranslate = this.translate;
    }

    mouseUpListener(event) {
        this.mouseState.isPressing = false;
        this.mouseState.button = -1;
    }

    mouseMoveListener(event) {
        event.preventDefault();
        if (!this.mouseState.isPressing) return;
        const mouse = this.calcCanvasCoord(event.clientX, event.clientY);
        //console.log(mouse);
        if (this.mouseState.button === Canvas.MOUSE_BUTTON_RIGHT) {
            this.translate = new Vec2(this.translate.x - (mouse.x - this.mouseState.prevPosition.x),
                                      this.translate.y + mouse.y - this.mouseState.prevPosition.y);
            this.render();
        }
    }

    keydownListener(event) {
        if(event.key === 'ArrowRight') {
            this.translate.x += 0.1;
            this.render();
        } else if (event.key === 'ArrowLeft') {
            this.translate.x -= 0.1;
            this.render();
        } else if (event.key === 'ArrowUp') {
            this.translate.y += 0.1;
            this.render();
        } else if (event.key === 'ArrowDown') {
            this.translate.y -= 0.1;
            this.render();
        }
    }

    mouseWheelListener(event) {
        event.preventDefault();
        if (event.deltaY > 0) {
            this.scale /= this.distScale;
        } else {
            this.scale *= this.distScale;
        }
        this.render();
    }
    
    preparePoints() {
        // this.points = [-0.5, 0, -0.5,
        //                -0.5, 0, 0.5,
        //                0.5, 0, 0.5,
        //                0.5, 0, -0.5,
        //                0, 0, 0
        //               ];
        this.points = [];
        for (let i = 0; i < 1000000; i++) {
            const x = (Math.random() - 0.5) * 2;
            const y = (Math.random() - 0.5) * 2;
            this.points.push(x, 0, y);
        }
        this.pointsVbo = CreateStaticVbo(this.gl, this.points);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.pointsVbo);
    }

    getUniformLocations() {
        const gl = this.gl;
        this.uniLocations = [];
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_mvpMatrix'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_Weight'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_AffineParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_VariationParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_ColorParams'));

    }

    setUniformValues() {
        const gl = this.gl;
        let i = 0;
        gl.uniformMatrix4fv(this.uniLocations[i++], false, this.mvpM.m.elem);
        gl.uniform1fv(this.uniLocations[i++], this.uWeight);
        gl.uniform1fv(this.uniLocations[i++], this.uAffine);
    }

    render() {
        const gl = this.gl;
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.bindBuffer(this.gl.ARRAY_BUFFER, this.pointsVbo);
        const attStride = 3;
        gl.vertexAttribPointer(this.vPositionAttrib, attStride, this.gl.FLOAT, false, 0, 0);

        const viewM = Transform.lookAt(new Point3(this.translate.x,
                                                  1, this.translate.y),
                                       new Point3(this.translate.x,
                                                  0, this.translate.y),
                                       new Vec3(0, 0, 1));
        const projectM = Transform.ortho2d(-this.canvas.width / this.scale,
                                           this.canvas.width / this.scale,
                                           -this.canvas.height / this.scale,
                                           this.canvas.height / this.scale,                                             -1, 1);
        // const viewM = Transform.lookAt(new Point3(this.camera.pos.x, this.camera.pos.y, this.camera.pos.z),
        //                                new Point3(this.camera.target.x, this.camera.target.y, this.camera.target.z),
        //                                this.camera.up);
        // const projectM = Transform.perspective(90, -0.1, 1000);

        this.mvpM = projectM.mult(viewM);
        this.setUniformValues();
        

        gl.drawArrays(gl.POINTS, 0, this.points.length/3);
        gl.flush();
    }
}
