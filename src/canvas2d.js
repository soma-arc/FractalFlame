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
const FLAME = require('./variationsForShader.js');

const RENDER_FRAG = require('./shaders/render.frag');
const RENDER_VERT = require('./shaders/render.vert');
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
                       ];
        this.functions = [];
        this.uVariations = [];
        this.uPostAffine = [1, 0, 0, 0, 1, 0,
                           ]
        this.uFinalAffine = [1, 0, 0, 0, 1, 0];
        this.uFinalVariation = [1, 0, 0, 0, 0];
        this.uFinalPostAffine = [1, 0, 0, 0, 1, 0];
        this.finalVariationList = [];

        this.yFlipped = false;
        this.useFinal = "Off";

        this.selectedFunction = {id:-1,
                                 affine: [1, 0, 0, 0, 1, 0],
                                 postAffine: [1, 0, 0, 0, 1, 0],
                                 variations: [],
                                 weight: 1};
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
        console.log(RENDER_VERT_TMPL.render(this.getContext()));
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
        // circle
        this.circleProgram = this.gl.createProgram();
        AttachShader(this.gl, RENDER_VERT,
                     this.circleProgram, this.gl.VERTEX_SHADER);
        AttachShader(this.gl, RENDER_FRAG,
                     this.circleProgram, this.gl.FRAGMENT_SHADER);
        LinkProgram(this.gl, this.circleProgram);
        this.vCirclePositionAttrib = this.gl.getAttribLocation(this.circleProgram,
                                                         'vPosition');
        this.gl.enableVertexAttribArray(this.vCirclePositionAttrib);

        this.circleUniform = this.gl.getUniformLocation(this.circleProgram, 'u_mvpMatrix');
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
        return new Vec2(2. * (mx - rect.left - this.canvas.width/2) / this.scale,
                        2. * (my - rect.top - this.canvas.height/2) / this.scale);
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
        console.log(`${mouse.x}, ${mouse.y}`);
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
        this.circlePoints = [];
        for (let i = 0; i < 1000000; i++) {
        //for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 2;
            const y = (Math.random() - 0.5) * 2;
            let pos = new Vec2(x, y);
            this.points.push(pos.x, 0, pos.y);
        }

        for (let i = 0; i < 1000; i++) {
            const x = 0.5 * Math.cos(i) + -1.2;
            const y = 0.5 * Math.sin(i);

            this.circlePoints.push(x, 0, y);
        }
        for (let i = 0; i < 1000; i++) {
            const x = 1. * Math.cos(i) + -1.5;
            const y = 1. * Math.sin(i);
            this.circlePoints.push(x, 0, y);
        }
        for (let i = 0; i < 1000; i++) {
            const x = 2.0934421415458306 * Math.cos(i) -0.1;
            const y = 2.0934421415458306 * Math.sin(i) +1.85;
            this.circlePoints.push(x, 0, y);
        }
        for (let i = -500; i < 500; i++) {
            let dir = new Vec2(-1, 0);
            dir = dir.scale(i);
            this.circlePoints.push(i * 0.01, 0, 0);
        }
        
        this.pointsVbo = CreateStaticVbo(this.gl, this.points);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.pointsVbo);

        this.circlePointsVbo = CreateStaticVbo(this.gl, this.circlePoints);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.circlePointsVbo);
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
        //console.log(this.functions);
        const gl = this.gl;
        let i = 0;
        gl.uniformMatrix4fv(this.uniLocations[i++],
                            false, this.mvpM.m.elem);
        gl.uniform1fv(this.uniLocations[i++], this.uWeight);
        
        let affines = [];
        for(const f of this.functions) {
            affines = affines.concat(f.affine);
        }
        gl.uniform1fv(this.uniLocations[i++], affines);
        let postAffines = [];
        for(const f of this.functions) {
            postAffines = postAffines.concat(f.postAffine);
        }
        gl.uniform1fv(this.uniLocations[i++], postAffines);
        gl.uniform1i(this.uniLocations[i++], this.useFinal === "On");
        gl.uniform1fv(this.uniLocations[i++], this.uFinalAffine);
        gl.uniform1fv(this.uniLocations[i++], this.uFinalPostAffine);

        const uVariations = [];
        for(const f of this.functions) {
            for(const v of f.variations){
                uVariations.push(v.v);
            }
        }

        gl.uniform1fv(this.uniLocations[i++], uVariations);

        const uFinalVariations = []
        for(const v of this.finalVariationList){
            uFinalVariations.push(v.v);
        }
        //console.log(this.finalVariationList);
        //console.log(uFinalVariations);
        gl.uniform1fv(this.uniLocations[i++], uFinalVariations);
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
        gl.useProgram(this.renderProgram)
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

        // gl.useProgram(this.circleProgram);
        // gl.bindBuffer(this.gl.ARRAY_BUFFER, this.circlePointsVbo);
        // gl.vertexAttribPointer(this.vCirclePositionAttrib, attStride, this.gl.FLOAT, false, 0, 0);
        // gl.uniformMatrix4fv(this.circleUniform,
        //                     false, this.mvpM.m.elem);
        // gl.drawArrays(gl.POINTS, 0, this.circlePoints.length/3);
        // gl.flush();
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
                "variation": this.uVariations,
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
        this.uVariations = obj['variation'];
        this.uPostAffine = obj['postAffine'];
        this.uFinalAffine = obj['finalAffine'];
        this.uFinalVariation = obj['finalVariation'];
        this.uFinalPostAffine = obj['finalPostAffine'];
    }

    clear() {
        //this.selectedFunction.variations = [];
        this.functions = [];
        this.finalVariationList = []
        this.uWeight = [];
        this.uAffine = [1, 0, 0, 0, 1, 0];
        this.uVariations = []
        this.uPostAffine = [1, 0, 0, 0, 1, 0];
        this.uFinalAffine = [1, 0, 0, 0, 1, 0];
        this.uFinalVariation = [1, 0, 0, 0, 0];
        this.uFinalPostAffine = [1, 0, 0, 0, 1, 0];
        this.compileRenderShader();
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
        let idList = [];
        for(let f of this.functions) {
            for(let v of f.variations) {
                idList.push(v.id)
            }
        }
        for(let v of this.finalVariationList) {
            idList.push(v.id)
        }
        
        // remove duplicate
        idList = idList.filter((item, index) => idList.indexOf(item) === index);
        const variations = new Array(this.uWeight.length);

        this.numVariationParams = 0;
        this.numVariationParamsProcess = [0]
        for(let f of this.functions){
            this.numVariationParamsProcess.push(f.variations.length);
            this.numVariationParams += f.variations.length;
        }
        
        return { numFunctions: this.functions.length,
                 numVariationParamsProcess: this.numVariationParamsProcess,
                 numVariationParams: this.numVariationParams,
                 numFinalVariationParams: this.finalVariationList.length,
                 finalVariations: this.finalVariationList,
                 functions: this.functions,
                 weight: this.uWeight,
                 items: FLAME.VARIATIONS,
                 variationsIndex: idList,
               };
    }
}
