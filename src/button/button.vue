<template>
    <button class='g-button' :class='{[`icon-${iconPosition}`]:true}' @click="$emit('click')">
        <g-icon v-if="icon" :class="{loading: icon === 'loading',icon:icon ==='loading'}"  :name='icon'></g-icon>
        <div class="contents">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from '../icon'

    export default {
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {
                type:String
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return (value == 'left' || value == 'right')
                }
            }
        }

    }

</script>

<style lang='scss' scoped>
    @import "../../styles/var";
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: $button-height;
        padding: 0 1em;
        font: inherit;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        font-size: $font-size;
        vertical-align: middle;
        .icon { order: 1; margin-right: .1em; }
        .contents {order: 2;}
        &:hover {border-color: $border-color-hover;}
        &:active {background-color: $button-active-bg;}
        &:focus {outline: none;}
        .loading {
            @include spin;
        }
    }
    .icon-right {
        .icon {order: 2;margin-left: .1em;margin-right: 0;}
        .contents {order: 1;}
    }
</style>
