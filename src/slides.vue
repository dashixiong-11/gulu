<template>
   <div class="g-slides">
      <div class="g-slides-window" ref="window">
         <div class="g-slides-wrapper">
            <slot></slot>
         </div>
      </div>
   </div>
</template>


<script>
/* $children 只显示子组件， 获取元素的children 可以用 $el */
   export default {
      name: "slides",
      props:{
        selected:{
           type:String,
        }
      },
      mounted() {
         this.updateChildren()
      },
      methods:{
        updateChildren(){
           let first = this.$children[0]
           this.$children.forEach( vm=>{
              vm.selected = this.selected || first.name
           })
        }
      },
      updated() {
         this.updateChildren()
      }
   }
</script>

<style scoped lang="scss">
   .g-slides {
      display: inline-block;
      &-widows {

      }
      &-wrapper{
         position: relative;
      }
   }
</style>