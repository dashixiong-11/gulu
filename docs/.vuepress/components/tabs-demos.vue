<template>
   <div class="tabs-demos">
      <g-tabs selected="z" selectedColor="#1980FF">
         <g-tabs-head>
            <g-tabs-item name="z">
               标签1
            </g-tabs-item>
            <g-tabs-item name="x">
               标签2
            </g-tabs-item>
         </g-tabs-head>
         <g-tabs-body>
            <g-tabs-pane name="z">
               选中了标签1
            </g-tabs-pane>
            <g-tabs-pane name="x">
               选中了标签2
            </g-tabs-pane>
         </g-tabs-body>
      </g-tabs>
   </div>
</template>

<script>
   import GTabs from '../../../src/tabs/tabs'
   import GTabsBody from '../../../src/tabs/tabs-body'
   import GTabsHead from '../../../src/tabs/tabs-head'
   import GTabsItem from '../../../src/tabs/tabs-item'
   import GTabsPane from '../../../src/tabs/tabs-pane'
   export default {
      name: "tabs-demos",
      components:{ GTabs,GTabsBody,GTabsHead,GTabsItem,GTabsPane}
   }
</script>

<style scoped lang="scss">
   .tabs-demos {
   }

</style>