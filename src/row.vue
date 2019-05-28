<template>
    <div class="row" :style="{marginR:0 -gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluRow',
        props:{
            gutter:[Number,String]
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
/*        justify-content: space-between*/
    }
</style>