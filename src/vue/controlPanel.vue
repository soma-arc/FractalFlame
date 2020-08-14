<template>
  <div class="controlPanel">
    <b-tabs v-model="activeTab">
            <b-tab-item label="variations">
                Lorem ipsum dolor sit amet.
            </b-tab-item>

            <b-tab-item label="Final">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>

            <b-tab-item :visible="showBooks" label="Affine">
              <b-field label="a">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="b">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="c">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="d">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="e">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="f">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="f">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
    <b-field label="f">
      <b-slider v-model="value" lazy
                :min="-10" :max="10" :step="0.1"></b-slider>
    </b-field>
            </b-tab-item>

        </b-tabs>
    
  </div>
</template>

<script>
  export default {}
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
