<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            span:[Number,String]
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
    }

</style>
