<template>
   <div class="g-nav">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: "GuluNav",
      props: {
         selected: String
      },
      data() {
         return {}
      },
      mounted(){
         this.updateChildren()
         this.listenToChildren()
      },
      updated(){
         this.updateChildren()
      },
      computed:{
         items(){
            return this.$children.filter( (vm)=>{
               return vm.$options.name === 'GuluNavItem'
            })
         }
      },
      methods:{
         updateChildren(){
            this.items.forEach( vm => {
               if(this.selected === vm.name){
                  vm.selected = true
               }else {
                  vm.selected = false
               }
            })
         },
         listenToChildren(){
            this.items.forEach( vm => {
               vm.$on('update:selected',(name)=>{
                  if(this.selected !== name){
                     this.$emit('update:selected',name)
                  }
               })
            })
         }
      }
   }
</script>

<style scoped lang="scss">
   .g-nav {
      display: flex;
      align-items: center;
   }
</style>