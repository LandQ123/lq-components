export default {
    bind(el, binding) {
        // console.log(el)
        // console.log(binding)
        el.addEventListener('click', function (e) {
            console.log(555)
        })
    },
    update(el, binding) {
        console.log(666)
    }
}