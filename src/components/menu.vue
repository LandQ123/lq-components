<template>
    <div class="my-menu">
        <el-scrollbar>
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
                    <el-menu-item
                        v-for="(item, index) in menus.tipsMenu"
                        :key="index"
                        :index="item.router"
                        >{{ item.title }}</el-menu-item
                    >
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>js-tools</span>
                    </template>
                    <el-menu-item
                        v-for="(item, index) in menus.toolsMenu"
                        :key="index"
                        :index="item.router"
                        >{{ item.title }}</el-menu-item
                    >
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>组件</span>
                    </template>
                    <el-menu-item index="/ckeditor"
                        >ckeditor编辑器</el-menu-item
                    >
                    <el-menu-item index="/tinymce">tinymce编辑器</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { sessionStore } from '@/utils';
import { menus } from './menuConfig/menu';
export default {
    name: 'my-menu',
    data() {
        return {
            menus: menus
        };
    },
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
    height: 100%;
    .el-menu {
        border-right: none;
    }
    .el-scrollbar {
        height: 100%;
        overflow-x: hidden;
    }
}
</style>
<style>
.el-scrollbar__wrap {
    height: 100%;
    overflow-x: hidden;
}
</style>
