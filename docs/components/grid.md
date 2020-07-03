# grid  <font size=3 color=gray> 网格 </font>
---

**如何使用**

 > 默认把每一行分为24份，需要保证 span + offset = 24



<ClientOnly>
   <grid-demos></grid-demos>
</ClientOnly>

## API
### props
| 属性名         | 说明           | 类型   | 可选值 |
| ------------- |----------------|-------| ------|
| span      |用于row,表示:当前列的宽度占比 | Number | 1-24
| offset      |用于col，表示:列之间的间隔宽度占比| Number| 1-24
| align |  行内内容的对齐方式 |  String | center/lift/right
