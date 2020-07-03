<template>
   <div class="tabs-head" ref="tabsHead">
      <slot></slot>
      <div class="line" ref="line" :style="{
            borderBottom:  `${color} 1px solid`
        }"></div>
      <div class="actions-wrapper">
         <slot name="actions"></slot>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'GuluTabsHead',
      inject: ['eventBus'],
      data() {
         return {
            color: null
         }
      },
      mounted() {
         this.eventBus.$on('update:selected', (name, vm) => {
            let {width, left} = vm.$el.getBoundingClientRect()
            let headLeft = this.$el.getBoundingClientRect().left
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.transform = `translateX(${left - headLeft}px)`
         })
         this.eventBus.$on('update:selectedColor', (color) => {
            this.color = color
         })
      }
   }

</script>

<style scoped lang="scss">
   $tab-height: 40px;
   $blue: red;
   $border-color: #ddd;
   .tabs-head {
      display: flex;
      height: $tab-height;
      justify-content: flex-start;
      position: relative;
      border-bottom: 1px solid $border-color;

      > .line {
         position: absolute;
         bottom: 0;
         transition: all .5s;
      }

      > .actions-wrapper {
         margin-left: auto;
         display: flex;
         align-items: center;
      }
   }
</style>