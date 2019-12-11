<!--  -->
<template>
    <div class="container"></div>
</template>

<script>
export default {
    data() {
        return {
            name: 'vue',
        };
    },

    components: {},

    computed: {},

    mounted() {
        // this.apply();
        // this.call();
        this.bind();
    },

    methods: {
        apply() {
            let obj = {
                name: 'tom',
            };
            function fn(age, date) {
                console.log(this.name);
                console.log(age, date);
            }
            //   fn.apply(obj,[12,'2019-12-05']); // 参数是数组

            Function.prototype.myApply = function(context, argArr) {
                context = context ? context : window;
                // console.log(context)
                let key = Symbol();
                context[key] = this; // this为调用函数fn，从新赋值给context[key]属性
                context[key](...argArr); // 执行
                delete context[key]; // 删掉原有的方法，避免影响到原来的context
            };
            fn.myApply(obj, [12, '2019-12-05']);
        },
        call() {
            let obj = {
                name: 'tom1',
            };
            function fn(age, date) {
                console.log(this.name);
                console.log(age, date);
            }
            // fn.call(obj,24,'2019-12-05');
            Function.prototype.myCall = function(context) {
                context = context ? context : window;
                let key = Symbol();
                // arguments是一个类数组对象，不能直接用数组slice方法
                let arg = [...arguments].slice(1);
                context[key] = this;
                context[key](...arg);
                delete context[key];
            };
            fn.myCall(obj, 24, '2019-12-05'); // 参数非数组
        },
        bind() {
            let obj = {
                name: 'tom2',
            };
            function fn(age, date, num) {
                console.log(this.name);
                console.log(age, date, num);
            }
            // 返回一个函数，需手动调用才能执行,参数为非数组类型
            // fn.bind(obj,12,'2019-12-05'); // 不会执行
            // let fnNew = fn.bind(obj, 12, '2019-12-05'); // 支持柯理化传参
            // fnNew(444);

            Function.prototype.myBind = function(context) {
                context = context ? context : window;
                const key = Symbol();
                context[key] = this;
                let args = [...arguments].slice(1);
                return function() {
                    let argIn = [...arguments];
                    return context[key](...args.concat(argIn));
                };
            };
            // let fnMyBind = fn.myBind(obj, 12, '2019-12-05');
            // fnMyBind(444);

            // 用apply实现
            Function.prototype.myBindByApply = function(context) {
                context = context ? context : window;
                let _self = this;
                let args = [...arguments].slice(1);
                return function() {
                    let argIn = [...arguments];
                    return _self.apply(context,args.concat(argIn));
                };
            };
            let myBindByApply = fn.myBindByApply(obj, 12, '2019-12-05');
            myBindByApply(444);
        },
    },
};
</script>
<style lang="scss" scoped></style>
