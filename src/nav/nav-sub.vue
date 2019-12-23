<template>
   <div class="g-nav-sub"  @mouseenter="hover" @mouseleave="hover">
      <span>
         <slot name="title"></slot>
      </span>
      <div class="g-nav-sub-popover" v-show="open">
         <div class="g-nav-sub-popover-wrapper">
            <slot></slot>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "GuluNavSub",
      data() {
         return {
            open: false
         }
      },
      methods: {
         hover() {
            this.open = !this.open
         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .g-nav-sub {
      position: relative;

      > span {
         padding: 10px 20px;
         color: $font-gray;
         display: block;

         &:hover {
            color: $hover-black;
         }
      }

      &-popover {
         position: absolute;
         top: 100%;
         left: 0;
         margin-top: 1px;
         white-space: nowrap;
         font-size: $font-size;
         min-width: 6em;
         &-wrapper{
            border-radius: $border-radius;
            box-shadow: 0 0 3px $box-shadow-color;
         }
      }

      .g-nav-sub {
         .g-nav-sub-popover {
            top: 0;
            left: 100%;
            padding-left: 8px;
         }
      }
   }
</style>