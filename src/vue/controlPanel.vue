<template>
<div class="controlPanel">
  <b-tabs v-model="activeTab">
    <b-tab-item label="variations">
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
      <b-field label="a">
        <b-slider v-model="canvasManager.canvas2d.uAffine[0]"
                  v-on:input="changed" value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b">
        <b-slider v-model="canvasManager.canvas2d.uAffine[1]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c">
        <b-slider v-model="canvasManager.canvas2d.uAffine[2]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d">
        <b-slider v-model="canvasManager.canvas2d.uAffine[3]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e">
        <b-slider v-model="canvasManager.canvas2d.uAffine[4]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f">
        <b-slider v-model="canvasManager.canvas2d.uAffine[5]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
    </b-tab-item>
    
    <b-tab-item label="Final">
      <b-field label="a">
        <b-slider v-model="canvasManager.canvas2d.uAffine[6]"
                  v-on:input="changed" value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b">
        <b-slider v-model="canvasManager.canvas2d.uAffine[7]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c">
        <b-slider v-model="canvasManager.canvas2d.uAffine[8]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d">
        <b-slider v-model="canvasManager.canvas2d.uAffine[9]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e">
        <b-slider v-model="canvasManager.canvas2d.uAffine[10]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f">
        <b-slider v-model="canvasManager.canvas2d.uAffine[11]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
    </b-tab-item>
    
    <b-tab-item label="Affine">
      <b-field label="a">
        <b-slider v-model="canvasManager.canvas2d.uAffine[12]"
                  v-on:input="changed" value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b">
        <b-slider v-model="canvasManager.canvas2d.uAffine[13]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c">
        <b-slider v-model="canvasManager.canvas2d.uAffine[14]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d">
        <b-slider v-model="canvasManager.canvas2d.uAffine[15]"
                  v-on:input="changed"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e">
        <b-slider v-model="canvasManager.canvas2d.uAffine[16]"
                  v-on:input="changed" value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f">
        <b-slider v-model="canvasManager.canvas2d.uAffine[17]"
                  v-on:input="changed" value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
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
