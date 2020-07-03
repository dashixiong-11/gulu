<template>
   <div>
      <g-input disabled value="禁止编辑"></g-input>
      <br>
      <br>
      <g-input readonly value="只读"></g-input>
      <br>
      <br>

      <g-input error="错误"></g-input>
      <br>
      <br>
      <g-input placeholder="默认显示"></g-input>
   </div>
</template>

<script>
   import GInput from '../../../src/input'
   import '../../../src/svg'

   export default {
      components: { GInput },
      data(){
         return {
         }
      }
   }
</script>
