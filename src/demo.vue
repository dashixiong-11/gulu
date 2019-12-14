<template>
   <div style="padding:100px;" >
      <g-slides :selected.sync="selected">
         <g-slides-item name="1">
            <div class="box">1</div>
         </g-slides-item>
         <g-slides-item name="2">
            <div class="box">2</div>
         </g-slides-item>
         <g-slides-item name="3">
            <div class="box">3</div>
         </g-slides-item>
      </g-slides>
   </div>
</template>
<script>
   import Slides from './slides/slides'
   import plugin from './plugin'
   import SlidesItem from './slides/slides-item'
   import Vue from 'vue'

   Vue.use(plugin)

   export default {
      components: {gSlides: Slides,gSlidesItem:SlidesItem},
      data() {
         return {
            selected:'1'
         }
      },
      created() {
      },
      methods: {}
   }
</script>

<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      font-size: 14px;
   }
   .box{
      width: 100%;
      height: 200px;
      background: #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
   }
</style>