import { GetWebGL2Context, CreateSquareVbo, AttachShader,
         LinkProgram, CreateRGBATextures, CreateStaticVbo } from './glUtils.js';
import Vec3 from './geometry/vector3.js';
import Vec2 from './geometry/vector2.js';
import Point3 from './geometry/point3.js';
import Complex from './complex.js';
import Canvas from './canvas.js';
import Transform from './geometry/transform.js';
import GrandmaRecipe from './grandmaRecipe.js';
import Circle from './circle.js';
import Loxodromic from './loxodromic.js';

const RENDER_FRAG = require('./shaders/render.frag');
const RENDER_VERT_TMPL = require('./shaders/render.njk.vert');

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

        this.uWeight = [];
        this.uAffine = [1, 0, 0, 0, 1, 0,
                        1, 0, 0, 0, 1, 0,
                        1, 0, 0, 0, 1, 0,
                       ];
        this.uVariation = [0, 0, 0, 0, 0,
                           0, 0, 0, 0, 0,
                           0, 0, 0, 0, 0]
        this.uPostAffine = [1, 0, 0, 0, 1, 0,
                            1, 0, 0, 0, 1, 0,
                            1, 0, 0, 0, 1, 0];
        this.uFinalAffine = [1, 0, 0, 0, 1, 0];
        this.uFinalVariation = [1, 0, 0, 0, 0];
        this.uFinalPostAffine = [1, 0, 0, 0, 1, 0];

        this.yFlipped = false;
        this.useFinal = "Off";
    }

    init(){
        this.canvas = document.getElementById(this.canvasId);
        this.gl = GetWebGL2Context(this.canvas);
        this.addEventListeners();

        this.compileRenderShader();
        
        this.preparePoints();
        this.render();
    }

    compileRenderShader() {
        this.renderProgram = this.gl.createProgram();
        AttachShader(this.gl, RENDER_VERT_TMPL.render(this.getContext()),
                     this.renderProgram, this.gl.VERTEX_SHADER);
        AttachShader(this.gl, RENDER_FRAG,
                     this.renderProgram, this.gl.FRAGMENT_SHADER);
        LinkProgram(this.gl, this.renderProgram);
        this.vPositionAttrib = this.gl.getAttribLocation(this.renderProgram,
                                                         'vPosition');
        this.gl.enableVertexAttribArray(this.vPositionAttrib);
        this.getUniformLocations();

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
        this.points = [];

        // const c1 = new Circle(new Vec2(-1.2, 0), 0.5);
        // const c2 = new Circle(new Vec2(-1.5, 0), 1);
        // const c1d =  c2.invertOnCircle(c1);
        // const loxo = new Loxodromic(c1, c2, new Vec2(1.5, 0.5));
        // for (let i = 0; i < 360; i++) {
        //     // c2
        //     let x = Math.cos(Math.PI/180.0 * i);
        //     let y = Math.sin(Math.PI/180.0 * i);
        //     this.points.push(x - 1.5, 0, y);
        //     // c1
        //     x = 0.5 * Math.cos(Math.PI/180.0 * i);
        //     y = 0.5 * Math.sin(Math.PI/180.0 * i);
        //     this.points.push(x - 1.2, 0, y);
        //     // c3
        //     x = loxo.c3.r * Math.cos(Math.PI/180.0 * i);
        //     y = loxo.c3.r * Math.sin(Math.PI/180.0 * i);
        //     this.points.push(x + loxo.c3.center.x,
        //                      0,
        //                      y + loxo.c3.center.y);
        //     // p
        //     x = 0.05 * Math.cos(Math.PI/180.0 * i);
        //     y = 0.05 * Math.sin(Math.PI/180.0 * i);
        //     this.points.push(x + loxo.p.x,
        //                      0,
        //                      y + loxo.p.y);
        //     // c1d
        //     x = loxo.c1d.r * Math.cos(Math.PI/180.0 * i);
        //     y = loxo.c1d.r * Math.sin(Math.PI/180.0 * i);
        //     this.points.push(x + loxo.c1d.center.x, 0,
        //                      y + loxo.c1d.center.y);
        // }

        // for(let i = 0; i < 1000; i++) {
        //     let l = loxo.c2.center.add(loxo.lineDir.scale(i * 0.01));
        //     this.points.push(l.x, 0, l.y);
        //     l = loxo.c2.center.add(loxo.lineDir.scale(-i * 0.01));
        //     this.points.push(l.x, 0, l.y);
        // }

        for (let i = 0; i < 1000000; i++) {
        //for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 2;
            const y = (Math.random() - 0.5) * 2;
            let pos = new Vec2(x, y);
            this.points.push(pos.x, 0, pos.y);
            // pos = c2.invertOnPoint(pos);
            // pos = c1.invertOnPoint(pos);

            // pos = loxo.c3.invertOnPoint(pos);

            // pos = pos.sub(loxo.c2.center);
            // let d = Vec2.dot(pos, loxo.lineNormal);
            // pos = pos.sub(loxo.lineDir.scale(2.0 * d));
            // pos = pos.add(loxo.c2.center);
            // for (let j = 0; j < 10; j++) {
            //     pos = c2.invertOnPoint(pos);
            //     pos = c1.invertOnPoint(pos);

            //     pos = loxo.c3.invertOnPoint(pos);

            //     pos = pos.sub(loxo.c1.center);
            //     d = Vec2.dot(pos, loxo.lineNormal);
            //     pos = pos.sub(loxo.lineDir.scale(2.0 * d));
            //     pos = pos.add(loxo.c1.center);
            // }

            // pos = pos.sub(loxo.c2.center);
            // let d = Vec2.dot(pos, loxo.lineNormal);
            // pos = pos.sub(loxo.lineDir.scale(2.0 * d));
            // pos = pos.add(loxo.c2.center);

            // pos = loxo.c3.invertOnPoint(pos);

            // pos = c1.invertOnPoint(pos);
            // pos = c2.invertOnPoint(pos);
            

            // for (let j = 0; j < 20; j++) {
            //     pos = pos.sub(loxo.c1.center);
            //     d = Vec2.dot(pos, loxo.lineNormal);
            //     pos = pos.sub(loxo.lineDir.scale(2.0 * d));
            //     pos = pos.add(loxo.c1.center);

            //     pos = loxo.c3.invertOnPoint(pos);
                
            //     pos = c1.invertOnPoint(pos);
            //     pos = c2.invertOnPoint(pos);
            // }
            //this.points.push(pos.x, 0, pos.y);
        }
        
        this.pointsVbo = CreateStaticVbo(this.gl, this.points);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.pointsVbo);
    }

    prepareKleinPoints() {
        this.points = [];
        for (let i = 0; i < 100000; i++) {
            const p = this.recipe.fixedPoints[i % 12];
            this.points.push(p.re, 0, p.im);
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
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_PostAffineParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_useFinal'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_FinalAffineParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_FinalPostAffineParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_VariationParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_FinalVariationParams'));
        this.uniLocations.push(gl.getUniformLocation(this.renderProgram, 'u_yFlipped'));

    }

    setUniformValues() {
        const gl = this.gl;
        let i = 0;
        gl.uniformMatrix4fv(this.uniLocations[i++], false, this.mvpM.m.elem);
        gl.uniform1fv(this.uniLocations[i++], this.uWeight);
        gl.uniform1fv(this.uniLocations[i++], this.uAffine);
        gl.uniform1fv(this.uniLocations[i++], this.uPostAffine);
        gl.uniform1i(this.uniLocations[i++], this.useFinal === "On");
        gl.uniform1fv(this.uniLocations[i++], this.uFinalAffine);
        gl.uniform1fv(this.uniLocations[i++], this.uFinalPostAffine)
        gl.uniform1fv(this.uniLocations[i++], this.uVariation);
        gl.uniform1fv(this.uniLocations[i++], this.uFinalVariation);
        gl.uniform1i(this.uniLocations[i++], this.yFlipped);
    }

    render() {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const gl = this.gl;
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.viewport(0, 0, width, height);
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
        const projectM = Transform.ortho2d(-width / this.scale,
                                           width / this.scale,
                                           -height / this.scale,
                                           height / this.scale,
                                           -1, 1);

        this.mvpM = projectM.mult(viewM);
        this.setUniformValues();
        

        gl.drawArrays(gl.POINTS, 0, this.points.length/3);
        gl.flush();
    }

    saveFlame(width, height) {
        this.yFlipped = true;
        this.render();
        this.saveImage(this.gl, 0, 0, width, height, 'flame.png');
        this.yFlipped = false;
        this.render();
    }

    exportParameters() {
        return {"weight": this.uWeight,
                "affine": this.uAffine,
                "variation": this.uVariation,
                "postAffine": this.uPostAffine,
                "finalAffine": this.uFinalAffine,
                "finalVariation": this.uFinalVariation,
                "finalPostAffine": this.uFinalPostAffine};
    }

    saveParametersAsJson() {
        const blob = new Blob([JSON.stringify(this.exportParameters(),
                                              null, '    ')],
                              { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'parameters.json';
        a.click();
    }

    loadJSON(obj) {
        this.uWeight = obj['weight'];
        this.uAffine = obj['affine'];
        this.uVariation = obj['variation'];
        this.uPostAffine = obj['postAffine'];
        this.uFinalAffine = obj['finalAffine'];
        this.uFinalVariation = obj['finalVariation'];
        this.uFinalPostAffine = obj['finalPostAffine'];
    }

    clear() {
        this.uWeight = [];
        this.uAffine = [1, 0, 0, 0, 1, 0,
                        1, 0, 0, 0, 1, 0,
                        1, 0, 0, 0, 1, 0,
                       ];
        this.uVariation = [0, 0, 0, 0, 0,
                           0, 0, 0, 0, 0,
                           0, 0, 0, 0, 0]
        this.uPostAffine = [1, 0, 0, 0, 1, 0,
                            1, 0, 0, 0, 1, 0,
                            1, 0, 0, 0, 1, 0];
        this.uFinalAffine = [1, 0, 0, 0, 1, 0];
        this.uFinalVariation = [1, 0, 0, 0, 0];
        this.uFinalPostAffine = [1, 0, 0, 0, 1, 0];
        this.render();
    }

    loadSceneFromFile() {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.loadJSON(JSON.parse(reader.result));
            this.render();
        });
        const a = document.createElement('input');
        a.type = 'file';
        a.addEventListener('change', function(event) {
            const files = event.target.files;
            reader.readAsText(files[0]);
        });
        a.click();
    }

    getContext() {
        return {numFunctions: this.uWeight.length};
    }
}
