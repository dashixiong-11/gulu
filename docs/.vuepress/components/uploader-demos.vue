<template>
   <div class="uploader-demos">
      <g-uploader action="https://gulu-node-server-1.herokuapp.com/upload" :file-list.sync="fileList" name="file" :parse-response="response">
         <g-button>上传</g-button>
      </g-uploader>
   </div>
</template>

<script>

   import GUploader from '../../../src/uploader'
   import GButton from '../../../src/button/button'
   export default {
      name: "uploader-demos",
      components:{ GUploader,GButton },
      data(){
         return{
            fileList:[]
         }
      },
      methods:{
         response(val){
            return `https://gulu-node-server-1.herokuapp.com/preview/${val}`
         }
      }
   }
</script>

<style scoped lang="scss">
   .uploader-demos {
   }

</style>