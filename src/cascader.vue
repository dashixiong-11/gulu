<template>
    <div class="cascader">
        <div>
            {{selected}}
        </div>
        <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
        <slot></slot>
        <div class="popover-wrapper" v-if="popoverVisible">
                <g-cascader-items :items="source"  class="popover" :height="popoverHeight" @update:selected="upDateSelected" :selected="selected"></g-cascader-items>
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
            },
            popoverHeight:{
                type:String
            },
            selected:{
                type:Array,
                default:() => []
            }
        },
        methods:{
            upDateSelected(newSelected){
                this.$emit('updata:selected',newSelected)
            }
        },
        data(){
            return {
                popoverVisible:false,
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader {
        position: relative;
        .trigger {
            border: 1px solid black;
            height: 32px;
            width: 150px;
        }
        .popover-wrapper{
            @extend .box-shadow;
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
        }

    }

</style>