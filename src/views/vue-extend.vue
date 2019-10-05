<!-- extend写message -->
<template>
    <div class="extentd">
        <el-button type="primary" @click="message('info')">info</el-button>
        <el-button type="primary" @click="message('success')"
            >success</el-button
        >
        <el-button type="primary" @click="message('warning')"
            >warning</el-button
        >
        <el-button type="primary" @click="message('error')">error</el-button>
        <div style="margin-top:30px;">
            <el-button type="primary" @click="alert">alert</el-button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    computed: {},
    //方法集合
    methods: {
        message(type) {
            this.$diyMessage[type]('hello');
        },
        alert() {
            this.$alert('hahahah');
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>