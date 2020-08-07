<template>
  <div class="controlPanel">
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
