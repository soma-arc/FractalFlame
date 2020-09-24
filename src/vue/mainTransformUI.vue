<template>
<div>
  <b-field label="Main Transform">
    <b-select id="selectF"
              native-size="4"
              expanded
              v-model="selectedFunction">
      <option
        v-for="option in canvasManager.canvas2d.functions"
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
  <div v-for="(f, index) in canvasManager.canvas2d.uWeight">
      <b-field label="Weight">
        <b-slider v-model="canvasManager.canvas2d.uWeight[index]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="0" :max="1" :step="0.01"></b-slider>
      </b-field>
      </div>
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
    <b-slider v-model="variation.v"
              v-on:dragging="sliderDragging"
              v-on:dragend="sliderDragEnd"
              :min="-10" :max="10" :step="0.01"></b-slider>
    <div v-for="param in variation.params">
      <b-field :label="param.name"></b-field>
      <b-slider v-model="param.v"
                v-on:dragging="sliderDragging"
                v-on:dragend="sliderDragEnd"
                :min="-10" :max="10" :step="0.01"></b-slider>
    </div>
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
                               variations: [],
                               },
            isSwitchedCustom: "Off",
            id: 0,
            numDeleted: 0,
            selectedVariation: undefined,
        }
    },
    methods: {
        addVariation: function(index) {
            if (this.selectedVariation === undefined) return;
            this.selectedFunction.variations.push({ ...this.selectedVariation });
            for(const v of this.selectedFunction.variations) {
                for(let i = 0; i < v.params.length; i++){
                    v.params[i] = { ...v.params[i] };
                }
            }
            this.canvasManager.canvas2d.compileRenderShader();
            this.canvasManager.canvas2d.render();
        },
        deleteVariation: function(index) {
            this.selectedFunction.variations.splice(index, 1);

            this.canvasManager.canvas2d.compileRenderShader();
            this.canvasManager.canvas2d.render();
        },
        sliderDragging: function(){
            this.canvasManager.canvas2d.isRendering = true;
        },
        sliderDragEnd: function() {
            this.canvasManager.canvas2d.isRendering = false;
        },
        addFunction: function() {
            const f = {id: this.id,
                       name:`F${this.id}`,
                       affine: [1, 0, 0, 0, 1, 0],
                       postAffine: [1, 0, 0, 0, 1, 0],
                       variations: [],
                      };
            this.canvasManager.canvas2d.functions.push(f);
            this.canvasManager.canvas2d.uWeight.push(1);     
            if(this.canvasManager.canvas2d.uWeight.length >= 2) {
                const w = 1.0 / this.canvasManager.canvas2d.uWeight.length;
                for(let i = 0; i < this.canvasManager.canvas2d.uWeight.length; i++) {
                    this.canvasManager.canvas2d.uWeight[i] = w;
                }
            }
            
            this.id++;
            this.selectedFunction = f;
            this.canvasManager.canvas2d.compileRenderShader();
            this.canvasManager.canvas2d.render();
        },
        deleteFunction: function(){
            if(this.canvasManager.canvas2d.functions.length === 0 ||
               this.canvasManager.canvas2d.uWeight.length === 0) return;
            this.canvasManager.canvas2d.functions.splice(this.selectedFunction.id - this.numDeleted, 1);
            this.canvasManager.canvas2d.uWeight.splice(0, 1);     
            if(this.canvasManager.canvas2d.uWeight.length >= 2) {
                const w = 1.0 / this.canvasManager.canvas2d.uWeight.length;
                for(let i = 0; i < this.canvasManager.canvas2d.uWeight.length; i++) {
                    this.canvasManager.canvas2d.uWeight[i] = w;
                }
            } else if (this.canvasManager.canvas2d.uWeight.length === 1){
                this.canvasManager.canvas2d.uWeight[0] = 1;
            }
            this.numDeleted++;
            this.selectedFunction.id = -1;
            this.canvasManager.canvas2d.compileRenderShader();
            this.canvasManager.canvas2d.render();
        }
    }
}
</script>

<style>
#selectF {
    height:150px;
}
</style>
