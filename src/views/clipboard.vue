<!-- 复制粘贴 -->
<template>
    <div class="clipboard">
        <a
            href="https://clipboardjs.com/#example-text"
            target="_blank"
            rel="noopener noreferrer"
            >https://clipboardjs.com/#example-text</a
        ><br />
        <!-- Target -->
        <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" />
        <!-- Trigger -->
        <button class="btn" data-clipboard-target="#foo">
            复制
        </button>
        <div>
            <input
                id="cut"
                value="https://github.com/zenorocha/clipboard.js.git"
            />
            <!-- Trigger -->
            <button
                class="cut"
                data-clipboard-action="cut"
                data-clipboard-target="#cut"
            >
                剪切
            </button>
        </div>
    </div>
</template>

<script>
import ClipboardJS from 'clipboard';
export default {
    components: {},
    data() {
        return {};
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.copy();
        this.cut();
    },
    computed: {},
    //方法集合
    methods: {
        copy() {
            let _self = this;
            let clipboard = new ClipboardJS('.btn');
            clipboard.on('success', function(e) {
                console.info('Action:', e.action);
                console.info('Text:', e.text);
                console.info('Trigger:', e.trigger);
                _self.$message.success('复制成功！');
            });

            clipboard.on('error', function(e) {
                _self.$message.error('复制失败！');
            });
        },
        cut() {
            let _self = this;
            let clipboard = new ClipboardJS('.cut');
            clipboard.on('success', function(e) {
                console.info('Action:', e.action);
                console.info('Text:', e.text);
                console.info('Trigger:', e.trigger);
                _self.$message.success('剪切成功！');
            });

            clipboard.on('error', function(e) {
                _self.$message.success('剪切失败！');
            });
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>