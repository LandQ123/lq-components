<!--
 * @Author: your name
 * @Date: 2019-12-20 16:36:31
 * @LastEditTime: 2020-07-28 15:37:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lq-components\src\views\debounce.vue
--> 
<template>
  <div class="debounce">
    <p>触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间</p>
    <p>思路：每次触发事件时都取消之前的延时调用方法</p>
    <div class="ipt-wrap">
      <el-input @input="handleInp" v-model="value"></el-input>
    </div>
    <p>{{ num }}</p>
  </div>
</template>

<script>
import moment from 'moment';
import autoPopover from '@/components/autoPopover';
export default {
    name: 'debounce',
    components: { autoPopover },
	data() {
		return {
			num: 0,
			value: '',
			timeOut: null
		};
	},
	mounted() {
	},
	methods: {
		handleInp(e) {
			this.debounce();
		},
		debounce() {
			let _self = this;
			if (this.timeOut !== null) {
				clearTimeout(this.timeOut);
			}
			this.timeOut = setTimeout(() => {
				_self.addFn();
			}, 1000);
		},
		addFn() {
			this.num++;
		},
	},
};
</script>
<style lang="scss" scoped>
.debounce {
	p {
		margin-bottom: 20px;
	}
	.ipt-wrap {
		width: 200px;
	}
}
</style>
