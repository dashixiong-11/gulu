<template>
    <div class="collapseitem">
        <div class="title" @click="open = !open"> {{title}}</div>
        <div class="content" v-if="open"> <slot></slot> </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        data(){
            return{
                open:false

            }
        },
        props:{
            title:{
                type:String,
                required:true
            },
        }
    }
</script>

<style scoped lang="scss" scope>
    $grey: #ddd;
    $border-radius: 4px;
    .collapseitem{
        >.title{
            border:1px solid $grey;
            display: flex;
            align-items:center;
            padding:0 8px;
            min-height: 32px;
            margin-top:-1px;
            margin-left:-1px;
            margin-right:-1px;
        }
        &:first-child{
            >.title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            margin-bottom: -1px;
            >.title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }

        }
    }

</style>