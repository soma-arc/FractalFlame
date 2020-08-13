import { GetWebGL2Context, CreateSquareVbo, AttachShader,
         LinkProgram, CreateRGBTextures, CreateStaticVbo } from './glUtils.js';
import Vec3 from './geometry/vector3.js';
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
        this.render();

        this.scale = 300;
        this.distScale = 1.25;
    }

    mouseWheelListener(event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            this.scale /= this.distScale;
        } else {
            this.scale *= this.distScale;
        }
        this.render();
    }
    
    preparePoints() {
        this.points = [-0.5, 0, -0.5,
                       -0.5, 0, 0.5,
                       0.5, 0, 0.5,
                       0.5, 0, -0.5,
                       0, 0, 0
                      ];
        this.pointsVbo = CreateStaticVbo(this.gl, this.points);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.pointsVbo);
    }

    render() {
        const gl = this.gl;
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.bindBuffer(this.gl.ARRAY_BUFFER, this.pointsVbo);
        const attStride = 3;
        gl.vertexAttribPointer(this.vPositionAttrib, attStride, this.gl.FLOAT, false, 0, 0);

        const viewM = Transform.lookAt(new Point3(0, 1, 0),
                                       new Point3(0, 0, 0),
                                       new Vec3(0, 0, 1));
        const projectM = Transform.ortho2d(-this.canvas.width / this.scale,
                                           this.canvas.width / this.scale,
                                           -this.canvas.height / this.scale,
                                           this.canvas.height / this.scale,                                             -1, 1);
        // const viewM = Transform.lookAt(new Point3(this.camera.pos.x, this.camera.pos.y, this.camera.pos.z),
        //                                new Point3(this.camera.target.x, this.camera.target.y, this.camera.target.z),
        //                                this.camera.up);
        // const projectM = Transform.perspective(90, -0.1, 1000);

        const mvpM = projectM.mult(viewM);
        const mvpLocation = gl.getUniformLocation(this.renderProgram, 'u_mvpMatrix');
        gl.uniformMatrix4fv(mvpLocation, false, mvpM.m.elem);

        gl.drawArrays(gl.POINTS, 0, this.points.length/3);
        gl.flush();
    }
}
