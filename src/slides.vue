<template>
   <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="g-slides-window" ref="window">
         <div class="g-slides-wrapper">
            <slot></slot>
         </div>
      </div>
      <div class="g-slides-dots">
         <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}"
               @click="select(n-1)"
         >{{n-1}}</span>
      </div>
   </div>
</template>

<script>
   /* $children 只显示子组件， 获取元素的children 可以用 $el */
   export default {
      name: "slides",
      props: {
         selected: {
            type: String,
         },
         autoPlay: {
            type: Boolean,
            default: true
         }
      },
      data(){
         return{
            childrenLength:0,
            lastSelectedIndex: undefined,
            timerId: undefined
         }

      },
      mounted() {
         this.updateChildren()
         this.playAutomatically()
         this.childrenLength = this.$children.length
      },
      computed:{
         selectedIndex(){
            return this.names.indexOf(this.selected) || 0
         },
         names(){
            return this.$children.map( vm => vm.name)
         }
      },
      methods: {
         onMouseEnter(){
            this.pause()
         },
         onMouseLeave(){
            this.playAutomatically()
         },
         select(index){
            this.lastSelectedIndex = this.selectedIndex
            this.$emit('update:selected',this.names[index])
         },
         playAutomatically(){
            if(this.timerId) { return } //如果当前有动画 就不添加定时器 防止刷新的时候鼠标就已经在轮播上了
            let run = ()=>{
               let index = this.names.indexOf(this.getSelected())
               if(index === this.names.length){ index = 0 }
               let newIndex = index + 1
               if(newIndex === -1) { newIndex = this.names.length - 1 }
               if(newIndex === this.names.length){ newIndex = 0}
               this.select(newIndex)
               this.timerId = setTimeout(run,3000)
            }
            this.timerId = setTimeout(run,3000)
         },
         pause(){
            window.clearTimeout(this.timerId)
            this.timerId = undefined
         },
         getSelected(){
            let first = this.$children[0]
            return  this.selected || first.name
         },
         updateChildren() {
            let selected = this.getSelected()
            this.$children.forEach(vm => {
               let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true  //在这边修改子组件的reverse 有可能并不会马上生效
               if(this.lastSelectedIndex  === this.names.length -1 && this.selectedIndex === 0){
                  reverse = false
               }
               vm.reverse = reverse
               //就会造成reverse 还留在class里的情况
               this.$nextTick(()=>{ //解决reverse 更新不及时的bug
                  vm.selected = selected
               })
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
      &-window {
         overflow: hidden;
      }
      &-wrapper {
         position: relative;
      }
      .g-slides-dots{
         >span{
            &.active{
               background-color: red;

            }
         }
      }


   }
</style>