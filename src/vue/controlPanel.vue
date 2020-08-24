<template>
<div class="controlPanel">
  <b-tabs v-model="activeTab">
    <b-tab-item label="Affine">
      <b-field label="weight1">
        <b-slider v-model="canvasManager.canvas2d.uWeight[0]"
                  :min="0" :max="1" :step="0.01"
                  v-on:input="changed"></b-slider>
      </b-field>
      <b-field label="weight2">
        <b-slider v-model="canvasManager.canvas2d.uWeight[1]"
                  :min="0" :max="1" :step="0.01"
                  v-on:input="changed"></b-slider>
      </b-field>
      <b-field label="a1">
        <b-slider v-model="canvasManager.canvas2d.uAffine[0]"
                  value="0"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b1">
        <b-slider v-model="canvasManager.canvas2d.uAffine[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c1">
        <b-slider v-model="canvasManager.canvas2d.uAffine[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d1">
        <b-slider v-model="canvasManager.canvas2d.uAffine[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e1">
        <b-slider v-model="canvasManager.canvas2d.uAffine[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f1">
        <b-slider v-model="canvasManager.canvas2d.uAffine[5]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="a2">
        <b-slider v-model="canvasManager.canvas2d.uAffine[6]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b2">
        <b-slider v-model="canvasManager.canvas2d.uAffine[7]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c2">
        <b-slider v-model="canvasManager.canvas2d.uAffine[8]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d2">
        <b-slider v-model="canvasManager.canvas2d.uAffine[9]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e2">
        <b-slider v-model="canvasManager.canvas2d.uAffine[10]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f2">
        <b-slider v-model="canvasManager.canvas2d.uAffine[11]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="a3">
        <b-slider v-model="canvasManager.canvas2d.uAffine[12]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b3">
        <b-slider v-model="canvasManager.canvas2d.uAffine[13]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c3">
        <b-slider v-model="canvasManager.canvas2d.uAffine[14]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d3">
        <b-slider v-model="canvasManager.canvas2d.uAffine[15]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e3">
        <b-slider v-model="canvasManager.canvas2d.uAffine[16]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f3">
        <b-slider v-model="canvasManager.canvas2d.uAffine[17]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="a1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[0]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
            </b-field>
      <b-field label="c1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
                  </b-field>
      <b-field label="d1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
                        </b-field>
      <b-field label="e1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[5]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
    </b-tab-item>
    
    <b-tab-item label="Variation">
      <b-field label="v1">
        <b-slider v-model="canvasManager.canvas2d.uVariation[0]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v2">
        <b-slider v-model="canvasManager.canvas2d.uVariation[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v3">
        <b-slider v-model="canvasManager.canvas2d.uVariation[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v4">
        <b-slider v-model="canvasManager.canvas2d.uVariation[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v5">
        <b-slider v-model="canvasManager.canvas2d.uVariation[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v1">
        <b-slider v-model="canvasManager.canvas2d.uVariation[5]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v2">
        <b-slider v-model="canvasManager.canvas2d.uVariation[6]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v3">
        <b-slider v-model="canvasManager.canvas2d.uVariation[7]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v4">
        <b-slider v-model="canvasManager.canvas2d.uVariation[8]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v5">
        <b-slider v-model="canvasManager.canvas2d.uVariation[9]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v1">
        <b-slider v-model="canvasManager.canvas2d.uVariation[10]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v2">
        <b-slider v-model="canvasManager.canvas2d.uVariation[11]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v3">
        <b-slider v-model="canvasManager.canvas2d.uVariation[12]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v4">
        <b-slider v-model="canvasManager.canvas2d.uVariation[13]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v5">
        <b-slider v-model="canvasManager.canvas2d.uVariation[14]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v1final">
        <b-slider v-model="canvasManager.canvas2d.uFinalVariation[0]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v2final">
        <b-slider v-model="canvasManager.canvas2d.uFinalVariation[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v3final">
        <b-slider v-model="canvasManager.canvas2d.uFinalVariation[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v4final">
        <b-slider v-model="canvasManager.canvas2d.uFinalVariation[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="v5final">
        <b-slider v-model="canvasManager.canvas2d.uFinalVariation[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
    </b-tab-item>
    
    <b-tab-item label="Final">
      
    </b-tab-item>
    
  </b-tabs>
</div>
</template>

<script>
export default {
    props: ['canvasManager'],
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
