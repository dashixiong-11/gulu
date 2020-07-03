# toast  <font size=3 color=gray> 提示框 </font>
---

## 如何使用


### 演示  

<ClientOnly>
   <toast-demos></toast-demos>
</ClientOnly>


### 单独引入
> 首先需要在项目的入口文件全局引入 plugin ，然后使用plugin。
```js

   import Vue from 'vue'
   import plugin from "../../../src/plugin"
   Vue.use(plugin)

```

## 代码

```html
<template>
      <g-button @click="showToast"> 调用 </g-button>
</template>
<script >
   
   export default {
      components:{ GButton },
      mounted() {
      },
      methods:{
         showToast(){
            this.$toast('这是一条提示',{
               position:'bottom',
               closeButton:{
                  text:'关闭',
                  callback:()=>{
                     console.log('关闭')
                  }
               }
            })
         },
         },
      }
</script>
```

## API
### props
| 属性名         | 说明           | 类型   | 可选值 |
| ------------- |----------------|-------| ------|
| autoClose      |自动关闭时间，单位：s，取消自动关闭填：false | Number/Boolean | 数字/false 
| closeButton      |是否设置关闭按钮| Object | -
| position |  toast 弹出位置 |  String | top/bottom/middle

### closeButton

| 属性名         | 说明           | 类型   | 可选值 |
| ------------- |----------------|-------| ------|
| text      | 关闭按钮文本| String | -
| callback |  关闭按钮回调 |  Function | -

