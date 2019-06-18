<template>
    <div class="toast">
        <slot></slot>
        <span class="line"></span>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() { //如果你的type是个对象，那么你的默认值就必须用函数return出来
                    return {
                        text: '关闭',
                        callback: (toast) => {
                            toast.callback()
                        }
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                this.closeButton.callback()
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-background: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        color: white;
        padding: 0 16px;
        display: flex;
        align-items: center;
        top: 0;
        left: 50%;
        height: $toast-height;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        background: $toast-background;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5)
    }
    .line{
        height:100%;
        border-left: 1px solid #666;
        margin:0 16px
    }
</style>