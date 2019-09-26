<!--  -->
<template>
    <div class="css-tips">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="文字下划线-background" name="1">
                <span class="words">
                    The only way to get rid of atemptation is to yield to it
                </span>
                <br />
                <p class="dashed">
                    人生得意须尽欢，莫使金樽空对月
                </p>
            </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames">
            <el-collapse-item title="文字下划线-underline" name="2">
                <p class="underline">
                    The only way to get rid of atemptation is to yield to it
                </p>
            </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames">
            <el-collapse-item title="文字下划线-border-bottom" name="3">
                <p class="border-bottom">
                    The only way to get rid of atemptation is to yield to it
                </p>
            </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames">
            <el-collapse-item title="css美化复选框" name="4">
                <div class="checkbox-beautifaul">
                    <input type="checkbox" id="awesome" />
                    <label for="awesome">awesome</label>
                </div>
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
.dashed {
    display: inline-block;
    font-size: 22px;
    background: linear-gradient(90deg, grey 66%, transparent 0) repeat-x;
    background-size: 0.5em 1px;
    background-position: 0 1.5em;
    text-shadow: 0.05em 0 #fff, -0.05em 0 #fff;
}
.underline {
    font-size: 22px;
    text-decoration: underline;
}
.border-bottom {
    font-size: 22px;
    border-bottom: solid 1px #ccc;
    line-height: 0.9;
}
/**css美化复选框 */
.checkbox-beautifaul {
    display: flex;
    align-items: center;
    font-size: 20px;
    input {
        width: 1.2em;
        height: 1.2em;
    }
    label {
        margin-top: -0.2em;
        display: flex;
        align-items: center;
    }
    label::before {
        content: '\a0';
        display: inline-block;
        vertical-align: 0.2em;
        width: 1em;
        height: 1em;
        line-height: 1em;
        text-align: center;
        background: silver;
        border-radius: 0.2em;
        margin-right: 0.2em;
        cursor: pointer;
        font-weight: bolder;
        box-shadow: 2px 2px 2px #58a;
    }
    input[type='checkbox']:checked + label::before {
        content: '\2713';
        background: yellowgreen;
    }
    input[type='checkbox'] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
    }
}
</style>