<template>
   <div class="g-nav-vertical">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: "GuluNavVertical",
      provide() {
         return {
            root: this
         }
      },
      props: {
         selected: String
      },
      data() {
         return {
            items: [],
         }
      },
      mounted() {
         this.updateChildren()
         this.listenToChildren()
      },
      updated() {
         this.updateChildren()
      },
      computed: {},
      methods: {
         addItem(vm) {
            this.items.push(vm)
         },
         updateChildren: function () {
            this.items.forEach(vm => {
               vm.selected = this.selected === vm.name
            })
         },
         listenToChildren() {
            this.items.forEach(vm => {
               vm.$on('update:selected', (name) => {
                  if (this.selected !== name) {
                     this.$emit('update:selected', name)
                  }
               })
            })
         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .g-nav-vertical {
      min-width: 200px;
      display: flex;
      flex-direction: column;
      border: 1px solid $grey;
      cursor: default;
      user-select: none;
   }
</style>