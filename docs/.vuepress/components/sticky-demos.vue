<template>
   <div class="sticky-demos">
      <g-sticky :distance="100">
         <div class="box"> 
         一个吸顶灯
         </div>
      </g-sticky>
   </div>
</template>

<script>
   import GSticky from '../../../src/sticky'
   export default {
      name: "sticky-demos",
      components:{ GSticky }
   }
</script>

<style scoped lang="scss">
   .sticky-demos {
      .box{
         width:100%;
         height: 40px;
         background: #a5a5a5;
         border-radius: 5px;
         display:flex;
         justify-content: center;
         align-items: center;
      }
   }

</style>