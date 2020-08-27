<template>
<div>
  <b-field label="Main Transform">
    <b-select id="selectF"
              native-size="4"
              expanded
              v-model="selectedFunction">
      <option
        v-for="option in functions"
        :value="option"
        :key="option.id">
        {{ option.name }}
      </option>
    </b-select>
  </b-field>
  <br><br><br><br><br>
  <b-field>
    <b-button @click="addFunction">Add</b-button>
    <b-button @click="deleteFunction">Delete</b-button>
  </b-field>
  <div v-show="selectedFunction.id != -1">
  <b-field label="Affine"></b-field>
  <b-field label="a1">
    <b-slider v-model="selectedFunction.affine[0]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="b1">
    <b-slider v-model="selectedFunction.affine[1]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="c1">
    <b-slider v-model="selectedFunction.affine[2]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="d1">
    <b-slider v-model="selectedFunction.affine[3]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="e1">
    <b-slider v-model="selectedFunction.affine[4]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="f1">
    <b-slider v-model="selectedFunction.affine[5]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="Variations">
    <b-select placeholder="Select a variation"
              v-model="selectedVariation">
      <option
        v-for="option in variations"
        :value="option"
        :key="option.id">
        {{ option.name }}
      </option>
    </b-select>
  </b-field>
  <b-button @click="addVariation">Add</b-button>
  <div v-for="(variation, index) in selectedFunction.variations">
    <b-field :label="variation.name"></b-field>
    <b-slider v-model="selectedFunction.variations[index].v"
              :min="-10" :max="10" :step="0.01"></b-slider>
    <b-button @click="deleteVariation(index)">Delete</b-button>
  </div>
  <b-field label="Post transform"></b-field>
  <b-field label="a">
    <b-slider v-model="selectedFunction.postAffine[0]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="b">
    <b-slider v-model="selectedFunction.postAffine[1]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="c">
    <b-slider v-model="selectedFunction.postAffine[2]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="d">
    <b-slider v-model="selectedFunction.postAffine[3]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="e">
    <b-slider v-model="selectedFunction.postAffine[4]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  <b-field label="f">
    <b-slider v-model="selectedFunction.postAffine[5]"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
  </b-field>
  </div>
</div>
</template>

<script>
export default {
    props: ['canvasManager', 'variations'],
    data: function () {
        return {
            selectedFunction: {id:-1,
                               affine: [1, 0, 0, 0, 1, 0],
                               postAffine: [1, 0, 0, 0, 1, 0],
                               variations:[]},
            variationList: [],
            isSwitchedCustom: "Off",
            selectedOptions: [],
            functions: [],
            id: 0,
            numDeleted: 0,
            selectedVariation: undefined
        }
    },
    methods: {
        addVariation: function() {
            if (this.selectedVariation === undefined) return;
            this.selectedFunction.variations.push(this.selectedVariation);
        },
        deleteVariation: function(index) {
            this.selectedFunction.variations.splice(index, 1);
        },
        sliderDragging: function(){
            this.canvasManager.canvas2d.isRendering = true;
        },
        sliderDragEnd: function() {
            this.canvasManager.canvas2d.isRendering = false;
        },
        addFunction: function() {
            const f = {id: this.id, name:`F${this.id}`,
                       affine: [1, 0, 0, 0, 1, 0],
                       postAffine: [1, 0, 0, 0, 1, 0],
                       variations: []};
            this.functions.push(f);
            this.id++;
            this.selectedFunction = f;
        },
        deleteFunction: function(){
            if(this.functions.length === 0) return;
            this.functions.splice(this.selectedFunction.id - this.numDeleted, 1);
            this.numDeleted++;
            this.selectedFunction.id = -1;
        }
    }
}
</script>

<style>
#selectF {
    height:150px;
}
</style>
