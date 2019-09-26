import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "@/assets/styles/common.scss";
import ElementUI from 'element-ui';
import {
  message
} from '@/utils/resetMessage';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");