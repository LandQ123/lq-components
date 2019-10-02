<!-- 高度紫石英文字 -->
<template>
    <div class="autosize">
        <div style="width:300px">
            <textarea
                name="textarea"
                class="textarea"
                cols="30"
                rows="2"
            ></textarea>
            <!-- <el-input v-model="value" type="textarea"></el-input> -->
        </div>
    </div>
</template>

<script>
import autosize from 'autosize';
export default {
    components: {},
    data() {
        return {
            value: ''
        };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        autosize(document.querySelector('textarea'));
    },
    computed: {},
    //方法集合
    methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>