# slides  <font size=3 color=gray> 无缝轮播 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <slides-demos></slides-demos>
</ClientOnly>

## 代码

```html
<template>
   <div class="slides-demos">
      <g-slides :selected.sync="selected">
         <g-slides-item name="x">
            <div class="item box1">1</div>
         </g-slides-item>
         <g-slides-item name="y">
            <div class="item box2">2</div>
         </g-slides-item>
         <g-slides-item name="z">
            <div class="item box3">3</div>
         </g-slides-item>
      </g-slides>
   </div>
   
</template>

<script>
   import GSlides from '../../../src/slides/slides'
   import GSlidesItem from '../../../src/slides/slides-item'
   export default {
      name: "slides-demos",
      components:{ GSlides,GSlidesItem },
      data(){
         return{
            selected:'y'
         }
      }
   }
</script>

<style scoped lang="scss">
   .slides-demos {
      .item{
         width: 100%;
         height: 200px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .box1{
         background: #b0ffec;
      }
      .box2{
         background: #ffbcd0;
      }
      .box3{
         background: #fffecf;
      }
   }

</style>
```

## API
### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值 |
| ------------- |----------------|-------| ------| ----- |
| selected      | 展示的项 `*必填` | String | `g-slides-item` 的 `name` 值 | -
| autoPlay |  是否自动播放 |  Boolean | true/false | true
| autoPlayDelay |  自动播放的间隔, 单位是 `ms` |  Number | - | 3000
| indicatorPosition |  指示器位置 |  String | inside/outside/none | inside

> `selected` 需要使用 `:selected.sync` 快捷方式监听内部的 `update:selected` 事件，用以更新展示面板。


### gSlidesItem props
| 属性名         | 说明           | 类型   | 可选值 | 默认值 |
| ------------- |----------------|-------| ------| ----- |
| name      | `g-slides-item` 唯一标识符 | String | - | -
