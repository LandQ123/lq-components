import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "@/assets/styles/common.scss";
import '@/service/rest-api';
import ElementUI from 'element-ui';
import {
  message
} from '@/utils/resetMessage';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
import VueQriously from 'vue-qriously'
import VueQrcode from '@chenfengyuan/vue-qrcode';
import diyMessage from '@/components/message'; // extentd写message
import diyAlert from '@/components/alert/alert'; // extentd写alert
import Authorized from '@/components/authorized'; // 权限

Vue.config.productionTip = false;
Vue.use(ElementUI).use(VueQriously).use(diyMessage).use(diyAlert);
Vue.component('vue-qrcode', VueQrcode);
Vue.component('Authorized', Authorized);
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");