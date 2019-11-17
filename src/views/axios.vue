<!-- axios测试 -->
<template>
    <div class="">
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
            <el-button type="primary" @click="postBody">post-body</el-button>
            <p>/api/shop/customer/body</p>
        </div>
        <div class="req-item">
            <el-button type="primary" @click="postFromdata"
                >post-formData</el-button
            >
            <p>/api/shop/customer/formData</p>
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
        async getQuery() {
            let res = await this.$api('getQuery').get('params', {
                params: {
                    id: '123',
                    name: 'liang'
                }
            });
        },
        async getOrderPath() {
            // 按顺序拼接
            let res = await this.$api('getOrderPath').get('orderPath', {
                orderPath: {
                    fileCode: 'xxxxxxx',
                    page: 'x'
                }
            });
        },
        async getLocationPath() {
            // 指定位置拼接
            let res = await this.$api('getLocationPath').get('locationPath', {
                locationPath: {
                    fileCode: 'xxxxxxx',
                    page: 'x'
                }
            });
        },
        // post
        async postBody() {
            // body contentType:json
            let res = await this.$api('postBody').post('body', {
                body: {
                    fileCode: 'xxxxxxx',
                    page: 'x'
                }
            });
        },
        postFromdata() {
            // body contentType:Fromdata
            let formData = new FormData();
            formData.append('name', 'liang');
            // console.log(fromdata);
            this.$api('postFormData').post('formData', {
                formData: formData
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
</style>