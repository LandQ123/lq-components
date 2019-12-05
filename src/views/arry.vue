<!-- 数组方法 -->
<template>
    <div class="container">
        <p>运行结果：请查看控制台</p>
        <div class="item">
            <h2>1、for...of</h2>
            <el-button type="primary" @click="run(1)">运行</el-button>
            <p>可用break终止循环</p>
        </div>
        <div class="item">
            <h2>2、for</h2>
            <el-button type="primary" @click="run(2)">运行</el-button>
            <p>可用break终止循环</p>
        </div>
        <div class="item">
            <h2>3、forEach</h2>
            <el-button type="primary" @click="run(3)">运行</el-button>
            <p>不能终止循环,只能改变引用类型数组，不能修改纯数组[1,2,3]</p>
        </div>
        <div class="item">
            <h2>4、map</h2>
            <el-button type="primary" @click="run(4)">运行</el-button>
            <p>创建一个新的数组，不改变原数组</p>
        </div>
        <div class="item">
            <h2>5、Array.form</h2>
            <el-button type="primary" @click="run(5)">运行</el-button>
        </div>
        <div class="item">
            <h2>6、reduce</h2>
            <el-button type="primary" @click="run(6)">运行</el-button>
            <p>初始化为0，否则默认为数组第一项</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        run(type) {
            let arr = [1, 2, 3];
            let arrObj = [
                {
                    a:1
                },
                {
                    a:2
                }
                ];
            if (type === 1) {
                for (const iterator of arr) {
                    if (iterator === 3) {
                        break;
                    }
                    console.log(iterator);
                }
            }
            if (type === 2) {
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (index === 2) {
                        break;
                    }
                    console.log(element);
                }
            }
            if (type === 3) {
                arrObj.forEach(element => {
                    element.a = element.a*2
                });
                arr.forEach(element => {
                    element = element*2
                });
                console.log(arrObj,arr)
            }
            if (type === 4) {
                let arrNew = arrObj.map(element =>{
                    return element.a*2
                })
                let arrNew1 = arr.map(element => {
                    return element*2
                });
                console.log(arrNew,arrNew1)
            }
            if (type === 5) {
                let arrNew = Array.from(arrObj,(item) => {
                    return item.a*3
                })
                let arrNew1 = Array.from(arr,(item) => {
                    return item*3
                })
                let b = Array.from(new Set([1,1,2,2,4,4,45,5,6,7,2]))
                let a = [...new Set([1,1,2,2,4,4,45,5,6,7,2])]
                console.log(arrNew,arrNew1)
            }
            if (type === 6) {
                let arrNew = arrObj.reduce((total,item) => {
                    return total + item.a
                },0) // 初始化为0，否则默认为数组第一项
                let arrNew1 = arr.reduce((total,item) => {
                    return total + item
                })
                console.log(arrNew,arrNew1)
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.item {
    margin-top: 20px;
    h2 {
        margin-bottom: 20px;
    }
    p {
        margin-top: 20px;
    }
}
</style>
