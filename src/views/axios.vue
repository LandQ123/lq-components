<!-- axios测试 -->

<template>
    <div class="">
        <div class="method">get</div>
        <div class="req-item">
            <el-button type="primary" @click="get">get</el-button>
            <p>/api/shop/customer/query</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="getQuery">get-query</el-button>
            <p>/api/shop/customer/query?id=123&name=liang</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="getOrderPath"
                >get-order-path</el-button
            >
            <p>/api/shop/customer/query/xxxxxxx/2</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="getLocationPath"
                >get-location-path</el-button
            >
            <p>/api/shop/customer/query/fileCode(xxxxx)/page(2)</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="getBlob">get-blob</el-button>
            <p>/api/shop/customer/query</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="getPathBlob">get-path-blob</el-button>
            <p>/api/shop/customer/query/xxxxx/2</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="getQueryBlob">get-query-blob</el-button>
            <p>/api/shop/customer/query?a=xxxxx&b=2</p>
        </div>
        <div class="method">post</div>
        <!-- post -->
        <div class="req-item">
            <el-button type="primary" @click="post">post</el-button>
            <p>/api/shop/customer/post</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postBody">post-body</el-button>
            <p>/api/shop/customer/body</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postPath"
                >post-path</el-button
            >
            <p>/api/shop/customer/body/xxx/yyy</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postQuery"
                >post-body-query</el-button
            >
            <p>/api/shop/customer/body?a=xxx&b=yyy</p>
        </div>
        <div class="req-item">
            <el-upload
                action="#"
                :http-request="postFromdata"
                :show-file-list="false"
            >
                <el-button type="primary">post-formData</el-button>
            </el-upload>
            <p>/api/shop/customer/formData</p>
        </div>
        <div class="req-item">
            <el-upload
                action="#"
                :http-request="postFromdataPath"
                :show-file-list="false"
            >
                <el-button type="primary">post-formData-path</el-button>
            </el-upload>
            <p>/api/shop/customer/formDataPath/xxx(id)/xxx(name)</p>
        </div>
        <div class="req-item">
            <el-upload
                action="#"
                :http-request="postFromdataQuery"
                :show-file-list="false"
            >
                <el-button type="primary">post-formData-query</el-button>
            </el-upload>
            <p>/api/shop/customer/formDataQuery?id=xxx&name=xxx</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postBlob">post-blob</el-button>
            <p>/api/shop/customer/postBlob</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postBlobPath"
                >post-blob-path</el-button
            >
            <p>/api/shop/customer/postBlob/xxx/xx</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postBlobQuery"
                >post-blob-query</el-button
            >
            <p>/api/shop/customer/postBlob?a=xx&b=xxx</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
        async get() {
            let res = await this.$api('get').get();
        },
        async getQuery() {
            let res = await this.$api('getNormal').get('normal', {
                id: '123',
                name: 'liang',
            });
        },
        async getOrderPath() {
            // 按顺序拼接
            let res = await this.$api('getOrderPath').get('orderPath', {
                fileCode: 'xxxxxxx',
                page: 'x',
            });
        },
        async getLocationPath() {
            // 指定位置拼接
            let res = await this.$api('getLocationPath').get('locationPath', {
                fileCode: '122232323232',
                page: '2',
            });
        },
        async getBlob() {
            // 没有参数
            let resPrams = await this.$api('getBlob').get('blob');
        },
        async getPathBlob() {
            // 有参数
            let resPrams = await this.$api('getPathBlob').get('pathBlob', {
                fileCode: 'xxxxxxx',
                page: 'x',
            });
        },
        async getQueryBlob() {
            // 有参数
            let resPrams = await this.$api('getQueryBlob').get('queryBlob', {
                fileCode: 'xxxxxxx',
                page: 'x',
            });
        },
        // post
        async post() {
            let res = await this.$api('postBody').post();
        },
        async postBody() {
            // body contentType:json
            let res = await this.$api('postBody').post('postNormal', {
                fileCode: 'xxxxxxx',
                page: 'x',
            });
        },
        async postPath() {
            let res = await this.$api('postPath').post(
                'postPath',
                {
                    fileCode: 'xxxxxxx',
                    page: 'x',
                },
                {
                    path1: 222,
                    path2: 333,
                },
            );
        },
        async postQuery() {
            let res = await this.$api('postQuery').post(
                'postQuery',
                {
                    fileCode: 'xxxxxxx',
                    page: 'x',
                },
                {
                    query1: 222,
                    query2: 333,
                },
            );
        },
        // 提交formData
        postFromdata(options) {
            let file = options.file;
            let formData = new FormData();
            formData.append('file', file);
            this.$api('postFormData').post('formData', formData);
        },

        postFromdataPath(options) {
            let file = options.file;
            let formData = new FormData();
            formData.append('file', file);
            this.$api('postFormDataPath').post('postFormDataPath', formData, {
                id: 123,
                name: 'liang',
            });
        },
        postFromdataQuery(options) {
            let file = options.file;
            let formData = new FormData();
            formData.append('file', file);
            this.$api('postFormDataQuery').post('postFormDataQuery', formData, {
                id: 123,
                name: 'liang',
            });
        },
        // 返回值为blob类型
        postBlob() {
            this.$api('postBlob').post('postBlob',{ // data为可选
              a:111,
              b:222
            });
        },
        postBlobPath() {
            this.$api('postBlobPath').post( // data为可选
                'postBlobPath',
                {
                    fileCode: 'xxxxxxx',
                    page: 'x',
                },
                {
                    path1: 222,
                    path2: 333,
                },
            );
        },
        postBlobQuery() {
            this.$api('postBlobQuery').post( // data为可选
                'postBlobQuery',
                {
                    fileCode: 'xxxxxxx',
                    page: 'x',
                },
                {
                    query1: 222,
                    query2: 333,
                },
            );
        },
    },
};
</script>
<style lang="scss" scoped>
.req-item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .req-item p {
        margin-left: 20px;
    }
}
.method {
    font-size: 20px;
    color: red;
    margin-bottom: 20px;
}
</style>
