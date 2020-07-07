# sticky  <font size=3 color=gray> 吸顶 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <sticky-demos></sticky-demos>
</ClientOnly>

## 代码

```html

<template>
   <div class="sticky-demos">
      <g-sticky :distance="100">
         <div class="box"> 
         一个吸顶灯
         </div>
      </g-sticky>
   </div>
</template>

<script>
   import GSticky from '../../../src/sticky'
   export default {
      name: "sticky-demos",
      components:{ GSticky }
   }
</script>

<style scoped lang="scss">
   .sticky-demos {
      .box{
         width:100%;
         height: 40px;
         background: #a5a5a5;
         border-radius: 5px;
         display:flex;
         justify-content: center;
         align-items: center;
      }
   }

</style>
```

## API


### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| distance | 距离页面顶部的高度，单位 `px` |  Number | - | 0 

