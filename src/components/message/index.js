import Message from './index.vue';
const MESSAGE = {
    duration: 3000,
    animationTime: 300,
    install(Vue) {
        if (typeof window !== 'undefined' && window.vue) {
            Vue = window.vue
        }
        Vue.component('Message', Message); // 注册组件
        // 挂载组件
        function msg(type = 'info', message, callBack) {
            let msg = '';
            let duration = MESSAGE.duration;
            if (typeof message === 'string') {
                msg = message;
            } else if (message instanceof Object) {
                msg = message.message;
                if (message.duration) {
                    duration = message.duration
                }
            }
            let VueMessage = Vue.extend({
                data() {
                    return {
                        showMessage: false
                    }
                },
                render(h) {
                    let props = {
                        type,
                        message: msg,
                        showMessage: this.showMessage
                    }
                    return h('Message', {
                        props
                    })
                }
            })
            let newMessage = new VueMessage()
            let vm = newMessage.$mount();
            let el = vm.$el;
            document.body.appendChild(el);
            vm.showMessage = true;
            let t1 = setTimeout(() => {
                clearTimeout(t1)
                vm.showMessage = false;
                let t2 = setTimeout(() => {
                    clearTimeout(t2)
                    document.body.removeChild(el);
                    newMessage.$destroy()
                    vm = null; // 设置为null，好让js垃圾回收算法回收，释放内存
                    callBack && (typeof callBack === 'function') && callBack();
                }, MESSAGE.durationTime);
            }, duration)
        }
        Vue.prototype.$diyMessage = {
            info(message, callBack) {
                if (!message) return;
                msg('info', message, callBack)
            },
            success(message, callBack) {
                if (!message) return;
                msg('success', message, callBack)
            },
            warning(message, callBack) {
                if (!message) return;
                msg('warning', message, callBack)
            },
            error(message, callBack) {
                if (!message) return;
                msg('error', message, callBack)
            }
        }
    }
}
export default MESSAGE;