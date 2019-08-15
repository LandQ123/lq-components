<!-- 深度优先遍历 -->
<template>
    <div class="bfs">
        <div class="parents" ref="parent">
            <div class="child-1">
                <div class="child-1-1">
                    <div class="child-1-1-1">
                        a
                    </div>
                </div>
                <div class="child-1-2">
                    b
                </div>
            </div>
            <div class="child-2">
                <div class="child-2-1">
                    c
                </div>
                <div class="child-2-2">
                    <div class="child-2-2-1">
                        <div class="child-2-2-1-1">
                            d
                        </div>
                    </div>
                </div>
            </div>
            <div class="child-3">
                e
            </div>
            <div class="child-4">
                <div class="child-4-1">
                    f
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        let parentNode = this.$refs.parent;
        let nodeList = this.deepTraversal(parentNode);
        let nodeList2 = this.deepTraversalTwo(parentNode);
        let nodeList3 = this.widthTraversal(parentNode);
        console.log(nodeList);
        console.log(nodeList3);
    },
    computed: {},
    //方法集合
    methods: {
        //深度优先遍历
        deepTraversal(node, nodeList = []) {
            if (node !== null) {
                nodeList.push(node);
                let children = node.children;
                for (let i = 0; i < children.length; i++) {
                    this.deepTraversal(children[i], nodeList);
                }
            }
            return nodeList;
        },
        //深度优先遍历
        deepTraversalTwo(node) {
            let nodeList = [];
            if (node !== null) {
                nodeList.push(node);
                let children = node.children;
                for (let i = 0; i < children.length; i++) {
                    nodeList = nodeList.concat(this.deepTraversal(children[i]));
                }
            }
            return nodeList;
        },
        // 广度优先遍历
        widthTraversal(node) {
            let nodes = [];
            let stack = [];
            if (node) {
                stack.push(node);
                while (stack.length) {
                    let item = stack.shift();
                    nodes.push(item);
                    let children = item.children;
                    for (let i = 0; i < children.length; i++) {
                        stack.push(children[i]);
                    }
                }
            }
            return nodes;
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>