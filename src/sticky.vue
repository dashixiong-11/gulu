<template>
   <div class="gulu-sticky" ref="wrapper" :style="{height}">
      <div :class="{sticky}" ref="sticky" :style="{width,left,top}">
         <slot></slot>
      </div>
   </div>
</template>

<script>
   export default {
      name: "GuluSticky",
      data() {
         return {
            sticky: false,
            height: undefined,
            width: undefined,
            left: undefined,
            top: undefined
         }
      },
      props: {
         distance: {
            type: Number,
            default: 0
         }
      },
      mounted() {
         window.addEventListener('scroll', this._windowScrollHandler)
      },
      beforeDestroy() {
         window.removeEventListener('scroll', this._windowScrollHandler)

      },
      methods: {
         _windowScrollHandler() {
            let {top, height, left, width} = this.$refs.wrapper.getBoundingClientRect()
            if (top < this.distance) {
               this.height = height + 'px'
               this.width = width + 'px'
               this.left = left + 'px'
               this.top = this.distance + 'px'
               this.sticky = true
            } else {
               this.height = undefined
               this.width = undefined
               this.left = undefined
               this.top = undefined
               this.sticky = false
            }

         }
      }
   }
</script>

<style scoped lang="scss">
   .gulu-sticky {
      & > .sticky {
         position: fixed;
         width: 100%;
      }
   }
</style>