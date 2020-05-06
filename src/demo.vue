<template>
   <div>
      <g-table :data-source="dataSource" :columns="columns" :height="200" :order-by="orderBy">
         <g-table-column text="姓名" field="name" :width="100">
            <template slot-scope="props">
               <a href="">{{props.value}}</a>
            </template>
         </g-table-column>
         <g-table-column text="分数" field="score" >
            <template slot-scope="props">
               <span style="color: red;"> {{props.value}}</span>
            </template>
         </g-table-column>
      </g-table>

   </div>
</template>
<script>
   import Vue from 'vue'
   import GTable from './table'
   import GTableColumn from './table-column'

   Vue.use(plugin)
   import plugin from './plugin'

   export default {
      components: { GTable,GTableColumn },
      data() {
         return {
            error:'',
            fileList: [],
            currentPage: 1,
            columns: [
               {text: '姓名', field: 'name', width: 100},
               {text: '分数', field: 'score'}
            ],
            orderBy: { //true 开启排序
               name: true,
               score: 'desc'
            },
            loading: false,
            dataSource: [
               {id: 1, name: '张三', score: 100, description: '可展开'},
               {id: 2, name: '里斯', score: 90},
               {id: 3, name: '王武', score: 66},
               {id: 4, name: '李维斯', score: 88},
               {id: 5, name: '张三', score: 100},
               {id: 6, name: '里斯', score: 90},
               {id: 7, name: '王武', score: 66},
               {id: 8, name: '李维斯', score: 88},
               {id: 9, name: '张三', score: 100},
               {id: 10, name: '里斯', score: 90},
               {id: 11, name: '王武', score: 66},
               {id: 12, name: '李维斯', score: 88},
            ],
            selected: []
         }
      },
      created() {
      },
      methods: {
         parseResponse(res) {
            let obj = JSON.parse(res)
            let url = `http://127.0.0.1:3000/preview/${obj.id}`
            return url
         },
         addFile(file){
            this.fileList.push(file)
         },
         x(object) {
            let {selected, item} = object
            if (selected) {
               this.selected.push(item.name)
            } else {
               let index = this.selected.indexOf(item.name)
               this.selected.splice(index, 1)
            }
         },
         onError(error) {
            window.alert(error)
         },
         sort(value) {
            this.loading = true
            let t = setTimeout(() => {
               this.loading = false
               clearTimeout(t)
            }, 1500)
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
   image{
      max-width: 100%;
   }
</style>