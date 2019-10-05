<!-- 二维码生成 -->
<template>
    <div class="qr">
        <div class="qriously">
            <div>1、qriously</div>
            <div>npm install vue-qriously --save</div>
            <qriously :value="url" :size="size"></qriously>
        </div>
        <div class="qr-code">
            <div>2、qr-code</div>
            <div>npm install @chenfengyuan/vue-qrcode vue</div>
            <vue-qrcode :value="url" :options="{ width: 100 }"></vue-qrcode>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: 'http://baidu.com',
            size: 100
        };
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
</style>