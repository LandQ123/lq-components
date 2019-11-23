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
            <el-button type="primary" @click="getBlob">get-getBlob</el-button>
            <p>/api/shop/customer/query/xxxxx/2</p>
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
            <el-button type="primary" @click="postBodyPath"
                >post-body-path</el-button
            >
            <p>/api/shop/customer/body/xxx/yyy</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postBodyQuery"
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
                :http-request="postFromdataAndPath"
                :show-file-list="false"
            >
                <el-button type="primary">post-formData-and-path</el-button>
            </el-upload>
            <p>/api/shop/customer/formDataAndPath/xxx(id)/xxx(name)</p>
        </div>
        <div class="req-item">
            <el-upload
                action="#"
                :http-request="postFromdataAndQuery"
                :show-file-list="false"
            >
                <el-button type="primary">post-formData-and-query</el-button>
            </el-upload>
            <p>/api/shop/customer/formDataAndPath?id=xxx&name=xxx</p>
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
    mounted() {
        // let formData = new FormData();
        // formData.append('id', 1243);
        // axios
        //     .post('/json', formData)
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {});
        // // delete
        // axios
        //     .delete('/json', {
        //         // 放在url后
        //         params: {
        //             id: 123
        //         }
        //     })
        //     .then(function(response) {})
        //     .catch(function(error) {});
        // axios
        //     .delete('/json', {
        //         // 放在body里
        //         data: {
        //             id: 123
        //         },
        //         timeout: 5000 // 超时优先级最高
        //     })
        //     .then(function(response) {})
        //     .catch(function(error) {});
        // // 并发请求
        // axios.all([axios.get('/json1'), axios.get('/json2')]).then(
        //     axios.spread((res1, res2) => {
        //         console.log(res1, res2);
        //     })
        // );
        // // 实例参数
        // let axiosRe = axios.create({
        //     baseURL: '',
        //     timeout: 10000,
        //     url: '',
        //     method: '', // get,post,put,delete,patch
        //     headers: {
        //         token: ''
        //     },
        //     params: {}, // 拼接在url上
        //     data: {}
        // });
        // // 全局配置
        // axios.defaults.baseURL = '';
        // axios.defaults.timeout = 10000;
    },
    computed: {},
    //方法集合
    methods: {
        async get() {
            let res = await this.$api('get').get();
        },
        async getQuery() {
            let res = await this.$api('getQuery').get('params', {
                id: '123',
                name: 'liang'
            });
        },
        async getOrderPath() {
            // 按顺序拼接
            let res = await this.$api('getOrderPath').get('orderPath', {
                fileCode: 'xxxxxxx',
                page: 'x'
            });
        },
        async getLocationPath() {
            // 指定位置拼接
            let res = await this.$api('getLocationPath').get('locationPath', {
                fileCode: 'xxxxxxx',
                page: 'x'
            });
        },
        async getBlob() {
            // 没参数
            // let res = await this.$api('getBlob').get('getBlob');
            // 有参数
            let resPrams = await this.$api('getBlob').get('getBlob', {
                fileCode: 'xxxxxxx',
                page: 'x'
            });
        },
        // post
        async post() {
            let res = await this.$api('postBody').post();
        },
        async postBody() {
            // body contentType:json
            let res = await this.$api('postBody').post('body', {
                fileCode: 'xxxxxxx',
                page: 'x'
            });
        },
        async postBodyPath() {
            let res = await this.$api('postBodyPath').post(
                'bodyPath',
                {
                    fileCode: 'xxxxxxx',
                    page: 'x'
                },
                {
                    path1: 222,
                    path2: 333
                }
            );
        },
        async postBodyQuery() {
            let res = await this.$api('postBodyQuery').post(
                'bodyQuery',
                {
                    fileCode: 'xxxxxxx',
                    page: 'x'
                },
                {
                    query1: 222,
                    query2: 333
                }
            );
        },
        postFromdata(options) {
            let file = options.file;
            let formData = new FormData();
            formData.append('file', file);
            this.$api('postFormData').post('formData', formData);
        },
        postFromdataAndPath(options) {
            let file = options.file;
            let formData = new FormData();
            formData.append('file', file);
            this.$api('formDataAndPath').post('formDataAndPath', formData, {
                id: 123,
                name: 'liang'
            });
        },
        postFromdataAndQuery(options) {
            let file = options.file;
            let formData = new FormData();
            formData.append('file', file);
            this.$api('formDataAndQuery').post('formDataAndQuery', formData, {
                id: 123,
                name: 'liang'
            });
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.req-item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    p {
        margin-left: 20px;
    }
}
.method {
    font-size: 20px;
    color: red;
    margin-bottom: 20px;
}
</style>