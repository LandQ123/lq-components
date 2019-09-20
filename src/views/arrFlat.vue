<!-- 数组扁平化 -->
<template>
    <div class="flat">
        <p style="margin-bottom: 20px;">
            var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13,
            [14] ] ] ], 10];
        </p>
        <p>
            编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
        </p>
        <el-button type="primary" size="medium" @click="go">go</el-button>
        <div>
            this.newArr1 = Array.from(new Set(arr.flat(Infinity))).sort( (a, b)
            => { return a - b; } );
        </div>
        <el-button type="primary" size="medium" @click="go2">go2</el-button>
        <div>
            this.newArr1 = Array.from(new Set(arr.flat(Infinity))).sort( (a, b)
            => { return a - b; } );
        </div>
        <el-button type="primary" size="medium" @click="go1">go1</el-button>
        <p>
            <strong>{{ newArr }}</strong>
        </p>
        <p>
            <strong>{{ newArr1 }}</strong>
        </p>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            newArr: [],
            newArr1: []
        };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    computed: {},
    //方法集合
    methods: {
        go1() {
            let arr = [
                [1, 2, 2],
                [3, 4, 5, 5],
                [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
                10
            ];
            this.newArr1 = Array.from(new Set(arr.flat(Infinity))).sort(
                (a, b) => {
                    return a - b;
                }
            );
        },
        go2() {
            let arr = [
                [1, 2, 2],
                [3, 4, 5, 5],
                [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
                10
            ];
            this.newArr1 = Array.from(
                new Set(
                    arr
                        .toString()
                        .split(',')
                        .sort((a, b) => a - b)
                )
            );
        },
        go() {
            let arr = [
                [1, 2, 2],
                [3, 4, 5, 5],
                [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
                10
            ];
            this.flat(arr);
            this.newArr = [...new Set(this.newArr)];
            this.newArr = this.newArr.sort((a, b) => {
                return a - b;
            });
            console.log(this.newArr);
        },
        flat(arr = []) {
            for (let i = 0; i < arr.length; i++) {
                let arrItem = arr[i];
                if (Array.isArray(arrItem)) {
                    this.flat(arrItem);
                } else {
                    this.newArr.push(arrItem);
                }
            }
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>