<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button icon="download">下载</g-button>
<!--        <pre><code>{{content}}</code></pre>-->
    </div>
</template>

<script>
    import Button from '../../../src/button/button'
    import '../../../src/svg'

    export default {
        components: {gButton: Button},
        data(){
            return {
            }
        }
    }
</script>