<template>
    <div class="throttle">
        <p>
            高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
        </p>
        <p>思路：每次触发事件时都判断当前是否有等待执行的延时函数</p>
        <p>窗口尺寸变化</p>
        <p>{{ num }}</p>
    </div>
</template>

<script>
export default {
    name: 'throttle',
    data() {
        return {
            num: 0,
            canGo: true
        };
    },
    mounted() {
        this.resizeEvent();
    },
    methods: {
        resizeEvent() {
            let _self = this;
            window.onresize = function() {
                _self.throttleFn();
            };
        },
        throttleFn(e) {
            if (!this.canGo) return;
            let _self = this;
            this.canGo = false;
            setTimeout(() => {
                _self.num++;
                _self.canGo = true;
            }, 1000);
        }
    }
};
</script>
<style lang="scss" scoped>
.throttle {
    p {
        margin-bottom: 20px;
    }
    .ipt-wrap {
        width: 200px;
    }
}
</style>
