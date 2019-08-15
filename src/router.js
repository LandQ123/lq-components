import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";

import Debounce from "@/views/debounce";
import Throttle from "@/views/throttle";
import DFS from "@/views/DFS";
import FlatArr from "@/views/arrFlat";
import Ckeditor from "@/views/ckeditor/index";
import Tinymce from "@/views/tinymce/index";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "home",
    component: Home,
    redirect: '/debounce',
    children: [{
        path: '/debounce',
        name: 'debounce',
        component: Debounce,
        meta: {
          name: '防抖'
        }
      },
      {
        path: '/throttle',
        name: 'throttle',
        component: Throttle,
        meta: {
          name: '节流'
        }
      },
      {
        path: '/dfs',
        name: 'dfs',
        component: DFS,
        meta: {
          name: '深度遍历'
        }
      },
      {
        path: '/flatArr',
        name: 'FlatArr',
        component: FlatArr,
        meta: {
          name: '数组扁平化'
        }
      },
      {
        path: '/ckeditor',
        name: 'ckeditor',
        component: Ckeditor,
        meta: {
          name: 'ckeditor编辑器'
        }
      },
      {
        path: '/tinymce',
        name: 'tinymce',
        component: Tinymce,
        meta: {
          name: 'tinymce'
        }
      }
    ]
  }]
});