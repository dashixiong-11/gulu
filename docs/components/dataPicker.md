# dataPicker  <font size=3 color=gray> 日期选择 </font>
---

## 如何使用  

### 演示
<br>
<ClientOnly>
   <dataPicker-demos></dataPicker-demos>
</ClientOnly>

## 代码

```html
<template>
   <div class="dataPicker-demos">
      <g-data-picker :value.sync="value" ></g-data-picker>
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
```

## API


### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| value | 选中的日期 |  Data | - | - 
| type | 日期选择的类型 |  String | year/month/day | day 

