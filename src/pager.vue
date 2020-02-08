<template>
   <div class="gulu-pager">
      <span class="gulu-pager-nav" :class="{disabled:currentPage === 1}" @click="onClickPage(currentPage -1 )">
        <g-icon name="left"></g-icon>
      </span>
      <template v-for="page in pages">
         <template v-if=" page === currentPage">
            <span class="gulu-pager-item active">{{page}}</span>
         </template>
         <template v-else-if="page === '···'">
            <span class="gulu-pager-item separator">···</span>
         </template>
         <template v-else>
            <span class="gulu-pager-item other" @click="onClickPage(page)">{{page}}</span>
         </template>
      </template>
      <span class="gulu-pager-nav" :class="{disabled: currentPage === totalPage}" @click="onClickPage(currentPage +1 )">
        <g-icon name="right"></g-icon>
      </span>
   </div>
</template>

<script>
   import GIcon from './icon'

   export default {
      name: "GuluPager",
      components: {GIcon},
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
      methods: {
         onClickPage(page) {
            if(page >0 && page <= this.totalPage){
               this.$emit('update:currentPage', page)
            }
         }
      },
      computed: {
         pages() {
            return unique(
                  [1, this.totalPage, this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage - 1, this.currentPage - 2]
                        .filter(n => n>0 && n<=this.totalPage)
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
   $width:20px;
   $height:20px;


   .gulu-pager {
      user-select: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      &-nav{
         display: inline-flex;
         align-items: center;
         justify-content: center;
         width:$width;
         height:$height;
         &.disabled{
            cursor: default;
            svg{
               fill:darken($grey,20);
            }
         }
      }
      &-item {
         min-width: $width;
         height: $height;
         font-size: 13px;
         border: 1px solid #e1e1e1;
         border-radius: $border-radius;
         padding: 0 4px;
         margin: 0 4px;
         display: inline-flex;
         justify-content: center;
         align-items: center;

         &.separator {
            border: none;
            cursor: default;
         }

         &.active, &:hover {
            border-color: $blue;
         }

         &.active {
            cursor: default;
         }
      }
   }
</style>