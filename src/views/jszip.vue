<!-- jszip -->
<template>
    <div class="jszip">
        <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :http-request="resetFile"
        >
            <el-button type="primary">base64ToBlob=>downloadZip</el-button>
        </el-upload>
    </div>
</template>

<script>
import { dataURLtoBlob } from '@/utils';
import jsZip from 'jszip';
import { saveAs } from 'file-saver';
export default {
    components: {},
    data() {
        return {};
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // console.log(jsZip);
    },
    computed: {},
    //方法集合
    methods: {
        resetFile(options) {
            let _self = this;
            let file = options.file;
            console.log(file);
            // 模拟返回值
            let fileReader = new FileReader();
            fileReader.onload = function() {
                // let blob = dataURLtoBlob(this.result);
                let useBase64 = this.result.split('base64,')[1];
                _self.saveAsZip(useBase64);
            };
            fileReader.readAsDataURL(file);
        },
        saveAsZip(base64) {
            let zip = new jsZip();
            // zip.file('hello.txt', 'hello'); // 添加一个文件
            var myFile = zip.folder(); // 新建一个myFile文件夹
            myFile.file('办理毕业生户籍迁入操作指引.doc', base64, {
                base64: true
            }); // 文件名称

            zip.generateAsync({ type: 'blob' }).then(function(content) {
                // see FileSaver.js
                saveAs(content, '办理毕业生户籍迁入操作指引.zip');
            });
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>