<template>
    <div class="my-menu">
        <el-menu
            :default-active="this.$route.path"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>js-tips</span>
                </template>
                <el-menu-item index="/debounce">防抖</el-menu-item>
                <el-menu-item index="/throttle">节流</el-menu-item>
                <el-menu-item index="/dfs">深度遍历</el-menu-item>
                <el-menu-item index="/flatArr">数组扁平化</el-menu-item>
                <el-menu-item index="/axios">axios测试</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>组件</span>
                </template>
                <el-menu-item index="/ckeditor">ckeditor编辑器</el-menu-item>
                <el-menu-item index="/tinymce">tinymce编辑器</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { sessionStore } from '@/utils';
export default {
    name: 'my-menu',
    methods: {
        handleOpen(key, keyPath) {
            console.log(key);
        }
    }
};
</script>
<style lang="scss" scoped>
.my-menu {
    width: 180px;
    background: rgb(233, 230, 230);
    overflow: hidden;
    .el-menu {
        border-right: none;
    }
}
</style>
