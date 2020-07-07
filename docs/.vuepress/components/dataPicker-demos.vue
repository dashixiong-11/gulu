<template>
   <div class="dataPicker-demos">
      <span> 年 </span>
      <g-data-picker :value.sync="value" type="year"></g-data-picker>
      <div style="margin: 2em 0;">
         <span> 月 </span>
         <g-data-picker :value.sync="value" type="month"></g-data-picker>
      </div>
      <span> 日 </span>
      <g-data-picker :value.sync="value" type="day"></g-data-picker>
   </div>
   
</template>

<script>
   import GDataPicker from '../../../src/date-picker/date-picker'
   export default {
      name: "dataPicker-demos",
      components:{ GDataPicker },
      data(){
         return{
            value:new Date()
         }
      },
      methods:{

      }
   }
</script>

<style scoped lang="scss">
   .dataPicker-demos {
   }

</style>