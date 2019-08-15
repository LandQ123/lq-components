<!-- tinymce -->
<template>
    <div class="tinymce">
        <el-button type="primary" size="medium" @click="insert">插入</el-button>
        <el-button type="primary" size="medium" @click="setContent"
            >设置文本</el-button
        >
        <el-button type="primary" size="medium" @click="getContent"
            >获取文本</el-button
        >
        <div class="wrap">
            <editor
                id="tinymce"
                @onClick="handleChange"
                v-model="content"
                :init="initEditor"
            ></editor>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
import Editor from '@tinymce/tinymce-vue';
import '@/assets/tinymce/langs/zh_CN.js';
import '@/assets/tinymce/skins/ui/oxide/skin.min.css';
import '@/assets/tinymce/skins/ui/oxide/content.min.css';
import '@/assets/tinymce/skins/content/default/content.css';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/pagebreak';
export default {
    components: {
        Editor
    },
    data() {
        return {
            content: '',
            initEditor: {
                language: 'zh_CN',
                height: 1014,
                toolbar_items_size: 'small',
                toolbar:
                    'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat insertdatetime pagebreak',
                plugins:
                    'link lists image code table colorpicker textcolor wordcount contextmenu insertdatetime pagebreak',
                branding: false,
                pagebreak_split_block: true
            }
        };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        tinymce.init({});
    },
    computed: {},
    //方法集合
    methods: {
        insert() {
            console.log(tinymce);
            tinymce.execCommand(
                'mceInsertContent',
                true,
                '<strong><span style="text-decoration: underline;" data-mce-style="text-decoration: underline;"> 文本1 </span></strong>'
            );
        },
        setContent() {
            this.content = '<p>流口水江东父老可视对讲</p>';
        },
        getContent() {
            console.log(this.content);
        },
        handleChange() {
            console.log(this.content);
        }
    }
};
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.tinymce {
    position: relative;
    height: 100%;
}
.wrap {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
}
</style>