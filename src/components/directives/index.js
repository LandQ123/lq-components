import clickTest from "./clickTest";
const install = (Vue) => {
    Vue.directive('click', clickTest)
}
clickTest.install = install;
export default clickTest;