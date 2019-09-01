<!-- axios测试 -->
<template>
    <div class=""></div>
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
        let formData = new FormData();
        formData.append('id', 1243);
        axios
            .post('/json', formData)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {});
        // delete
        axios
            .delete('/json', {
                // 放在url后
                params: {
                    id: 123
                }
            })
            .then(function(response) {})
            .catch(function(error) {});
        axios
            .delete('/json', {
                // 放在body里
                data: {
                    id: 123
                },
                timeout: 5000 // 超时优先级最高
            })
            .then(function(response) {})
            .catch(function(error) {});
        // 并发请求
        axios.all([axios.get('/json1'), axios.get('/json2')]).then(
            axios.spread((res1, res2) => {
                console.log(res1, res2);
            })
        );
        // 实例参数
        let axiosRe = axios.create({
            baseURL: '',
            timeout: 10000,
            url: '',
            method: '', // get,post,put,delete,patch
            headers: {
                token: ''
            },
            params: {}, // 拼接在url上
            data: {}
        });
        // 全局配置
        axios.defaults.baseURL = '';
        axios.defaults.timeout = 10000;
    },
    computed: {},
    //方法集合
    methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>