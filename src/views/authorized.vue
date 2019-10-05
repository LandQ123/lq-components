<!-- authorized -->
<template>
    <div class="authorized">
        <Authorized authName="admin">
            <el-button type="primary" slot-scope="{ name }">{{
                name
            }}</el-button>
        </Authorized>
        <div>
            <slot-test>
                <template v-slot="{ user }">
                    <span>111{{ user.firstName }}</span>
                </template>
            </slot-test>
        </div>
    </div>
</template>

<script>
import slotTest from '@/components/slot';
export default {
    components: {
        slotTest
    },
    data() {
        return {};
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