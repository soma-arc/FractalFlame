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
            variations: [{id: 0, name:'Linear', v:0},
                         {id: 1, name:'Sinusoidal', v:0},
                         {id: 2, name:'Spherical', v:0},
                         {id: 3, name:'Swirl', v:0},
                         {id: 4, name:'Horseshoe', v:0},
                         {id: 5, name:'Polar', v:0},
                         {id: 6, name:'Handkerchief', v:0},
                         {id: 7, name:'Heart', v:0},
                         {id: 8, name:'Disk', v:0},
                         {id: 9, name:'Spiral', v:0},
                         {id: 10, name:'Hyperbolic', v:0},
                         {id: 11, name:'Diamond', v:0},
                         {id: 12, name:'Ex', v:0},
                         {id: 13, name:'Julia', v:0},
                         {id: 14, name:'Bent', v:0},
                         {id: 15, name:'Waves', v:0},
                         {id: 16, name:'Fisheye', v:0},
                         {id: 17, name:'Popcorn', v:0},
                         {id: 18, name:'Exponential', v:0},
                         {id: 19, name:'Power', v:0},
                         {id: 20, name:'Cosine', v:0},
                         {id: 21, name:'Rings', v:0},
                         {id: 22, name:'Fan', v:0},
                         {id: 23, name:'Blob', v:0},
                         {id: 24, name:'PDJ', v:0},
                         {id: 25, name:'Fane2', v:0},
                         {id: 26, name:'Rings2', v:0},
                         {id: 27, name:'Eyefish', v:0},
                         {id: 28, name:'Bubble', v:0},
                         {id: 29, name:'Cylinder', v:0},
                         {id: 30, name:'Perspective', v:0},
                         {id: 31, name:'Noise', v:0},
                         {id: 32, name:'JuliaN', v:0},
                         {id: 33, name:'JuliaScope', v:0},
                         {id: 34, name:'Blur', v:0},
                         {id: 35, name:'Gaussian', v:0},
                         //{id: 36, name:'RadialBlur', v:0},
                         {id: 37, name:'Pie', v:0},
                         //{id: 38, name:'Ngon', v:0},
                         {id: 39, name:'Curl', v:0},
                         //{id: 40, name:'Rectangles', v:0},
                         {id: 41, name:'Arch', v:0},
                         {id: 42, name:'Tangent', v:0},
                         {id: 43, name:'Square', v:0},
                         {id: 44, name:'Rays', v:0},
                         {id: 45, name:'Blade', v:0},
                         {id: 46, name:'Secant', v:0},
                         {id: 47, name:'Twintrian', v:0},
                         {id: 48, name:'Cross', v:0},
                         {id: 49, name:'Loxodromic', v:0},
                         {id: 50, name:'Loxodromic2', v:0},
                        ]
        }
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
