<template>
    <div style="padding:100px;">
        <g-cascader :source="source" popover-height="200px" :selected="selected"></g-cascader>
    </div>
</template>

<script>
    import Cascader from './cascader'

    export default {
        components: { gCascader: Cascader },
        data() {
            return {
                selected:[],
                source: [
                    {
                        name: '浙江',
                        children: [{
                            name: '杭州',
                            children: [{name: '上城区'}, {name: '下城区'}, {name: '江干区'}]
                        }, {
                            name: '嘉兴',
                            children: [{name: '南湖区'}, {name: '秀洲区'}, {name: '嘉善区'}]
                        }, {name: '湖州'}]
                    },
                    {
                        name: '福建',
                        children: [{name: '厦门'}, {name: '福州', children: [{name: '鼓楼区'}, {name: '台江区'}, {name: '仓山区'}]}]
                    },
                    {
                        name: '安徽',
                        children: [{name: '合肥', children: [{name: '庐阳'}]}, {name: '芜湖'}]
                    }
                ]
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
        font-size: 14px;
    }
</style>