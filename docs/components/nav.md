# nav  <font size=3 color=gray> 导航菜单 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <nav-demos></nav-demos>
</ClientOnly>

## 代码

```html
<template>
   <div class="nav-demos">
      <g-nav :selected.sync="selected" :callback="callback">
         <g-nav-item name="x"> 主页</g-nav-item>
         <g-nav-sub name="y">
            <template slot="title">文档</template>
            <g-nav-item name="y1"> 安装</g-nav-item>
            <g-nav-item name="y2"> 说明</g-nav-item>
            <g-nav-sub name="y3">
               <template slot="title">组件</template>
               <g-nav-item name="y31"> 组件1</g-nav-item>
               <g-nav-item name="y32"> 组件2</g-nav-item>
            </g-nav-sub>
         </g-nav-sub>
         <g-nav-item name="z"> 交流</g-nav-item>
      </g-nav>

   </div>
</template>

<script>
   import GNav from '../../../src/nav/nav'
   import GNavItem from '../../../src/nav/nav-item'
   import GNavSub from '../../../src/nav/nav-sub'

   export default {
      name: "nav-demos",
      components: {GNav, GNavItem, GNavSub},
      data() {
         return {
            selected: 'y32'
         }
      },
      created() {

      },
      watch:{
         selected(name){
            console.log(name)
         }
      },
      methods:{
         callback(name){
            console.log(name)
         },
      }
   }
</script>

<style scoped lang="scss">
   .nav-demos {
   }

</style>
```

## API


### nav props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| selected |  选中的值 需要通过`.sync `监听更新事件 |  String | - | - 
| callback | 选中 `g-nav-item` 后触发的回调 |  Function | - | - 

> 选中 `item` 后的交互，可以通过 `watch` props`selected`绑定的变量来获取，或者直接传一个`callback`函数。

### nav-item props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| name |  唯一标识符 |  String | - | - 

### nav-sub props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| name |  唯一标识符 |  String | - | - 
> `nav-sub` 的标题需要同过一个 `slot` 为 `title` 的具名插槽显示。
