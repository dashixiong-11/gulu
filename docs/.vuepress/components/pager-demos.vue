<template>
   <div class="pager-demos">
      <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
   </div>
</template>

<script>
   import GPager from '../../../src/pager'
   export default {
      name: "pager-demos",
      components:{ GPager },
      data(){
         return{
            currentPage:4
         }
      }
   }
</script>

<style scoped lang="scss">
   .pager-demos {
   }

</style>