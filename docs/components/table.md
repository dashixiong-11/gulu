# table  <font size=3 color=gray> 表格 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <table-demos></table-demos>
</ClientOnly>

## 代码

```html
<template>
   <div>
      <g-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
               :loading="loading" :height="500" expend-field="description" number-visible checkable>
         <g-table-column text="姓名" field="name" :width="100"></g-table-column>
         <g-table-column text="分数" field="score"></g-table-column>
      </g-table>
   </div>
</template>
<script>
   import GTable from '../../../src/table'
   import GTableColumn from '../../../src/table-column'

   export default {
      name: "demo",
      components: {GTable, GTableColumn},
      data() {
         return {
            currentPage: 1,
            selected: [],
            // columns: [
            //   {text: '姓名', field: 'name', width: 100}, // 1
            //   {text: '分数', field: 'score'},
            // ],
            orderBy: { // true - 开启排序，但是不确定asc desc
               score: 'desc'
            },
            loading: false,
            dataSource: [
               {id: 1, name: '方方', score: 100, description: 'xxxx xxxx'},
               {id: 2, name: '圆圆', score: 99, description: 'yyyy yyyy'},
               {id: 3, name: '张三', score: 100},
               {id: 4, name: '李四', score: 99},
               {id: 5, name: '超人', score: 100},
               {id: 6, name: '蝙蝠侠', score: 99},
               {id: 7, name: '蜘蛛侠', score: 100},
               {id: 8, name: '钢铁侠', score: 99},
               {id: 9, name: '方方', score: 100},
               {id: 10, name: '圆圆', score: 99},
               {id: 11, name: '张三', score: 100},
               {id: 12, name: '李四', score: 99},
               {id: 13, name: '超人', score: 100},
               {id: 14, name: '蝙蝠侠', score: 99},
               {id: 15, name: '蜘蛛侠', score: 100},
               {id: 16, name: '钢铁侠', score: 99},
               {id: 17, name: '蜘蛛侠', score: 100},
               {id: 18, name: '钢铁侠', score: 99},
               {id: 19, name: '方方', score: 100},
               {id: 20, name: '圆圆', score: 99},
            ]
         }
      },
      methods: {
         edit(item) {
            alert(`开始编辑${item.id}`)
         },
         view(item) {
            alert(`开始查看${item.id}`)
         },
         x() {
            this.loading = true
            setTimeout(() => {
               this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
               this.loading = false
            }, 3000)
         }
      }
   }
</script>
<style>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: white;
   }
</style>
<style scoped lang="scss">
</style>
```

## API


### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| height | table的高度，单位 `px` |  Number | - | - 
| orderBy | 排序规则 |  Function | - | - 
| dataSource | 数据源 |  Array | - | - 
| numberVisible | 是否显示索引 |  Boolean | true/false | false 
| bordered | 是否显示边框 |  Boolean | true/false | false 
| compact | 是否紧凑型显示 |  Boolean | true/false | false 
| striped | 是否显示单双数条纹 |  Boolean | true/false | true 
| loading | 排序时是否显示加载状态 |  Boolean | true/false | false 
| checkable | 是否显示选择框 |  Boolean | true/false | false 
| selectedItem | 选中项 |  Array | - | [] 

