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
                         {id:49, name:"Loxodromic", numParams: 0, params:[]},
                         {id:50, name:"Loxodromic2", numParams: 0, params:[]},
                         {id:51, name:"LoxoScale", numParams: 0, params:[]},
                         {id:52, name:"LoxoScale2", numParams: 0, params:[]},
                         {id:53, name:"LoxoSwirlA", numParams: 0, params:[]},
                         {id:54, name:"LoxoSwirlB", numParams: 0, params:[]},
                         {id:55, name:"LoxoTangentA", numParams: 0, params:[]},
                         {id:56, name:"LoxoTangentB", numParams: 0, params:[]}
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
