<template>
    <div class="col" :class="colClass" :style="colStyle" >
        <div style="border:1px solid green;height:100px " >
            <slot></slot>
        </div>
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
                gutter:0,
            }
        },
        computed:{
            colStyle(){
                    return{
                        paddingLeft:this.gutter / 2 + 'px',
                        paddingRight:this.gutter / 2 + 'px'
                    }
            },
            colClass(){
                let {span,offset} = this
                return [ span && `col-${span}`,offset && `offset-${offset}` ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
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
