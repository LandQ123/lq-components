<!-- 函数式组件 -->
<script>
import checkAuthorized from './auth';
export default {
    functional: true, // 函数式组件
    props: {
        // 接收参数
        authName: {
            type: String,
            required: true,
            default: ''
        }
    },
    render(h, context) {
        let { props, scopedSlots } = context;
        return checkAuthorized(props.authName)
            ? scopedSlots.default({
                  name: props.authName
              })
            : null;
    }
};
</script>