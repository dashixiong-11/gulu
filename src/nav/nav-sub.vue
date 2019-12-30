<template>
   <div class="g-nav-sub" @mouseenter="hover" @mouseleave="hover" :class="{active}">
      <span class="g-nav-sub-label" :class="{selected}">
         <slot name="title"></slot>
         <span></span>
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
      inject:['root'],
      props: {
         name: {
            type: String,
            required: true,
         }
      },
      data() {
         return {
            open: false,
            selected: false
         }
      },
      computed:{
         active(){
            return this.root.namePath.indexOf(this.name) >= 0
         }
      },
      methods: {
         hover() {
            this.open = !this.open
         },
         upDateNamePath(){
            this.root.namePath.unshift(this.name)
            if(this.$parent.upDateNamePath){
               this.$parent.upDateNamePath()
            }
         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .g-nav-sub {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $font-gray;
       .g-nav-sub-label {
         padding: 10px 20px;
         display: block;

         &:hover {
            color: $hover-black;
         }
      }

      &.active {
         color: black;

         &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 2px solid $blue;
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

         .g-nav-sub {
            .selected {
               color: black;
            }
         }

         &-wrapper {
            border-radius: $border-radius;
            box-shadow: 0 0 3px $box-shadow-color;
         }
      }

      .g-nav-sub {
         .g-nav-sub-popover {
            top: 0;
            left: 100%;
            padding-left: 8px;
            .g-nav-sub-popover-wrapper{
               .g-nav-sub.active{
                  &::after{
                     display: none;
                  }
               }
            }
         }
      }
      .g-nav-sub-popover {
         .g-nav-sub-popover-wrapper{
            .g-nav-sub.active{
               &::after{
                  display: none;
               }
            }
         }
      }

   }
</style>