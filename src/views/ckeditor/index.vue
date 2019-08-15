<!--  -->
<template>
    <div class="ckeditor">
        <el-button type="primary" @click="insertText">插入文本</el-button>
        <div class="editor-wrap">
            <div id="toolbar-container"></div>
            <!-- 编辑器容器 -->
            <div class="inner-wrap">
                <div id="editor" class="editor">
                    <!-- <p>This is the initial editor content.</p> -->
                    <h2>The three greatest things you learn from traveling</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'; //中文包
export default {
    components: {},
    data() {
        return {
            editor: null
        };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.initCKEditor();
    },
    computed: {},
    //方法集合
    methods: {
        initCKEditor() {
            class UploadAdapter {
                constructor(loader) {
                    this.loader = loader;
                }
                upload() {
                    //重置上传路径
                    return new Promise((resolve, reject) => {
                        var fileName = 'goods' + this.loader.file.lastModified;
                        client()
                            .put(fileName, this.loader.file)
                            .then(result => {
                                resolve({
                                    default: result.url
                                });
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    });
                }
                abort() {}
            }
            //初始化编辑器
            CKEditor.create(document.querySelector('#editor'), {
                removePlugins: ['MediaEmbed'], //除去视频按钮
                language: 'zh-cn', // 中文
                ckfinder: {
                    uploaded: 1,
                    url: '/'
                    // 后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
                }
            })
                .then(editor => {
                    const toolbarContainer = document.querySelector(
                        '#toolbar-container'
                    );
                    toolbarContainer.appendChild(
                        editor.ui.view.toolbar.element
                    );
                    // 加载了适配器
                    editor.plugins.get(
                        'FileRepository'
                    ).createUploadAdapter = loader => {
                        return new UploadAdapter(loader);
                    };
                    this.editor = editor; // 将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
                    console.log(editor.commands);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        insertText() {
            // var oEditor = this.editor.instances.editor1;
            // console.error(oEditor);
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.editor-wrap {
    width: 960px;
    position: relative;
    margin: 0 auto;
    border: 1px solid #dfe4e6;
    border-bottom-color: #cdd0d2;
    border-right-color: #cdd0d2;
    border-radius: 2px;
    max-height: 700px;
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    .inner-wrap {
        background: #eee;
        overflow-y: scroll;
        padding: 10px 20px;
        .editor {
            position: relative;
            background: #fff;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            width: 555px;
            height: 802px;
            padding: 20px 20px;
            margin: 0 auto;
            box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.05);
        }
    }
}
</style>