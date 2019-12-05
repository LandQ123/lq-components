export default {
    bind(el, binding) {
        // console.log(el)
        // console.log(binding)
        el.addEventListener('click', function (e) {
            alert("click");
        })
    },
    update(el, binding) {
        console.log(666)
    }
}