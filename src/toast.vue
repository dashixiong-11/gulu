<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot></slot>
            </div>
            <span class="line" ref="line"></span>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 5,
                validator(value) {
                    return value === false || typeof value === 'number';
                }

            },
            /*            autoCloseDelay: {
                            type: Number,
                            default: 5
                        },*/
            closeButton: {
                type: Object,
                default() { //如果你的type是个对象，那么你的默认值就必须用函数return出来
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true}
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            /*            log(){
                            ...    假如你需要通过callback 调用组件中的方法
                        },*/
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback == 'function') {
                    this.closeButton.callback(this)  //把组件通过this传过去
                }
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-background: rgba(0, 0, 0, 0.75);
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }

    @keyframes slide-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down 1s;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up 1s
            }
        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);

            .toast {
                animation: slide-in 1s;
            }
        }
    }

    .toast {
        color: white;
        padding: 0 16px;
        display: flex;
        align-items: center;
        min-height: $toast-min-height;
        font-size: $font-size;
        line-height: 1.8;
        background: $toast-background;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

        .message {
            padding: 8px;
        }

        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin: 0 16px
        }

        .close {
            cursor: pointer;
            flex-shrink: 0;
        }
    }
</style>
