<!-- directive -->
<template>
    <div class="directive">
        <el-button v-click-test>hello</el-button>
    </div>
</template>

<script>
import clickTest from '@/components/directives';
export default {
    components: {},
    directives: {
        clickTest
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
</style>