# uploader  <font size=3 color=gray> 图片上传 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <uploader-demos></uploader-demos>
</ClientOnly>

## 代码

```html
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
```

## API


### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| action |  上传路径 |  String | - | - 
| name | 文件`name` 属性 |  String | - | file | 
| method | 请求方法 |  String | POST/GET | POST | 
| parseResponse | 返回值回调,用于自定义图片预览的路径 |  Function | - | - | 
| fileList | 预览列表,需要通过`.sync`,双向绑定 |  Array | POST/GET | POST | 
| sizeLimit |  文件大小限制，单位 `MB` |   Number| - | - 
| accept |  文件类型 |  String | - | - 
| multiple |  是否多文件上传 |  Boolean | true/false | false 

