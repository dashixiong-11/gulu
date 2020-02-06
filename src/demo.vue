<template>
   <div>
      <g-pager :total-page="20" :current-page="18"></g-pager>
   </div>
</template>
<script>
   import GPager from './pager'
   import Vue from 'vue'

   Vue.use(plugin)
   import plugin from './plugin'

   export default {
      components: {GPager},
      data() {
         return {}
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
</style>