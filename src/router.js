import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "home",
    component: () => import('@/views/home'),
    redirect: '/debounce',
    children: [{
        path: '/debounce',
        name: 'debounce',
        component: () => import('@/views/debounce'),
        meta: {
          name: '防抖'
        }
      },
      {
        path: '/throttle',
        name: 'throttle',
        component: () => import('@/views/throttle'),
        meta: {
          name: '节流'
        }
      },
      {
        path: '/dfs',
        name: 'dfs',
        component: () => import('@/views/DFS'),
        meta: {
          name: '深度遍历'
        }
      },
      {
        path: '/flatArr',
        name: 'FlatArr',
        component: () => import('@/views/arrFlat'),
        meta: {
          name: '数组扁平化'
        }
      },
      {
        path: '/ckeditor',
        name: 'ckeditor',
        component: () => import('@/views/ckeditor/index'),
        meta: {
          name: 'ckeditor编辑器'
        }
      },
      {
        path: '/axios',
        name: 'axios',
        component: () => import('@/views/axios'),
        meta: {
          name: 'axios测试'
        }
      },
      {
        path: '/tinymce',
        name: 'tinymce',
        component: () => import('@/views/tinymce/index'),
        meta: {
          name: 'tinymce'
        }
      }
    ]
  }]
});