<template>
   <div class="collapse-demos">
      <g-collapse :selected.sync="selected" >
         <g-collapse-item title="标题1" name="x">
             打开标题1
         </g-collapse-item>
         <g-collapse-item title="标题2" name="y">
            打开标题2
         </g-collapse-item>
         <g-collapse-item title="标题3" name="z">
            打开标题3
         </g-collapse-item>
      </g-collapse>
   </div>
</template>

<script>
   import GCollapse from '../../../src/collapse/collapse'
   import GCollapseItem from '../../../src/collapse/collapse-item'
   export default {
      name: "collapse-demos",
      components:{ GCollapse,GCollapseItem},
      data(){
         return{
            selected:['x','y']
         }
      }
   }
</script>

<style scoped lang="scss">
   .collapse-demos {
   }

</style>