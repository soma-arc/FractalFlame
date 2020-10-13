<template>
<div>
  <b-dropdown :triggers="['hover']" aria-role="list">
    <button class="button is-info" slot="trigger">
      <span>Load Presets</span>
      <b-icon icon="menu-down"></b-icon>
    </button>
    
    <b-dropdown-item @click="load(2)" aria-role="listitem">Example 1</b-dropdown-item>
    <b-dropdown-item @click="load(3)" aria-role="listitem">Example 2</b-dropdown-item>
    <b-dropdown-item @click="load(0)" aria-role="listitem">Ayumu Nagamatsu</b-dropdown-item>
    <b-dropdown-item @click="load(1)" aria-role="listitem">Joel Castellanos</b-dropdown-item>
  </b-dropdown>
  <b-field label="Coloring">
    <div class="block">
      <b-radio v-model="canvasManager.canvas2d.coloringMode"
               name="name"
               @input="changed"
               native-value=0>
        Functions
      </b-radio>
      <b-radio v-model="canvasManager.canvas2d.coloringMode"
               name="name"
               @input="changed"
               native-value=1>
        First 0
      </b-radio>
      <b-radio v-model="canvasManager.canvas2d.coloringMode"
               name="name"
               @input="changed"
               native-value=2>
        Last 2
      </b-radio>
    </div>
  </b-field>
      <b-field label="Hue Start">
          <b-slider v-model="canvasManager.canvas2d.hueStart"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="0" :max="1" :step="0.01"></b-slider>
      </b-field>
      <b-field label="Hue Step">
        <b-slider v-model="canvasManager.canvas2d.hueStep"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-1" :max="1" :step="0.01"></b-slider>
      </b-field>
</div>
</template>

<script>
const PRESETS_CONTEXT = require.context('../presets', true, /.json$/);
const PRESETS = [];
for (const k of PRESETS_CONTEXT.keys()) {
    PRESETS.push(PRESETS_CONTEXT(k));
}
export default {
    props: ['canvasManager', 'variations'],
    methods: {
        changed: function () {
            this.canvasManager.canvas2d.render();
        },
        sliderDragging: function(){
            this.canvasManager.canvas2d.isRendering = true;
        },
        sliderDragEnd: function() {
            this.canvasManager.canvas2d.isRendering = false;
        },
        load: function(index) {
            //this.canvasManager.canvas2d.clear();
            this.canvasManager.canvas2d.loadJSON(PRESETS[index]);
        },
    }
}
</script>
