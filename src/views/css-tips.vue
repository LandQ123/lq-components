<!--  -->
<template>
    <div class="css-tips">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="文字下划线" name="1">
                <p class="words">
                    The only way to get rid of atemptation is to yield to it
                </p>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            activeNames: ['1']
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
.words {
    display: inline-block;
    font-size: 22px;
    background: linear-gradient(grey, grey) no-repeat;
    background-size: 100% 1px;
    background-position: 0 1.3em;
    text-shadow: 0.05em 0 #fff, -0.05em 0 #fff;
}
</style>