import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });
    function Click(e) {
        point.x = e.pageX
        point.y = e.pageY
        console.log(e.pageX, e.pageY);
    }
    onMounted(() => {
        window.addEventListener("click", Click);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('click', Click)
    });
    return point
}
