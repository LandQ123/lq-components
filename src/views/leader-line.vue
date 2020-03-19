<!--  -->
<template>
  <div class="container">
    <a href="https://anseki.github.io/leader-line/">https://anseki.github.io/leader-line/</a>
    <span id="span1">444</span>
    <span id="span2">555</span>
  </div>
</template>

<script>
import LeaderLine from '@/plugin/leader-line';
export default {
	data() {
		return {
			line: null,
		};
	},

	components: {},

	computed: {},

	mounted() {
		this.lineInit();
	},

	methods: {
		lineInit() {
			let start = document.getElementById('span1');
			let end = document.getElementById('span2');

			this.line = new LeaderLine(
				start,
				LeaderLine.pointAnchor(end, { x: 0, y: '45%' }),
				{
					dash: { len: 14, gap: 4, animation: true },
					color: '#2d79ec',
					startPlug: 'arrow3',
					endPlug: 'arrow3',
					startPlugSize: 4,
					endPlugSize: 4,
					path: 'grid', // 折线
					startSocket: 'right',
					endSocket: 'left',
					size: 2,
				},
			);
		},
	},
	beforeDestroy() {
		this.line.remove();
	},
};
</script>
<style lang='scss' scoped>
.container {
	width: 700px;
	height: 500px;
	display: flex;
	justify-content: space-between;
	span {
		padding: 10px;
		background: red;
		color: #fff;
	}
	#span1 {
		height: 100px;
	}
}
</style>