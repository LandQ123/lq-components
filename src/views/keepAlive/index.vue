<!-- 缓存和滚动 -->
<template>
    <div class="container">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button
                        @click="handleClick(scope.row)"
                        type="text"
                        size="small"
                        >查看</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                },
            ],
        };
    },

    components: {},

    computed: {},

    mounted() {},
    activated() {
        if(!this.$route.meta.isUseCache) {
            this.loadData();
            console.log(this.$route.meta)
        }
        this.$route.meta.isUseCache = false;
    },

    methods: {
        handleClick() {
            this.$router.push('/keepAliveDetail');
        },
        async loadData() {
            let list = await this.$api('getNormal').get()
        }
    },
    beforeRouteLeave (to, from, next) {
        // ...
        if(to.name === 'detail') {
            from.meta.isUseCache = true;
        }
        next();
    }
};
</script>
<style lang="scss" scoped></style>
