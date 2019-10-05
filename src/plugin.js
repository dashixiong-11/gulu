import Toast from './toast'

let currentToast
function createToast({Vue,message,propsData,onClose}){ //生成toast组件 放入到 body中
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData }) //可以在 new Constructor （构造toast实例）的时候传入  data，name，props等选项
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose )
    document.body.appendChild(toast.$el)
    return toast
}
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) { //在使用页面 通过 this.$toast({...}) 往toast中传参
            if(currentToast){
                currentToast.close()
            }
            currentToast =  createToast({ //把 拿到的回调放入到 构造函数中
                Vue,
                message,
                propsData:toastOptions,
                onClose : () => { currentToast = null }
            })
        }
    }
}
