<template>
   <div class="popover-demos">
      <g-popover>
         <template slot="content">
            popover的内容
         </template>
         <g-button> 按钮 </g-button>
      </g-popover>
      <br>
      <br>
      <g-popover position="top">
         <template slot="content">
            popover的内容
         </template>
         <g-button> 向上弹出 </g-button>
      </g-popover>
      <br>
      <br>
      <g-popover position="bottom">
         <template slot="content">
            popover的内容
         </template>
         <g-button> 向下弹出 </g-button>
      </g-popover>
      <br>
      <br>
      <g-popover position="left">
         <template slot="content">
            popover的内容
         </template>
         <g-button> 向左弹出 </g-button>
      </g-popover>
      <br>
      <br>
      <g-popover position="right">
         <template slot="content">
            popover的内容
         </template>
         <g-button> 向右弹出 </g-button>
      </g-popover>
      <br>
      <br>
      <g-popover position="right" trigger="hover">
         <template slot="content">
            popover的内容
         </template>
         <g-button> hover触发 </g-button>
      </g-popover>
   </div>
</template>

<script>
   import GPopover from '../../../src/popover'
   import GButton from '../../../src/button/button'
   export default {
      name: "popover-demos",
      components:{ GPopover,GButton }
   }
</script>

<style scoped lang="scss">
   .popover-demos {
   }
</style>