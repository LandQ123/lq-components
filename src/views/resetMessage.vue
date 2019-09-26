<!--  -->
<template>
    <div class="reset-message">
        <el-button type="primary" @click="showMessage">showMessage</el-button>
        <el-button type="primary" @click="showMessage1">showMessage1</el-button>
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
        showMessage() {
            this.$message.warning('showMessage');
        },
        showMessage1() {
            this.$message.warning('showMessage1');
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>