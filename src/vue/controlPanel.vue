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
    
    <b-tab-item label="Post">
      <b-field label="a1">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[0]"
                  value="0"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b1">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c1">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d1">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e1">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f1">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[5]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="a2">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[6]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  value="0"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b2">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[7]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c2">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[8]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d2">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[9]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e2">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[10]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f2">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[11]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="a3">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[12]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b3">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[13]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="c3">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[14]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="d3">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[15]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="e3">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[16]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f3">
        <b-slider v-model="canvasManager.canvas2d.uPostAffine[17]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="aFinal">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[0]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="bFinal">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="cFinal">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="dFinal">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="eFinal">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="fFinal">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[5]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
    </b-tab-item>
    <b-tab-item label="Final">
      Final transform
      <b-switch v-model="isSwitchedCustom"
                true-value="On"
                false-value="Off">{{ isSwitchedCustom }}</b-switch>
      <div v-show="isSwitchedCustom == 'On'">
      <b-field label="Affine"></b-field>
      <b-field label="a">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[0]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
            </b-field>
      <b-field label="c">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
                  </b-field>
      <b-field label="d">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
                        </b-field>
      <b-field label="e">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f">
        <b-slider v-model="canvasManager.canvas2d.uFinalAffine[5]"
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
      <div v-for="(finalVariation, index) in finalVariationList">
        <b-field :label="finalVariation.name"></b-field>
        <b-slider v-model="finalVariationList[index].v"
                  :min="-10" :max="10" :step="0.01"></b-slider>
        <b-button @click="deleteVariation(index)">Delete</b-button>
      </div>
      <b-field label="Post transform">
      </b-field>
      <b-field label="a">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[0]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="b">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[1]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
            </b-field>
      <b-field label="c">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[2]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
                  </b-field>
      <b-field label="d">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[3]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
                        </b-field>
      <b-field label="e">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[4]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      <b-field label="f">
        <b-slider v-model="canvasManager.canvas2d.uFinalPostAffine[5]"
                  v-on:dragging="sliderDragging"
                  v-on:dragend="sliderDragEnd"
                  :min="-10" :max="10" :step="0.01"></b-slider>
      </b-field>
      </div>
    </b-tab-item>
  </b-tabs>
</div>
</template>

<script>
export default {
    props: ['canvasManager'],
    data: function () {
        return {
            selectedVariation: undefined,
            finalVariationList: [],
            isSwitchedCustom: "Off",
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
        },
        addVariation: function() {
            if (this.selectedVariation === undefined) return;
            console.log(this.selectedVariation);
            this.finalVariationList.push(this.selectedVariation);
        },
        deleteVariation: function(index) {
            this.finalVariationList.splice(index, 1);
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
