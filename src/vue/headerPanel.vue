<template>
<header>
  <ul class="headerLeft">
    <li class="headerContent"><span>Fractal Flame</span></li>
  </ul>
  <ul class="headerRight">
    <li class="buttonLi">
      <button class="button" @click="clear">Clear</button>
    </li>
    <li class="buttonLi">
      <button class="button" @click="save">Export</button>
    </li>
    <li class="buttonLi">
      <button class="button" @click="load">Import</button>
    </li>
    <li class="buttonLi">
      <button class="button" @click="saveImage">SaveImage</button>
    </li>
  </ul>
</header>
</template>

<script>
export default {
    props: ['scene', 'canvasManager'],
    methods: {
        clear: function() {
            this.canvasManager.canvas2d.clear();
        },
        save: function() {
            this.canvasManager.canvas2d.saveParametersAsJson();
        },
        load: function() {
            this.canvasManager.canvas2d.loadSceneFromFile();
        },
        saveImage: function() {
            const canvas = this.canvasManager.canvas2d;
            canvas.saveFlame(canvas.canvas.width,
                             canvas.canvas.height);
        }
    }
}
</script>

<style>
  header {
    border-style: ridge;
    border-color: gray;

    overflow:hidden;
    font-size: 2rem;

    height: 50px;
    background-color: Azure;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    cursor: default;
}

.headerLeft {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    list-style: none;
    height: 100%;
}

.headerRight{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    list-style: none;
    height: 100%;

    flex-direction: row-reverse;
}

.buttonLi {
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    display: flex;
}

.headerContent {
    padding: 5px;
}
</style>
