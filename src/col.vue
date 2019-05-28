<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',marginRight:gutter/2+'px'}" >
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            span:[Number,String],
            offset:[Number,String],
        },
        data(){
            return{
                gutter:0
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        border: 1px solid red;
        height: 100px;
        background: blanchedalmond;
        width:100%;
        $class:col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width:($n/24)*100%;
            }
        }
        $class:offset-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                margin-left:($n/24)*100%;
            }
        }
    }

</style>
