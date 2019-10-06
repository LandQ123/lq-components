<template>
    <el-select
        ref="dragSelect"
        v-model="selectVal"
        class="drag-select"
        multiple
    >
        <slot />
    </el-select>
</template>

<script>
import Sortable from 'sortablejs';

export default {
    name: 'dragSelect',
    props: {
        value: {
            type: Array,
            required: true
        }
    },
    computed: {
        selectVal: {
            get() {
                return [...this.value];
            },
            set(val) {
                this.$emit('input', [...val]);
            }
        }
    },
    mounted() {
        this.setSort();
    },
    methods: {
        setSort() {
            const el = this.$refs.dragSelect.$el.querySelectorAll(
                '.el-select__tags > span'
            )[0];
            this.sortable = Sortable.create(el, {
                ghostClass: 'sortable-ghost',
                setData: function(dataTransfer) {
                    dataTransfer.setData('Text', '');
                },
                onEnd: evt => {
                    const targetRow = this.value.splice(evt.oldIndex, 1)[0];
                    this.value.splice(evt.newIndex, 0, targetRow);
                }
            });
        }
    }
};
</script>

<style scoped>
.drag-select >>> .sortable-ghost {
    opacity: 0.8;
    color: #fff !important;
    background: #42b983 !important;
}

.drag-select >>> .el-tag {
    cursor: pointer;
}
</style>
