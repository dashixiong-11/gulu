<template>
   <div class="g-nav">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: "GuluNav",
      provide(){
         return{
            root:this
         }
      },
      props: {
         selected: String
      },
      data() {
         return {
            items:[]
         }
      },
      mounted(){
         this.updateChildren()
         this.listenToChildren()
      },
      updated(){
         this.updateChildren()
      },
      computed:{
      },
      methods:{
         addItem(vm){
            this.items.push(vm)
         },
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
   @import "../../styles/var";
   .g-nav {
      display: flex;
      border-bottom: 1px solid $grey;
      cursor: default;
   }
</style>