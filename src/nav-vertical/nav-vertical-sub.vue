<template>
   <div class="g-nav-vertical-sub">
      <span class="g-nav-sub-label" @click="onClick" :class="{selected}">
         <slot name="title"></slot>
         <span class="g-nav-sub-label-icon" :class="{open}">
            <g-icon name="left"></g-icon>
         </span>
      </span>
      <transition @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
         <div class="g-nav-vertical-sub-popover" v-show="open">
            <slot></slot>
         </div>
      </transition>
   </div>
</template>

<script>
   import GIcon from '../icon'

   export default {
      components: {GIcon},
      name: "GuluNavVerticalSub",
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
      methods: {
         onClick() {
            this.open = !this.open
         },
         enter(el, done) {
            let {height} = el.getBoundingClientRect()
            el.style.height = 0
            el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.addEventListener('transitionend', () => {
               done()
            })
         },
         afterEnter(el) {
            el.style.height = 'auto'
         },
         leave: function (el, done) {
            let {height} = el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.getBoundingClientRect()
            el.style.height = 0
            el.addEventListener('transitionend', () => {
               done()
            })
         },
         afterLeave: function (el) {
            el.style.height = 'auto'
         },
      }
   }
</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .g-nav-vertical-sub {
      color: $color;

      .g-nav-sub-label {
         padding: 10px 20px;
         display: flex;
         align-items: center;
         justify-content: space-between;

         .g-nav-sub-label-icon {
            font-size: $font-size;

            .icon {
               color: $font-gray;
               transition: all .2s;
               margin-left: 1em;
               transform: rotate(-90deg);
            }
         }

         .g-nav-sub-label-icon.open {
            font-size: $font-size;

            .icon {
               transform: rotate(-270deg);
            }
         }

         &:hover {
            color: $hover-black;
         }
      }

      &-popover {
         transition: all .3s;
         margin-top: 1px;
         white-space: nowrap;
         font-size: $font-size;
         min-width: 6em;
         width: 100%;
         padding-left: 1em;
         overflow: hidden;

         .g-nav-vertical-sub {
            .selected {
               color: black;
            }
         }
      }

      .g-nav-vertical-sub {
         .g-nav-vertical-sub-popover {
            width: 100%;
         }
      }
   }
</style>