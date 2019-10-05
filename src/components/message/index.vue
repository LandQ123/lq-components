<!-- message -->
<template>
    <transition name="fade">
        <span class="lq-message" :class="type" v-show="showMessage">
            <i :class="icon"></i>
            <div class="text">{{ message }}</div>
        </span>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            icon: 'el-icon-warning'
        };
    },
    props: {
        type: {
            type: String,
            default: 'info',
            validator: val =>
                ['info', 'success', 'error', 'warning'].includes(val)
        },
        message: {
            type: String,
            default: ''
        },
        showMessage: {
            type: Boolean,
            default: false
        }
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    computed: {},
    //方法集合
    methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.lq-message {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 4px;

    width: 300px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    i {
        margin-right: 5px;
    }
}
.info {
    border: solid 1px #ebeef5;
    background: #edf2fc;
}
.success {
    border: solid 1px #f0f9eb;
    background: #e1f3d8;
}
.warning {
    border: solid 1px #fdf6ec;
    background: #faecd8;
}
.error {
    border: solid 1px #fef0f0;
    background: #fde2e2;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>