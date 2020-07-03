# popover  <font size=3 color=gray> 弹出层 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <popover-demos></popover-demos>
</ClientOnly>

## 代码

```html
<template>
   <div class="popover-demos">
      <g-popover>
         <template slot="content">
            popover的内容
         </template>
         <g-button> 按钮 </g-button>
      </g-popover>
   </div>
</template>

<script>
   import GPopover from '../../../src/popover'
   import GButton from '../../../src/button/button'
   export default {
      name: "popover-demos",
      components:{ GPopover,GButton }
   }
</script>
```

## API
### props
| 属性名         | 说明           | 类型   | 可选值 |
| ------------- |----------------|-------| ------|
| trigger      | 触发事件类型 | String | hover/click
| position |  popover 弹出位置 |  String | top/bottom/left/right

