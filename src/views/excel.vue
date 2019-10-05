<!-- excel相关 -->
<template>
    <div class="excel">
        <div style="margin-bottom:20px;">
            <p>npm i script-loader -S</p>
            <p>npm i xlsx -S</p>
        </div>
        <div style="width: 700px;">
            <el-table :data="tableData" border fit highlight-current-row>
                <el-table-column align="center" label="Id" width="95">
                    <template slot-scope="scope">
                        {{ scope.$index }}
                    </template>
                </el-table-column>
                <el-table-column label="Title" prop="title"> </el-table-column>
                <el-table-column
                    label="Author"
                    prop="author"
                    width="110"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    label="Readings"
                    prop="readings"
                    width="115"
                    align="center"
                >
                </el-table-column> </el-table
            ><br />
            <el-button type="primary" @click="exportExcel">导出表格</el-button>
            <el-button type="primary" @click="exportExcelZip('txt')"
                >导出txt格式zip</el-button
            >
            <el-button type="primary" @click="exportExcelZip('xlsx')"
                >导出xlsx格式zip</el-button
            >
        </div>
        <div style="width: 700px; margin-top:20px;">
            <p>上传excel</p>
            <upload-excel-component
                :on-success="handleSuccess"
                :before-upload="beforeUpload"
            />
            <el-table
                :data="tableDataUpload"
                border
                highlight-current-row
                style="width: 100%;margin-top:20px;"
            >
                <el-table-column
                    v-for="item of tableHeaderUpload"
                    :key="item"
                    :prop="item"
                    :label="item"
                />
            </el-table>
        </div>
    </div>
</template>

<script>
import UploadExcelComponent from '@/components/uploadExcel/index.vue';
export default {
    components: { UploadExcelComponent },
    data() {
        return {
            tableData: [
                {
                    id: 0,
                    title: 'abc',
                    author: '123',
                    readings: '杀戮空间开始'
                }
            ],
            tableDataUpload: [],
            tableHeaderUpload: [],
            fileName: 'test',
            bookType: 'xlsx'
        };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    computed: {},
    //方法集合
    methods: {
        exportExcel() {
            import('@/utils/vendor/Export2Excel').then(excel => {
                const tHeader = ['Id', 'Title', 'Author', 'Readings'];
                const filterVal = ['id', 'title', 'author', 'readings'];
                const list = this.tableData;
                const data = this.formatJson(filterVal, list);
                excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: this.fileName,
                    autoWidth: true,
                    bookType: this.bookType // 仅支持xlsx
                });
            });
        },
        exportExcelZip(type) {
            import('@/utils/vendor/Export2Zip').then(zip => {
                const tHeader = ['Id', 'Title', 'Author', 'Readings'];
                const filterVal = ['id', 'title', 'author', 'readings'];
                const list = this.tableData;
                const data = this.formatJson(filterVal, list);
                zip.export_txt_to_zip(
                    tHeader,
                    data,
                    this.fileName,
                    this.fileName,
                    type // 支持xlsx,txt
                );
            });
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v =>
                filterVal.map(j => {
                    return v[j];
                })
            );
        },
        beforeUpload(file) {
            const isLt1M = file.size / 1024 / 1024 < 2;

            if (isLt1M) {
                return true;
            }

            this.$message({
                message: '文件大小不能超过2M',
                type: 'warning'
            });
            return false;
        },
        handleSuccess({ results, header }) {
            this.tableDataUpload = results;
            this.tableHeaderUpload = header;
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>