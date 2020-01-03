<template>
   <div class="g-nav-vertical-item" :class="{selected}" @click="onClick">
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
            this.$emit('update:selected', this.name)
         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .g-nav-vertical-item {
      padding: 10px 20px ;
      position: relative;
      color: $color;
      background: white;


      &:hover {
         background: $hover-blue;
      }

      &.selected {
         color: $blue;
      }
   }
</style>