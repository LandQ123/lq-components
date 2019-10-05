<!-- alert -->
<template>
    <transition name="fade">
        <div class="alert" v-show="showAlert">
            <p class="msg">{{ msg }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    components: {},
    props: {
        msg: {
            type: String,
            default: ''
        },
        showAlert: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
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
@keyframes fade-in {
    0% {
        transform: translateX(0);
        opacity: 0;
    }
    to {
        transform: translateX(100%);
        opacity: 1;
    }
}
@keyframes fade-out {
    0% {
        transform: translateX(100%);
        opacity: 1;
    }
    to {
        transform: translateX(0);
        opacity: 0;
    }
}
// .fade-enter,
// .fade-leave-to {
//     opacity: 0;
//     top: -40px;
// }
.fade-enter-active {
    transition: fade-in all 0.5s;
}
.fade-leave-active {
    transition: fade-out all 0.5s;
}
// .fade-enter-to,
// .fade-leave {
//     opacity: 1;
//     top: 40px;
// }
.alert {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    // transition: all 0.5s;
    .msg {
        text-align: center;
        font-size: 20px;
        padding: 5px 10px;
        color: #fff;
        background: rgb(67, 137, 241);
        border-radius: 5px;
    }
}
</style>