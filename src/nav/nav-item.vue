<template>
   <div class="g-nav-item" :class="{selected}" @click="onClick">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: "GuluNavItem",
      inject: ['root'],
      props: {
         name: {
            type: String,
            required: true
         }
      },
      data() {
         return {
            selected: false,
         }
      },
      created() {
         this.root.addItem(this)
      },
      methods: {
         onClick() {
            this.root.namePath = []
            this.$parent.upDateNamePath && this.$parent.upDateNamePath()
            this.$emit('update:selected', this.name)
         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .g-nav-item {
      padding: 10px 20px ;
      position: relative;
      color: $font-gray;
      background: white;

      &:first-child {
         border-top-left-radius: $border-radius;
         border-top-right-radius: $border-radius;
      }

      &:last-child {
         border-bottom-left-radius: $border-radius;
         border-bottom-right-radius: $border-radius;
      }

      &:hover {
         color: black;
      }

      &.selected {
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
   }

   .g-nav-sub .g-nav-item {
      &.selected {
         color: black;
         &::after{
            display: none;
         }
      }
   }
</style>