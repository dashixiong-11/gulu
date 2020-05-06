<template>
   <div class="gulu-table-column" >
      <slot></slot>
   </div>
   
</template>

<script>
   export default {
      name: "GuluTableColumn",
      props:{
         text:{
            type:String,
            required:true
         },
         field:{
            type:String,
            required: true
         },
         width:{
            type:Number
         }
      }
   }
</script>

<style scoped lang="scss">
   .gulu-table-column {
   }

</style>