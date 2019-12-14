<template>
    <button class='g-button' :class='{[`icon-${iconPosition}`]:true}' @click="$emit('click')">
        <g-icon v-if='icon && !loading' :name='icon'></g-icon>
        <g-icon class='loading icon' v-if='loading' name='jiazaizhong'></g-icon>
        <div class="content">
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
            loading: {
                type: Boolean,
                default: false
            },
            icon: {},
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
    @import "var";
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
        height: $button-height;
        vertical-align: middle;
        .icon { order: 1; margin-right: .1em; }
        .content {order: 2;}
        &:hover {border-color: $border-color-hover;}
        &:active {background-color: $button-active-bg;}
        &:focus {outline: none;}
        .loading {animation: spin 1s infinite linear;}
    }
    .icon-right {
        .icon {order: 2;margin-left: .1em;margin-right: 0;}
        .content {order: 1;}
    }
</style>
