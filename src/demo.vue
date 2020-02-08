<template>
   <div style="margin: 20px">
      <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
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
         return {
            currentPage: 1
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
</style>