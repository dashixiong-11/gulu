# input  <font size=3 color=gray> 输入框 </font>
---

## 如何使用

### 演示
<ClientOnly>
   <input-demos></input-demos>
</ClientOnly>

## 代码
```html

<template>
   <div>
      <g-input disabled value="禁止编辑"></g-input>
      <g-input readonly value="只读"></g-input>
      <g-input error="错误"></g-input>
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
```
## API
### props
| 属性名         | 说明           | 类型   | 可选值 |
| ------------- |----------------|-------| ------|
| value      |输入框的值 | - | -
| disabled      |是否禁用| Boolean| true/false
| readonly |  是否只读 |  Boolean | true/false
| placeholder |  placeholder的值 |  - | -
