<template>
    <div class="cascaderItem" :style="{ height:height }">
        <div class="left">
            <div class="label" v-for="(item,index) in items" :key="index" @click="xxx(item)">{{item.name}}
                <span v-if="item.children"> <Icon name="right"></Icon> </span>
            </div>
        </div>
        <div class="right" v-if="rightItem">
            <cascader-items :items="rightItem" :height="height" :selected="selected"></cascader-items>
        </div>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: "cascaderItems",
        components:{ Icon },
        props:{
            items:{
                type:Array
            },
            height:{
                type:String
            },
            selected:{
                type:Array,
                default:() => []
            },
            level:{
                type:Number,
                default: 0
            }
        },
        data(){
            return {
                leftSelected:null
            }
        },
        methods:{
            xxx(e){
                this.leftSelected = e
            }
        },
        computed:{
            rightItem(){
                if(this.leftSelected && this.leftSelected.children){
                    return this.leftSelected.children
                }else{
                    return null
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascaderItem{
        display: flex;
        height: 100px;
        .label{
            display: flex;
            align-items: center;
            padding: .3em 1em;
            >span{
                margin-left: .5em;
                transform:scale(0.7);
            }
        }
        .left{
            padding:.3em 0;
            height: 100%;
        }
        .right{
            border-left: 1px solid $border-color-light;
            height: 100%;
        }
    }

</style>