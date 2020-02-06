<template>
   <div class="gulu-pager">
      <span v-for="(page,index) in pages" :key="index"
            :class="{active:page === currentPage,separator:page === '···'}"
            class="gulu-pager-item">{{page}}</span>
   </div>
</template>

<script>
   export default {
      name: "GuluPager",
      data() {
         return {}
      },
      props: {
         totalPage: {
            type: Number,
            required: true
         },
         currentPage: {
            type: Number,
            required: true
         },
         hideIfOnePage: {
            type: Boolean,
            default: true
         }
      },
      computed: {
         pages() {
            return unique(
                  [1, this.totalPage, this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage - 1, this.currentPage - 2]
                        .sort((a, b) => a - b)).reduce((prev, current, index, array) => {
               prev.push(current)
               array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('···')
               return prev
            }, [])
         }
      }
   }

   function unique(array) {
      //return [...new Set(array)]
      const object = {}
      array.map((number) => {
         object[number] = true
      })
      return Object.keys(object).map((s) => {
         return parseInt(s, 10)
         //map会往传入它的函数里面传入3个参数
      })
   }
</script>

<style scoped lang="scss">
   @import "../styles/var";

   .gulu-pager {
      &-item {
         min-width: 20px;
         height: 20px;
         font-size: 13px;
         border: 1px solid #e1e1e1;
         border-radius: $border-radius;
         padding: 0 4px;
         margin:0 4px;
         display: inline-flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
         &.separator{
            border:none;
            cursor: default;
         }
         &.active,&:hover{
            border-color: $blue;
         }
         &.active{
            cursor: default;
         }
      }
   }
</style>