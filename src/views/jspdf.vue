<!-- 生成pdf -->
<template>
    <div class="jspdf">
        <el-button type="primary" @click="getPdf">生成pdf</el-button>
        <a
            href="http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#addFont"
            target="_blank"
            rel="noopener noreferrer"
            >http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#addFont</a
        >
    </div>
</template>

<script>
import jsPDF from 'jspdf';
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
        getPdf() {
            var doc = new jsPDF();
            doc.text('Hello world!', 10, 30, {
                baseline: 'bottom',
                angle: 90
            });
            doc.save('two-by-four.pdf');
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>