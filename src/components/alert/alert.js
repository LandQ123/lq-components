import Alert from "./alert.vue";
const ALERT = {
    install(Vue) {
        Vue.component('alert', Alert); // 一定先注册

        Vue.prototype.$alert = (text) => {
            let VueAlert = Vue.extend({
                data() {
                    return {
                        msg: '',
                        showAlert: false
                    }
                },
                render(h) {
                    let props = {
                        msg: this.msg,
                        showAlert: this.showAlert,
                    }
                    return h('alert', {
                        props
                    })
                }
            });
            let newAlert = new VueAlert();
            let vm = newAlert.$mount();
            let el = vm.$el;
            document.body.appendChild(el); // 添加到页面中
            vm.showAlert = true;
            vm.msg = text;
            let timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                vm.showAlert = false;
                vm.msg = '';
                document.body.removeChild(el)
            }, 1000)
        }
    }
}
export default ALERT;