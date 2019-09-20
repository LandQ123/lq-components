<!-- axios返回blob文件流，出错时处理 -->
<template>
    <div class="wrapper">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="axios处理文件流" name="1">
                <div>
                    axios设置responseType为blob接收文件流的时候，一般返回成功的时候，res.data便是blob文件流,
                    如果失败的话res.data则是正常的对象信息{code：xx,msg:"xxx"},所以只默认当做blob处理的话就
                    无法捕获错误状态，给到合适的提示，体验就不好。
                </div>
            </el-collapse-item>
            <el-collapse-item title="解决方案" name="2">
                <code>
                    let data = resData.data; console.log(resData.data); let
                    fileReader = new FileReader(); fileReader.onload =
                    function() { try { let jsonData = JSON.parse(this.result);
                    if (jsonData.code) { // 说明是普通对象数据，后台转换失败 //
                    to do something alert('not ok'); } } catch (err) { //
                    解析成对象失败，说明是正常的文件流 alert('ok'); } };
                    fileReader.readAsText(data);
                </code>
            </el-collapse-item>
        </el-collapse>
        <div class="upload-wrap">
            <el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :before-upload="beforeUpload"
                :http-request="resetFile"
            >
                <el-button type="primary">正常blob流</el-button>
            </el-upload>
            <el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :before-upload="beforeUploadError"
                :http-request="resetFileError"
            >
                <el-button type="primary">后台错误信息</el-button>
            </el-upload>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import axiosVue from './axios.vue';
import { dataURLtoBlob } from '@/utils';
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
    methods: {
        beforeUpload() {},
        resetFile(options) {
            let _self = this;
            let file = options.file;
            // 模拟返回值
            let fileReader = new FileReader();
            fileReader.onload = function() {
                let response = {
                    data: null
                };
                let blob = dataURLtoBlob(this.result);
                response.data = blob;
                _self.responseTodo(response);
            };
            fileReader.readAsDataURL(file);
        },
        resetFileError(options) {
            let res = {};
            let data = {
                code: 20001,
                msg: '文档转换异常'
            };
            let blob = new Blob([JSON.stringify(data, null, 2)], {
                type: 'application/json'
            });
            // console.log(blob);
            res.data = blob;
            this.responseTodo(res);
        },
        responseTodo(resData) {
            // responseType为 blob
            // axios
            //     .get({
            //         url: 'xxxxxx',
            //         method: 'get',
            //         responseType: 'blob'
            //     })
            //     .then(res => {
            //         console.log(res);
            //     });

            // 有可能下载失败，返回{code: '500'},但responseType: 'blob'会把data强制转为blob，导致下载undefined.excel
            // 解决：将已转为blob类型的data转回json格式，判断是否下载成功
            let data = resData.data;
            console.log(resData.data);
            let fileReader = new FileReader();
            fileReader.onload = function() {
                try {
                    let jsonData = JSON.parse(this.result);
                    if (jsonData.code) {
                        // 说明是普通对象数据，后台转换失败
                        // to do something
                        alert('not ok');
                    }
                } catch (err) {
                    // 解析成对象失败，说明是正常的文件流
                    alert('ok');
                }
            };
            fileReader.readAsText(data);
        },
        beforeUploadError() {}
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.upload-wrap {
    display: flex;
    margin-top: 20px;
    .avatar-uploader {
        margin-right: 20px;
    }
}
</style>