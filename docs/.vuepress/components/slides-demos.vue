<template>
   <div class="slides-demos">
      <g-slides :selected.sync="selected">
         <g-slides-item name="x">
            <div class="item box1">1</div>
         </g-slides-item>
         <g-slides-item name="y">
            <div class="item box2">2</div>
         </g-slides-item>
         <g-slides-item name="z">
            <div class="item box3">3</div>
         </g-slides-item>
      </g-slides>
   </div>
   
</template>

<script>
   import GSlides from '../../../src/slides/slides'
   import GSlidesItem from '../../../src/slides/slides-item'
   export default {
      name: "slides-demos",
      components:{ GSlides,GSlidesItem },
      data(){
         return{
            selected:'x'
         }
      }
   }
</script>

<style scoped lang="scss">
   .slides-demos {
      .item{
         width: 100%;
         height: 200px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .box1{
         background: #b0ffec;
      }
      .box2{
         background: #ffbcd0;
      }
      .box3{
         background: #fffecf;
      }
   }

</style>