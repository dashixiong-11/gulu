<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
        <slot></slot>
        <div class="popover" v-if="popoverVisible">
                <g-cascader-items :items="source"></g-cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "GuluCascader",
        components: {
            gCascaderItems: CascaderItems
        },
        props: {
            source: {
                type: Array
            }
        },
        data(){
            return {
                popoverVisible:false
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";

    .cascader {
        .trigger {
            border: 1px solid red;
            height: 32px;
            width: 150px;
        }
        .popover{
            border: 1px solid red;
        }

    }

</style>