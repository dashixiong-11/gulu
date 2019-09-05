<template>
    <div class="cascaderItem">
        <div class="left">
            <div class="label" v-for="item in items" @click="xxx(item)">{{item.name}}</div>
        </div>
        <div class="right" v-if="rightItem">
            <cascader-items :items="rightItem"></cascader-items>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cascaderItems",
        props:{
            items:{
                type:Array
            }
        },
        data(){
            return {
                leftSelected:null
            }
        },
        methods:{
            xxx(e){
                this.leftSelected =  e
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
    .cascaderItem{
        display: flex;
        .left{
            border:1px solid red;
        }
    }

</style>