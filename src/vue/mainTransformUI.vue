<template>
  <div>
    <b-field label="Main Transform">
      <b-select id="selectF"
                native-size="4"
                expanded
                v-model="selectedOptions">
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
        <option value="vane">Vane</option>
        <option value="billy">Billy</option>
        <option value="jack">Jack</option>
        <option value="heisenberg">Heisenberg</option>
        <option value="jesse">Jesse</option>
        <option value="saul">Saul</option>
        <option value="mike">Mike</option>
      </b-select>
    </b-field>
    <br><br><br><br><br><br><br><br>
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
  </div>
</template>

<script>
export default {
    props: ['canvasManager', 'variations'],
    data: function () {
        return {
            selectedVariation: undefined,
            variationList: [],
            isSwitchedCustom: "Off",
            selectedOptions: []
        }
    },
    methods: {
        addVariation: function() {
            if (this.selectedVariation === undefined) return;
            this.variationList.push(this.selectedVariation);
        },
        deleteVariation: function(index) {
            this.variationList.splice(index, 1);
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
#selectF {
    height: 200px;
}
</style>
