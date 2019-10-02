<!-- 进度条 -->
<template>
    <div class="progressbar">
        <div id="circle"></div>
    </div>
</template>

<script>
import ProgressBar from 'progressbar.js';
export default {
    components: {},
    data() {
        return {};
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        let container = document.querySelector('#circle');
        var bar = new ProgressBar.Circle(container, {
            color: 'salmon',
            strokeWidth: 10, // 正好是从圆心开始画起，>50会越过圆心，<50画出的是圆环
            trailWidth: 0, // 也设置为50，就是一个未填充的圆形，而不是圆环。要么设置为0
            easing: 'easeInOut',
            duration: 4000,
            text: {
                style: {
                    color: '#333',
                    display: 'inline-block',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                },
                autoStyleContainer: false
            },
            // fill: 'salmon',   // 圆形内容区域填充色，当需要画圆环时，效果应该最好。
            from: { color: '#ab00ff' },
            to: { color: '#ab00ff' },
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                var value = Math.round(circle.value() * 100);
                circle.setText(value + '%');
            }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';

        // bar.animate(1.0, function() { // 自动
        //     console.log('动画执行结束');
        // });
        bar.set(0.6); // 手动设置进度
    },
    computed: {},
    //方法集合
    methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#circle {
    width: 200px;
    height: 200px;
    position: relative;
}
</style>