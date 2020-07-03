<template>
   <div class="cascader-demos">
      <g-cascader :source.sync="source" :load-data="loadData" :selected.sync="selected" popover-height="300px"></g-cascader>
   </div>
</template>

<script>
   import GCascader from '../../../src/cascader/cascader'
   import db from '../../../src/db'


   function ajax (parentId = 0) {
      return new Promise((success, fail) => {
         setTimeout(() => {
            let result = db.filter((item) => item.parent_id == parentId)
            result.forEach(node => {
               if (db.filter(item => item.parent_id === node.id).length > 0) {
                  node.isLeaf = false
               }else{
                  node.isLeaf = true
               }
            })
            success(result)
         }, 1000)
      })
   }

   export default {
      name: "cascader-demos",
      components:{ GCascader },
      data(){
         return {
            source:[],
            selected:[]
         }
      },
      created() {
         ajax(0).then(result => {
            console.log(result)
            this.source = result
         })
      },
      methods:{
         loadData ({id}, updateSource) {
            ajax(id).then(result => {
               console.log(result)
               updateSource(result) // 回调:把别人传给我的函数调用一下
            })
         }
      }
   }
</script>

<style scoped lang="scss">
   .cascader-demos {
   }

</style>