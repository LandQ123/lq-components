import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/home'),
        redirect: '/debounce',
        children: [{
                path: '/debounce',
                name: 'debounce',
                component: () =>
                    import ('@/views/debounce'),
                meta: {
                    name: '防抖',
                },
            },
            {
                path: '/throttle',
                name: 'throttle',
                component: () =>
                    import ('@/views/throttle'),
                meta: {
                    name: '节流',
                },
            },
            {
                path: '/dfs',
                name: 'dfs',
                component: () =>
                    import ('@/views/DFS'),
                meta: {
                    name: '深度遍历',
                },
            },
            {
                path: '/rewrite-apply',
                name: 'rewriteApply',
                component: () =>
                    import ('@/views/rewriteApply'),
                meta: {
                    name: '手写apply',
                },
            },
            {
                path: '/flatArr',
                name: 'FlatArr',
                component: () =>
                    import ('@/views/arrFlat'),
                meta: {
                    name: '数组扁平化',
                },
            },
            {
                path: '/arry',
                name: 'Arry',
                component: () =>
                    import ('@/views/arry'),
                meta: {
                    name: '数组方法',
                },
            },
            {
                path: '/ckeditor',
                name: 'ckeditor',
                component: () =>
                    import ('@/views/ckeditor/index'),
                meta: {
                    name: 'ckeditor编辑器',
                },
            },
            {
                path: '/axios',
                name: 'axios',
                component: () =>
                    import ('@/views/axios'),
                meta: {
                    name: 'axios测试',
                },
            },
            {
                path: '/axios-blob',
                name: 'axios处理文件流',
                component: () =>
                    import ('@/views/axios-responseType-blob'),
                meta: {
                    name: 'axios处理文件流',
                },
            },
            {
                path: '/arr-concat',
                name: '数组排序',
                component: () =>
                    import ('@/views/arrConcat'),
                meta: {
                    name: '数组排序',
                },
            },
            {
                path: '/js-zip',
                name: '下载压缩包',
                component: () =>
                    import ('@/views/jszip'),
                meta: {
                    name: '下载压缩包',
                },
            },
            {
                path: '/css-tips',
                name: 'css小技巧',
                component: () =>
                    import ('@/views/css-tips'),
                meta: {
                    name: 'css小技巧',
                },
            },
            {
                path: '/reset-message',
                name: '重写message',
                component: () =>
                    import ('@/views/resetMessage'),
                meta: {
                    name: '重写message',
                },
            },
            {
                path: '/jspdf',
                name: '生成pdf',
                component: () =>
                    import ('@/views/jspdf'),
                meta: {
                    name: '生成pdf',
                },
            },
            {
                path: '/clipboard',
                component: () =>
                    import ('@/views/clipboard'),
                meta: {
                    name: '复制粘贴',
                },
            },
            {
                path: '/autosize',
                component: () =>
                    import ('@/views/autosize'),
                meta: {
                    name: '高度自适应文字',
                },
            },
            {
                path: '/progressbar',
                component: () =>
                    import ('@/views/progressbar'),
                meta: {
                    name: '进度条',
                },
            },
            {
                path: '/qriously',
                component: () =>
                    import ('@/views/qriously'),
                meta: {
                    name: '二维码生成',
                },
            },
            {
                path: '/extend',
                component: () =>
                    import ('@/views/vue-extend'),
                meta: {
                    name: 'extend写message',
                },
            },
            {
                path: '/authorized',
                component: () =>
                    import ('@/views/authorized'),
                meta: {
                    name: '权限渲染',
                },
            },
            {
                path: '/keepAlive',
                component: () =>
                    import ('@/views/keepAlive/index'),
                meta: {
                    name: '缓存和滚动',
                    keepAlive: true,
                },
            },
            {
                path: '/keepAliveDetail',
                component: () =>
                    import ('@/views/keepAlive/detail'),
                name: 'detail',
                meta: {
                    desc: '详情页面',
                    parentRouter: '/keepAlive',
                },
            },
            {
                path: '/directive',
                component: () =>
                    import ('@/views/directive'),
                meta: {
                    name: '自定义指令',
                },
            },
            {
                path: '/excel',
                component: () =>
                    import ('@/views/excel'),
                meta: {
                    name: 'excel',
                },
            },
            {
                path: '/sortable',
                component: () =>
                    import ('@/views/sortable'),
                meta: {
                    name: 'sortable',
                },
            },
            {
                path: '/tinymce',
                name: 'tinymce',
                component: () =>
                    import ('@/views/tinymce/index'),
                meta: {
                    name: 'tinymce',
                },
            },
            {
                path: '/vue-draggable-resizable',
                component: () =>
                    import ('@/views/vue-draggable-resizable'),
                meta: {
                    name: 'vue-draggable-resizable',
                },
            },
            {
                path: '/leader-line',
                component: () =>
                    import ('@/views/leader-line'),
                meta: {
                    name: 'leader-line',
                },
            },
            {
                path: '/svg-line',
                component: () =>
                    import ('@/views/svg-line'),
                meta: {
                    name: 'svg-line',
                },
            },
        ],
    }, ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTo;
            }
            return { x: 0, y: to.meta.savedPosition || 0 };
        }
    },
});