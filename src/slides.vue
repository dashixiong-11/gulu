<template>
   <div class="g-slides"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
   >
      <div class="g-slides-window" ref="window">
         <div class="g-slides-wrapper">
            <slot></slot>
         </div>
      </div>
      <div class="g-slides-dots">
         <span @click="select(selectedIndex - 1)" class="left">
            <g-icon name="left"></g-icon>
         </span>
         <span v-for="n in childrenLength" :key="n" :data-index="n-1" :class="{active: selectedIndex === n-1}" @click="select(n-1)" >{{n}}</span>
         <span @click="select(selectedIndex + 1)" class="right">
            <g-icon name="right"></g-icon>
         </span>
      </div>
   </div>
</template>

<script>
   import gIcon from './icon'
   /* $children 只显示子组件， 获取元素的children 可以用 $el */
   export default {
      name: "slides",
      components:{ gIcon },
      props: {
         selected: {
            type: String,
         },
         autoPlay: {
            type: Boolean,
            default: true
         },
         autoPlayDelay:{
            type:Number,
            default: 3000
         }
      },
      data(){
         return{
            childrenLength:0,
            lastSelectedIndex: undefined,
            timerId: undefined,
            startTouch:undefined
         }

      },
      mounted() {
         this.updateChildren()
         if(this.autoPlay){
            this.playAutomatically()
         }
         this.childrenLength = this.items.length
      },
      computed:{
         selectedIndex(){
            let index = this.names.indexOf(this.selected)//外面不传或者瞎几把传都是默认选中第一张
            return index === -1? 0 : index
         },
         names(){
            return this.items.map( vm => vm.name)
         },
         items(){
            return  this.$children.filter( vm =>  vm.$options.name === 'GuluSlidesItem') //返回所有子组件
         }
      },
      methods: {
         onMouseEnter(){
            this.pause()
         },
         onMouseLeave(){
            this.playAutomatically()
         },
         onTouchStart(e){
            this.pause()
            this.startTouch = e.touches[0]
         },
         onTouchEnd(e){
            let endTouch = e.changedTouches[0]
            let {clientX:x1,clientY:y1} = this.startTouch
            let {clientX:x2,clientY:y2} = endTouch
            let distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
            let deltaY = Math.abs(y2 - y1)
            let rate = distance / deltaY         //通过对比touch起始点到结束点的距离 与 结束点到X轴的距离 之比来判断用户是上下滑动还是左右滑动
            if(rate>2){
               if(x2 > x1){
                  this.select(this.selectedIndex - 1)
               }else{
                  this.select(this.selectedIndex + 1)
               }
            }
            this.$nextTick( ()=>{
               this.playAutomatically()
            })
         },
         select(newIndex){ //把新的selected传到外面去
            if(newIndex === -1) { newIndex = this.names.length - 1 }
            if(newIndex === this.names.length){ newIndex = 0}
            this.lastSelectedIndex = this.selectedIndex
            this.$emit('update:selected',this.names[newIndex])
         },
         playAutomatically(){
            if(this.timerId) { return } //如果当前有动画 就不添加定时器 防止刷新的时候鼠标就已经在轮播上了
            let run = ()=>{
               let index = this.names.indexOf(this.getSelected())
               if(index === this.names.length){ index = 0 }
               let newIndex = index + 1
               this.select(newIndex)
               this.timerId = setTimeout(run,this.autoPlayDelay)
            }
            this.timerId = setTimeout(run,this.autoPlayDelay)
         },
         pause(){
            window.clearTimeout(this.timerId)
            this.timerId = undefined
         },
         getSelected(){
            let first = this.items[0]
            return  this.selected || first.name
         },
         updateChildren() {//更新子组件的 selected
            let selected = this.getSelected()
            this.items.forEach(vm => {
               let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true  //在这边修改子组件的reverse 有可能并不会马上生效
                  if(this.lastSelectedIndex  === this.names.length -1 && this.selectedIndex === 0){
                     reverse = false
                  }
                  if(this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length -1){
                     reverse = true
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
         padding: 4px 0;
         display: flex;
         align-items: center;
         justify-content: center;
         >span{
            width: 1.2em;
            height: 1.2em;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ddd;
            border-radius: 50%;
            margin: 0 .2em;
            &:hover{
               cursor: pointer;
            }
            &.active{
               background-color: black;
               color: white;
               &:hover{
                  cursor: default;
               }
            }
         }
      }


   }
</style>