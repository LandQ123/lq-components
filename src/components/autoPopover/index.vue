<template>
  <div class="auto-popover">
    <el-popover
      :title="title"
      :width="width"
      :offset="offset"
      :transition="transition"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :placement="placement"
      :trigger="trigger"
      :disabled="!showBubble"
    >
		<!-- 不启用插槽，则泡泡默认和content一直，为传入popoverValue -->
      <template v-if="useSlot">
				<!-- 启用插槽，如果只启用content，则泡泡和content一致 -->
        <slot v-if="useSlotBubble" name="bubble"></slot>
        <p v-else class="my-popover">
          <slot name="content"></slot>
        </p>
      </template>
      <p v-else class="my-popover">{{popoverValue}}</p>
      <div slot="reference">
        <div
          ref="container"
          :class="{
            'plain-ellipsis': rows == 1,
            'auto-popover-ellipsis': rows != 1,
            'auto-popover_row-2': rows == 2,
            'auto-popover_row-3': rows == 3,
            'auto-popover_row-4': rows == 4,
            'auto-popover_row-5': rows == 5,
            'auto-popover_row-6': rows == 6,
            'auto-popover_row-7': rows == 7,
            'auto-popover_row-8': rows == 8,
            'auto-popover_aligin-left': aligin==='left',
          }"
        >
          <slot v-if="useSlotContent" name="content"></slot>
          <span v-else>{{popoverValue}}</span>
        </div>
        <!-- 计算宽度 -->
        <div v-if="useSlot" class="cal-content" ref="content">
           <slot name="content"></slot>
        </div>
        <div class="cal-content" ref="content" v-else>
          <span>{{popoverValue}}</span>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
	name: 'auto-popover',
	props: {
		popoverValue: '',
		// 行数
		rows: {
			type: [Number, String],
			default: 1,
		},
		// 强制展示bubble，不用计算
		forceShowBubble: {
			type: Boolean,
			default: false,
		},
		// 文字对齐方式
		aligin: String,
		trigger: { type: String, default: 'hover' },
		title: String,
		width: {
			type: String,
			default: '150px',
		},
		offset: {
			type: Number,
			default: 0,
		},
		transition: String,
		popperOptions: Object,
		popperClass: String,
		openDelay: Number,
		placement: String,
	},
	data() {
		return {
			showBubble: false,
		};
	},

	components: {},

	computed: {
		// 是否采用slot方式
		useSlot() {
			return Object.keys(this.$slots).length;
		},
		useSlotContent() {
			return Object.keys(this.$slots).indexOf('content') > -1;
		},
		useSlotBubble() {
			return Object.keys(this.$slots).indexOf('bubble') > -1;
		},
	},
	watch: {
		popoverValue: {
			immediate: true,
			handler(val) {
				this.$nextTick(() => {
					this.calculateWidth();
				});
			},
		},
	},

	mounted() {},

	methods: {
		// 计算实际内容和容器之间的宽度关系
		calculateWidth() {
			let container = this.$refs.container;
			let content = this.$refs.content;
			let rows = +this.rows;
			let containerW = container.offsetWidth;
			let contentW = content.offsetWidth;
			// console.log(containerW - 8);
			// console.log(contentW);
			if(this.forceShowBubble) {
				this.showBubble = this.forceShowBubble;
			}else {
				if ((containerW - 8) * rows < contentW) {
					this.showBubble = true;
				} else {
					this.showBubble = false;
				}
			}
			console.log(this.showBubble);
		},
	},
};
</script>
<style lang='scss' scoped>
.auto-popover {
	.cal-content {
		white-space: nowrap;
		display: inline-block;
		position: absolute;
		visibility: hidden;
	}
	.auto-popover-ellipsis {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.auto-popover_row-2 {
		-webkit-line-clamp: 2;
	}
	.auto-popover_row-3 {
		-webkit-line-clamp: 3;
	}
	.auto-popover_row-4 {
		-webkit-line-clamp: 4;
	}
	.auto-popover_row-5 {
		-webkit-line-clamp: 5;
	}
	.auto-popover_row-6 {
		-webkit-line-clamp: 6;
	}
	.auto-popover_row-7 {
		-webkit-line-clamp: 7;
	}
	.auto-popover_row-8 {
		-webkit-line-clamp: 8;
	}
	.auto-popover_aligin-left {
		text-align: left;
	}
}
</style>
<style lang="scss">
.my-popover {
	max-width: 300px;
	word-break: break-all;
}
.plain-ellipsis {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>