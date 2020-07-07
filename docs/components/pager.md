# pager  <font size=3 color=gray> 翻页 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <pager-demos></pager-demos>
</ClientOnly>

## 代码

```html
<template>
   <div class="pager-demos">
      <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
   </div>
</template>

<script>
   import GPager from '../../../src/pager'
   export default {
      name: "pager-demos",
      components:{ GPager },
      data(){
         return{
            currentPage:4
         }
      }
   }
</script>

<style scoped lang="scss">
   .pager-demos {
   }

</style>
```

## API

### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| totalPage |  当前页 需要通过`.sync `双向绑定 |  String | - | - 
| currentPage | 总页数 |  String | - | - 

