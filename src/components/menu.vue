<template>
    <div class="my-menu">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
        >
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'my-menu',
    methods: {
        handleOpen() {}
    }
};
</script>
<style lang="scss" scoped>
.my-menu {
    width: 180px;
    background: rgb(233, 230, 230);
    .el-menu {
        border-right: none;
    }
}
</style>
