<!--
 * @Author: your name
 * @Date: 2020-07-12 11:25:51
 * @LastEditTime: 2020-07-21 19:04:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lq-components\src\views\autoPopover.vue
--> 
<!--  -->
<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="原始popover" width="180">
        <template slot-scope="{row}">
          <div style="white-space: nowrap;"><span>{{row.first}}</span></div>
        </template>
      </el-table-column>
      <el-table-column label="强制bubble" width="180">
        <template slot-scope="{row}">
          <autoPopover forceShowBubble :popoverValue="row.date">
						<p style="width: 300px;word-break:break-all" slot='bubble'>{{row.address}}</p>
					</autoPopover>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="设置行数" width="180">
        <template slot-scope="{row}">
          <autoPopover :rows="2" :popoverValue="row.name"></autoPopover>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="默认一行" width="300">
        <template slot-scope="{row}">
          <autoPopover :popoverValue="row.address"></autoPopover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import autoPopover from '@/components/autoPopover';
export default {
	components: { autoPopover },
	data() {
		return {
			tableData: [
				{
					first:
						'胜额杀戮空间地方1234',
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					first:
						'王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小',
					date: '2016-05-04',
					name:
						'王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
					address:
						'上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄',
				},
				{
					first: '王小',
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
				},
				{
					first: '王小',
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
			],
		};
	},

	computed: {},

	mounted() {},

	methods: {},
};
</script>
<style lang='scss' scoped>
</style>