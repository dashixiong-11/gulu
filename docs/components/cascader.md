# cascader  <font size=3 color=gray> 级联选择器 </font>
---

## 如何使用  

### 演示

<br>
<ClientOnly>
   <cascader-demos></cascader-demos>
</ClientOnly>

## 代码

```html

<template>
   <div class="cascader-demos">
      <g-cascader :source.sync="source" :load-data="loadData" :selected.sync="selected" popover-height="300px"></g-cascader>
   </div>
</template>

<script>
   import GCascader from '../../../src/cascader/cascader'
   import db from '../../../src/db'


   function ajax (parentId = 0) {
      return new Promise((success, fail) => {
         setTimeout(() => {
            let result = db.filter((item) => item.parent_id == parentId)
            result.forEach(node => {
               if (db.filter(item => item.parent_id === node.id).length > 0) {
                  node.isLeaf = false
               }else{
                  node.isLeaf = true
               }
            })
            success(result)
         }, 1000)
      })
   }

   export default {
      name: "cascader-demos",
      components:{ GCascader },
      data(){
         return {
            source:[],
            selected:[]
         }
      },
      created() {
         ajax(0).then(result => {
            console.log(result)
            this.source = result
         })
      },
      methods:{
         loadData ({id}, updateSource) {
            console.log(id,updateSource)
            ajax(id).then(result => {
               console.log(result)
               updateSource(result) // 回调:把别人传给我的函数调用一下
            })
         }
      }
   }
</script>

<style scoped lang="scss">
   .cascader-demos {
   }

</style>
```

## API


### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| source      | 数据源 | Array | - | -
| selected |  选中的值 需要通过`.sync `监听更新事件 |  String | - | - 
| loadData | 根据选中的值跟新子节点的回调 |  Function | - | - 
| popoverHeight | 弹出层高度 |  String | - | - 

### source 

```json
例:
[
    {
      "name":"北京",
      "id": "1",
      "parent_id": "0",
      "idLeaf": false
    },
    {
      "name":"海淀",
      "id": "11",
      "parent_id": "1",
      "idLeaf": true
    }
]
```
> 来自同一个父节点的子节点的 ```parent_id``` 都是必须这个父节点的 ```id```。 `isLeaf` 表示是否是最后一层节点。 

### loadData
```js
loadData ({id}, updateSource) {

//  根据id 请求服务端，拿到子节点数据
            ajax(id).then(result => {
               console.log(result)
               updateSource(result) 
            })
         }
```
> `id`为组件内传出的选中项的id，`updateSource`为组件内更新 source 的回调，需要传入所选中的父节点下子节点的数据并且调用。
