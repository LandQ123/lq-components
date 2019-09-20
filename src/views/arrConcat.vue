<!--  -->
<template>
    <div class="wrapper">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="数组排序" name="1">
                <div>
                    请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C,
                    D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
                </div>
            </el-collapse-item>
            <el-collapse-item title="解决方案" name="2">
                <div>
                    let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1',
                    'D2'];<br />
                    let arr2 = ['A', 'B', 'C', 'D']; <br />
                    let a = arr2.map(item => { return item + 3; }); <br />let b
                    = [...arr1, ...a].sort().map(item => { <br />if
                    (item.includes('3')) {<br />
                    return item.split('')[0];<br />
                    } <br />return item; <br />});
                </div>
            </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeNames1">
            <el-collapse-item title="数组扁平化" name="1">
                <div>
                    let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12,
                    13]]]
                </div>
            </el-collapse-item>
            <el-collapse-item title="解决方案" name="2">
                <div>
                    let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12,
                    13]]];<br />
                    // string方法<br />
                    let a = arr.toString().split(',');<br />
                    // console.log(a);<br />
                    // 迭代<br />
                    const flatten = arr => {<br />
                    while (arr.some(item => Array.isArray(item))) {<br />
                    console.log(arr);<br />
                    arr = [].concat(...arr);<br />
                    console.log(arr);<br />
                    }<br />
                    return arr;<br />
                    };<br />
                    console.log(flatten(arr));<br />
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            activeNames: ['1'],
            activeNames1: ['1']
        };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.doArr();
        this.doArr1();
    },
    computed: {},
    //方法集合
    methods: {
        doArr() {
            let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
            let arr2 = ['A', 'B', 'C', 'D'];
            let a = arr2.map(item => {
                return item + 3;
            });
            let b = [...arr1, ...a].sort().map(item => {
                if (item.includes('3')) {
                    return item.split('')[0];
                }
                return item;
            });
            // console.log(b);
        },
        doArr1() {
            let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];
            // string方法
            let a = arr.toString().split(',');
            // console.log(a);
            // 迭代
            const flatten = arr => {
                while (arr.some(item => Array.isArray(item))) {
                    console.log(arr);
                    arr = [].concat(...arr);
                    console.log(arr);
                }
                return arr;
            };
            console.log(flatten(arr));
        }
    }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.upload-wrap {
    display: flex;
    margin-top: 20px;
    .avatar-uploader {
        margin-right: 20px;
    }
}
</style>