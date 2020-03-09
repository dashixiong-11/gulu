<template>
   <div style="margin: 20px">
      {{selected}}
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"></g-table>
      <div style="margin: 20px">
         <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
      </div>
   </div>
</template>
<script>
   import GPager from './pager'
   import Vue from 'vue'
   import GTable from './table'

   Vue.use(plugin)
   import plugin from './plugin'

   export default {
      components: {GPager, GTable},
      data() {
         return {
            currentPage: 1,
            columns: [
               {text: '姓名', field: 'name'},
               {text: '分数', field: 'score'}
            ],
            dataSource: [
               {id: 1, name: '张三', score: 100},
               {id: 2, name: '里斯', score: 90},
               {id: 3, name: '王武', score: 66},
               {id: 4, name: '李维斯', score: 88},
            ],
            selected:[]
         }
      },
      created() {
      },
      methods: {
         x(object){
            let { selected,item} = object
            if(selected){
               this.selected.push(item.name)
            }else {
               let index = this.selected.indexOf(item.name)
               this.selected.splice(index,1)
            }
         }
      }
   }

</script>

<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
</style>