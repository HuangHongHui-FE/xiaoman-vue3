// 页面顶部加载进度条
<template>
    <div class="wrap">
        <div class="bar" ref="bar"></div>
    </div>
</template>



<script setup lang="ts">
import {ref, onMounted} from 'vue'

let speed = ref<number>(1)

let bar = ref<HTMLElement>();

let timer = ref<number>(0)
const startLoading = () => {
    let dom = bar.value as HTMLElement;
    speed.value = 1
    timer.value = window.requestAnimationFrame(function fn() {
        if(speed.value < 90){
            speed.value += 1;
            dom.style.width = speed.value + '%';
            timer.value = window.requestAnimationFrame(fn)  // 递归，不然只走一下
        }else{
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })

}

const endLoading = () => {
    let dom = bar.value as HTMLElement;
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100;
            dom.style.width = speed.value + '%';
        })
    }, 1000)
}

onMounted(() => {
    startLoading()
})

defineExpose({
    startLoading,
    endLoading
})
</script>



<style scoped lang="less">
    .wrap{
        position: fixed;
        top: 0;
        width: 100%;
        height: 10px;
        .bar{
            height: inherit;
            width: 0;
            background-color: aquamarine;
        }
    }
</style>