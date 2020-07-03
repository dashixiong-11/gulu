# collapse  <font size=3 color=gray> 手风琴 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <collapse-demos></collapse-demos>
</ClientOnly>

## 代码

```html

<template>
   <div class="collapse-demos">
      <g-collapse :selected.sync="selected" >
         <g-collapse-item title="标题1" name="x">
             打开标题1
         </g-collapse-item>
         <g-collapse-item title="标题2" name="y">
            打开标题2
         </g-collapse-item>
         <g-collapse-item title="标题3" name="z">
            打开标题3
         </g-collapse-item>
      </g-collapse>
   </div>
</template>

<script>
   import GCollapse from '../../../src/collapse/collapse'
   import GCollapseItem from '../../../src/collapse/collapse-item'
   export default {
      name: "collapse-demos",
      components:{ GCollapse,GCollapseItem},
      data(){
         return{
            selected:['x','y']
         }
      }
   }
</script>

<style scoped lang="scss">
   .collapse-demos {
   }

</style>
```
> 需要通过 ```.sync``` 监听 ``` update:selected``` 事件

## API
### collapse props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| single      | 是否单选 | Boolean | true/false | false
| selected |  默认选中项 |  Array | - | - 

### collapse-item props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| title      | 面板显示的标题 | String | - | -
| name | 唯一标识符，```collapse-item``` 的索引  *必填  |  String | - | - 
