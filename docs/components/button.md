# button  <font size=3 color=gray> 按钮 </font>

## 如何使用

### 演示

<ClientOnly>
   <button-demos></button-demos>
</ClientOnly>

### 代码
```html
<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button icon="download">下载</g-button>

        <g-button-group>
            <g-button> 按钮1</g-button>
            <g-button> 按钮2</g-button>
        </g-button-group>

<!--        <pre><code>{{content}}</code></pre>-->
    </div>
</template>

<script>
    import GButton from '../../../src/button/button'
    import GButtonGroup from '../../../src/button/button-group'
    import '../../../src/svg'

    export default {
        components: {GButton,GButtonGroup},
        data(){
            return {
            }
        }
    }
</script>
```
## API

### props
| 属性名         | 说明           | 类型   | 可选值 | 默认值
| ------------- |----------------|-------| ------| ----
| icon |  按钮的icon样式 |  String | - | - 

> `g-button-group` 为 `g-button` 的容器组件，可以使多个button组合使用。
