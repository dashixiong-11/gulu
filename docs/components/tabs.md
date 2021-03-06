# tabs  <font size=3 color=gray> 标签 </font>


## 如何使用  

### 演示

<br>
<ClientOnly>
   <tabs-demos></tabs-demos>
</ClientOnly>

## 代码

```html
<template>
   <div class="tabs-demos">
      <g-tabs selected="z" selectedColor="#1980FF">
         <g-tabs-head>
            <g-tabs-item name="z">
               标签1
            </g-tabs-item>
            <g-tabs-item name="x">
               标签2
            </g-tabs-item>
         </g-tabs-head>
         <g-tabs-body>
            <g-tabs-pane name="z">
               选中了标签1
            </g-tabs-pane>
            <g-tabs-pane name="x">
               选中了标签2
            </g-tabs-pane>
         </g-tabs-body>
      </g-tabs>
   </div>
</template>

<script>
   import GTabs from '../../../src/tabs/tabs'
   import GTabsBody from '../../../src/tabs/tabs-body'
   import GTabsHead from '../../../src/tabs/tabs-head'
   import GTabsItem from '../../../src/tabs/tabs-item'
   import GTabsPane from '../../../src/tabs/tabs-pane'
   export default {
      name: "tabs-demos",
      components:{ GTabs,GTabsBody,GTabsHead,GTabsItem,GTabsPane}
   }
</script>

<style scoped lang="scss">
   .tabs-demos {
   }

</style>
```

## API

### GTabs props

| 属性名         | 说明           | 类型   | 可选值 | 默认值 |
| ------------- |----------------|-------| ------| ------|
| selected      | 默认选中的标签，必填| String | - | -
| direction      |标签的布局方向| String | column/row | column
| selectedColor |  标签被选中的颜色 |  String | - | #1980FF

> ```g-tabs-item``` 的 ``` name ``` 值 ，需要与 ``` g-tabs-pane``` 的 ``` name  ``` 的值 对应