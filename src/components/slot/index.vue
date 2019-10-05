<!-- slot -->
<template>
    <div class="slot">
        <slot :user="user">{{ user.lastName }}</slot>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            user: {
                lastName: 'dddd',
                firstName: 'aaaa'
            }
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
</style>