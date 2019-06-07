<template>
    <div class="home">
        <my-menu></my-menu>
        <div class="container"></div>
    </div>
</template>

<script>
import Menu from '@/components/menu';
export default {
    name: 'home',
    components: {
        'my-menu': Menu
    },
    methods: {
        test() {
            let i = 0;
            let t = 'rrr';
        }
    }
};
</script>
<style lang="scss" scoped>
.home {
    padding-top: 20px;
    height: 100%;
    display: flex;
    .container {
        flex: 1;
    }
}
</style>
