<template>
<div class="controlPanel">
  <b-tabs v-model="activeTab">
    <b-tab-item label="Main">
      <main-transform :canvasManager="canvasManager"
                      :variations="variations"/>
    </b-tab-item>
    <b-tab-item label="Final">
      <final-transform :canvasManager="canvasManager"
                       :variations="variations"/>
    </b-tab-item>
    <b-tab-item label="Render">
    </b-tab-item>
  </b-tabs>  
</b-tab-item>
</b-tabs>
</div>
</template>

<script>
import FinalTransform from './finalTransformUI.vue';
import MainTransform from './mainTransformUI.vue'
export default {
    components: {
        MainTransform,
        FinalTransform
    },
    props: ['canvasManager'],
    data: function () {
        return {
            variations: [{id: 0, name:'Linear', v:0, params:[]},
                         {id: 1, name:'Sinusoidal', v:0, params:[]},
                         {id: 2, name:'Spherical', v:0, params:[]},
                         {id: 3, name:'Swirl', v:0, params:[]},
                         {id: 4, name:'Horseshoe', v:0, params:[]},
                         {id: 5, name:'Polar', v:0, params:[]},
                         {id: 6, name:'Handkerchief', v:0, params:[]},
                         {id: 7, name:'Heart', v:0, params:[]},
                         {id: 8, name:'Disk', v:0, params:[]},
                         {id: 9, name:'Spiral', v:0, params:[]},
                         {id: 10, name:'Hyperbolic', v:0, params:[]},
                         {id: 11, name:'Diamond', v:0, params:[]},
                         {id: 12, name:'Ex', v:0, params:[]},
                         {id: 13, name:'Julia', v:0, params:[]},
                         {id: 14, name:'Bent', v:0, params:[]},
                         {id: 15, name:'Waves', v:0,
                          params:[{name:"b", v:0},
                                  {name:"c", v:0},
                                  {name:"e", v:0},
                                  {name:"f", v:0}]},
                         {id: 16, name:'Fisheye', v:0, params:[]},
                         {id: 17, name:'Popcorn', v:0, params:[
                             {name:"c", v:0},
                             {name:"f", v:0}
                         ]},
                         {id: 18, name:'Exponential', v:0, params:[]},
                         {id: 19, name:'Power', v:0, params:[]},
                         {id: 20, name:'Cosine', v:0, params:[]},
                         {id: 21, name:'Rings', v:0, params:[
                             {name:"c", v:0}
                         ]},
                         {id: 22, name:'Fan', v:0, params:[
                             {name:"c", v:0},
                             {name:"f", v:0}
                         ]},
                         {id: 23, name:'Blob', v:0, params:[
                             {name:"high", v:0},
                             {name:"low", v:0},
                             {name:"waves", v:0}
                         ]},
                         {id: 24, name:'PDJ', v:0, params:[
                             {name:"a", v:0},
                             {name:"b", v:0},
                             {name:"c", v:0},
                             {name:"d", v:0},
                         ]},
                         {id: 25, name:'Fan2', v:0, params:[
                             {name:"fan2x", v:0},
                             {name:"fan2y", v:0},
                         ]},
                         {id: 26, name:'Rings2', v:0, params:[
                             {name:"vVal", v:0}
                         ]},
                         {id: 27, name:'Eyefish', v:0, params:[]},
                          {id: 28, name:'Bubble', v:0, params:[]},
                          {id: 29, name:'Cylinder', v:0, params:[]},
                         {id: 30, name:'Perspective', v:0, params:[
                             {name:"angle", v:0},
                             {name:"dist", v:0}
                         ]},
                          {id: 31, name:'Noise', v:0, params:[]},
                         {id: 32, name:'JuliaN', v:0, params:[
                             {name:"power", v:0},
                             {name:"dist", v:0}
                         ]},
                         {id: 33, name:'JuliaScope', v:0, params:[
                             {name:"power", v:0},
                             {name:"dist", v:0}
                        ]},
                         {id: 34, name:'Blur', v:0, params:[]},
                         {id: 35, name:'Gaussian', v:0, params:[]},
                         {id: 36, name:'RadialBlur', v:0, params:[
                             {name:"angle", v:0}
                         ]},
                         {id: 37, name:'Pie', v:0, params:[
                             {name:"slices", v:0},
                             {name:"rotation", v:0},
                             {name:"thickness", v:0}
                         ]},
                         {id: 38, name:'Ngon', v:0, params:[
                             {name:"power", v:0},
                             {name:"sides", v:0},
                             {name:"corners", v:0},
                             {name:"circle", v:0},
                         ]},
                         {id: 39, name:'Curl', v:0, params:[
                             {name:"c1", v:0},
                             {name:"c2", v:0}
                         ]},
                         {id:40, name:"Rectangles", v:0, params:[
                             {name:"rectX", v:0},
                             {name:"rectY", v:0},
                         ]},
                         {id:41, name:"Arch", numParams: 0, params:[]},
                         {id:42, name:"Tangent", numParams: 0, params:[]},
                         {id:43, name:"Square", numParams: 0, params:[]},
                         {id:44, name:"Rays", numParams: 0, params:[]},
                         {id:45, name:"Blade", numParams: 0, params:[]},
                         {id:46, name:"Secant", numParams: 0, params:[]},
                         {id:47, name:"Twintrian", numParams: 0, params:[]},
                         {id:48, name:"Cross", numParams: 0, params:[]},
                         {id:49, name:"LoxoScaleA", numParams: 0, params:[]},
                         {id:50, name:"LoxoScaleB", numParams: 0, params:[]},
                         {id:51, name:"LoxoSwirlA", numParams: 0, params:[]},
                         {id:52, name:"LoxoSwirlB", numParams: 0, params:[]},
                         {id:53, name:"LoxoTangentA", numParams: 0, params:[]},
                         {id:54, name:"LoxoTangentB", numParams: 0, params:[]},
                         {id:55, name:"LoxoCrossA", numParams: 0, params:[]},
                         {id:56, name:"LoxoCrossB", numParams: 0, params:[]},
                         {id:57, name:"LoxoLinearA", numParams: 0, params:[]},
                         {id:58, name:"LoxoLinearB", numParams: 0, params:[]},
                         {id:59, name:"LoxoSinusoidalA", numParams: 0, params:[]},
                         {id:60, name:"LoxoSinusoidalB", numParams: 0, params:[]},
                         {id:61, name:"LoxoSphericalA", numParams: 0, params:[]},
                         {id:62, name:"LoxoSphericalB", numParams: 0, params:[]},
                         {id:63, name:"LoxoHorseshoeA", numParams: 0, params:[]},
                         {id:64, name:"LoxoHorseshoeB", numParams: 0, params:[]},
                         {id:65, name:"LoxoPolarA", numParams: 0, params:[]},
                         {id:66, name:"LoxoPolarB", numParams: 0, params:[]},
                         {id:67, name:"LoxoHandkerchiefA", numParams: 0, params:[]},
                         {id:68, name:"LoxoHandkerchiefB", numParams: 0, params:[]},
                         {id:69, name:"LoxoHeartA", numParams: 0, params:[]},
                         {id:70, name:"LoxoHeartB", numParams: 0, params:[]},
                         {id:71, name:"LoxoDiscA", numParams: 0, params:[]},
                         {id:72, name:"LoxoDiscB", numParams: 0, params:[]},
                         {id:73, name:"LoxoSpiralA", numParams: 0, params:[]},
                         {id:74, name:"LoxoSpiralB", numParams: 0, params:[]},
                         {id:75, name:"LoxoHyperbolicA", numParams: 0, params:[]},
                         {id:76, name:"LoxoHyperbolicB", numParams: 0, params:[]},
                         {id:77, name:"LoxoDiamondA", numParams: 0, params:[]},
                         {id:78, name:"LoxoDiamondB", numParams: 0, params:[]},
                         {id:79, name:"LoxoExA", numParams: 0, params:[]},
                         {id:80, name:"LoxoExB", numParams: 0, params:[]},
                         {id:81, name:"LoxoJuliaA", numParams: 0, params:[]},
                         {id:82, name:"LoxoJuliaB", numParams: 0, params:[]},
                         {id:83, name:"LoxoBentA", numParams: 0, params:[]},
                         {id:84, name:"LoxoBentB", numParams: 0, params:[]},
                         {id:85, name:"LoxoWavesA", numParams: 4,
                          params:[{name:"b", v:0},
                                  {name:"c", v:0},
                                  {name:"e", v:0},
                                  {name:"f", v:0}]},
                         {id:86, name:"LoxoWavesB", numParams: 4,
                         params:[{name:"b", v:0},
                                 {name:"c", v:0},
                                 {name:"e", v:0},
                                 {name:"f", v:0}]},
                         {id:87, name:"LoxoFisheyeA", numParams: 0, params:[]},
                         {id:88, name:"LoxoFisheyeB", numParams: 0, params:[]},
                         {id:89, name:"LoxoPopcornA", numParams: 0, params:[]},
                         {id:90, name:"LoxoPopcornB", numParams: 0, params:[]},
                         {id:91, name:"LoxoExponentialA", numParams: 0, params:[]},
                         {id:92, name:"LoxoExponentialB", numParams: 0, params:[]},
                         {id:93, name:"LoxoPowerA", numParams: 0, params:[]},
                         {id:94, name:"LoxoPowerB", numParams: 0, params:[]},
                         {id:95, name:"LoxoCosineA", numParams: 0, params:[]},
                         {id:96, name:"LoxoCosineB", numParams: 0, params:[]},
                         {id:97, name:"LoxoRingsA", numParams: 1, params:[
                             {name:"c", v:0}
                         ]},
                         {id:98, name:"LoxoRingsB", numParams: 1, params:[
                             {name:"c", v:0}
                         ]},
                         {id:99, name:"LoxoFanA", numParams: 2, params:[
                             {name:"c", v: 0},
                             {name:"f", v: 0}
                         ]},
                         {id:100, name:"LoxoFanB", numParams: 2, params:[
                             {name:"c", v: 0},
                             {name:"f", v: 0}
                         ]},
                         {id:101, name:"LoxoBlobA", numParams: 3, params:[
                             {name:"high", v: 0},
                             {name:"low", v:0},
                             {name:"waves", v:0}
                         ]},
                         {id:102, name:"LoxoBlobB", numParams: 3, params:[
                             {name:"high", v: 0},
                             {name:"low", v:0},
                             {name:"waves", v:0}
                         ]},
                         {id:103, name:"LoxoPDJA", numParams: 4, params:[
                             {name:"a", v:0},
                             {name:"b", v:0},
                             {name:"c", v:0},
                             {name:"d", v:0}
                         ]},
                         {id:104, name:"LoxoPDJB", numParams: 4, params:[
                             {name:"a", v:0},
                             {name:"b", v:0},
                             {name:"c", v:0},
                             {name:"d", v:0}
                         ]},
                         {id:105, name:"LoxoFan2A", numParams: 2, params:[
                             {name:"fan2x", v:0},
                             {name:"fan2y", v:0}
                         ]},
                         {id:106, name:"LoxoFan2B", numParams: 2, params:[
                             {name:"fan2x", v:0},
                             {name:"fan2y", v:0}
                         ]},
                         {id:107, name:"LoxoRings2A", numParams: 1, params:[
                             {name:"vVal", v:0}
                         ]},
                         {id:108, name:"LoxoRings2B", numParams: 1, params:[
                             {name:"vVal", v:0}
                         ]},
                         {id:109, name:"LoxoEyefishA", numParams: 0, params:[]},
                         {id:110, name:"LoxoEyefishB", numParams: 0, params:[]},
                         {id:111, name:"LoxoBubbleA", numParams: 0, params:[]},
                         {id:112, name:"LoxoBubbleB", numParams: 0, params:[]},
                         {id:113, name:"LoxoCylinderA", numParams: 0, params:[]},
                         {id:114, name:"LoxoCylinderB", numParams: 0, params:[]},
                         {id:115, name:"LoxoPerspectiveA", numParams: 2, params:[
                             {name:"angle", v:0},
                             {name:"dist", v:0},
                         ]},
                         {id:116, name:"LoxoPerspectiveB", numParams: 2, params:[
                             {name:"angle", v:0},
                             {name:"dist", v:0},
                         ]},
                         {id:117, name:"LoxoNoiseA", numParams: 0, params:[]},
                         {id:118, name:"LoxoNoiseB", numParams: 0, params:[]},
                         {id:119, name:"LoxoJuliaNA", numParams: 2, params:[
                             {name:"power", v:0},
                             {name:"dist", v:0}
                         ]},
                         {id:120, name:"LoxoJuliaNB", numParams: 2, params:[
                             {name:"power", v:0},
                             {name:"dist", v:0}
                         ]},
                         {id:121, name:"LoxoJuliaScopeA", numParams: 2, params:[
                             {name:"power", v:0},
                             {name:"dist", v:0}
                         ]},
                         {id:122, name:"LoxoJuliaScopeB", numParams: 2, params:[
                             {name:"power", v:0},
                             {name:"dist", v:0},
                         ]},
                         {id:123, name:"LoxoBlurA", numParams: 0, params:[]},
                         {id:124, name:"LoxoBlurB", numParams: 0, params:[]},
                         {id:125, name:"LoxoGaussianA", numParams: 0, params:[]},
                         {id:126, name:"LoxoGaussianB", numParams: 0, params:[]},
                         {id:127, name:"LoxoRadialBlurA", numParams: 1, params:[
                             {name:"angle", v:0}
                         ]},
                         {id:128, name:"LoxoRadialBlurB", numParams: 1, params:[
                             {name:"angle", v:0}
                         ]},
                         {id:129, name:"LoxoPieA", numParams: 3, params:[
                             {name:"slices", v:0}
                             {name:"rotation", v:0}
                             {name:"thickness", v:0}
                         ]},
                         {id:130, name:"LoxoPieB", numParams: 3, params:[
                             {name:"slices", v:0}
                             {name:"rotation", v:0}
                             {name:"thickness", v:0}
                         ]},
                         {id:131, name:"LoxoNgonA", numParams: 4, params:[
                             {name:"power", v:0}
                             {name:"sides", v:0}
                             {name:"corners", v:0}
                             {name:"circle", v:0}
                         ]},
                         {id:132, name:"LoxoNgonB", numParams: 4, params:[
                             {name:"power", v:0}
                             {name:"sides", v:0}
                             {name:"corners", v:0}
                             {name:"circle", v:0}
                         ]},
                         {id:133, name:"LoxoCurlA", numParams: 2, params:[
                             {name:"c1", v:0}
                             {name:"c2", v:0}
                         ]},
                         {id:134, name:"LoxoCurlB", numParams: 2, params:[
                             {name:"c1", v:0}
                             {name:"c2", v:0}
                         ]},
                         {id:135, name:"LoxoRectanglesA", numParams: 2, params:[
                             {name:"rectX", v:0}
                             {name:"rectY", v:0}
                         ]},
                         {id:136, name:"LoxoRectanglesB", numParams: 2, params:[
                             {name:"rectX", v:0}
                             {name:"rectY", v:0}
                         ]},
                         {id:137, name:"LoxoArchA", numParams: 0, params:[]},
                         {id:138, name:"LoxoArchB", numParams: 0, params:[]},
                         {id:139, name:"LoxoSquareA", numParams: 0, params:[]},
                         {id:140, name:"LoxoSquareB", numParams: 0, params:[]},
                         {id:141, name:"LoxoRaysA", numParams: 0, params:[]},
                         {id:142, name:"LoxoRaysB", numParams: 0, params:[]},
                         {id:143, name:"LoxoBladeA", numParams: 0, params:[]},
                         {id:144, name:"LoxoBladeB", numParams: 0, params:[]},
                         {id:145, name:"LoxoSecantA", numParams: 0, params:[]},
                         {id:146, name:"LoxoSecantB", numParams: 0, params:[]},
                         {id:147, name:"LoxoTwintrianA", numParams: 0, params:[]},
                         {id:148, name:"LoxoTwintrianB", numParams: 0, params:[]},
                         {id:149, name:"LoxoCrossA", numParams: 0, params:[]},
                         {id:150, name:"LoxoCrossB", numParams: 0, params:[]},
                        ]}
    },
    methods: {
        changed: function () {
            this.canvasManager.canvas2d.render();
        },
        sliderDragging: function(){
            this.canvasManager.canvas2d.isRendering = true;
        },
        sliderDragEnd: function() {
            this.canvasManager.canvas2d.isRendering = false;
        }
  }
}
</script>

<style>
  .controlPanel {
    border-style: ridge;
    border-color: gray;
    background-color: white;
    flex-basis: 300px;
    display: flex;
    flex-direction: column;
    height: 100%;
  overflow: auto;


  padding: 15px;
}
</style>
