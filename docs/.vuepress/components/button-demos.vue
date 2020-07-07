<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button icon="loading">加载中</g-button>
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