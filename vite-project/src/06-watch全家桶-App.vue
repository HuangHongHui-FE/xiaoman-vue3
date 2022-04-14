<script setup lang="ts">
    import {ref, watch, reactive, watchEffect} from 'vue'

    // 1. 
    let message = ref<string>('')
    let message2 = ref<string>('')

    // 同时监听两个
    watch([message, message2], (newVal, oldVal) => {
        // console.log('新的', newVal)
        // console.log('旧的', oldVal)
    })

    // 2. 
    let message3 = ref({
        nav: {
            bar: {
                name: '小满'
            }
        }
    })

    watch(message3, (newVal, oldVal) => {
        // console.log('新的', newVal)
        // console.log('旧的', oldVal)
    }, {
        deep: true,  // 有个bug, 监听不到旧的了
        immediate: true
    })

    // 3. 结合reactive
    let message4 = reactive({
        name: '小满',
        name2: '小满的裤子'
    })

    // 监听整个对象,新旧一样
    watch(message4, (newVal, oldVal) => {
        // console.log('新的', newVal)
        // console.log('旧的', oldVal)
    })

    watch(() => message4.name, (newVal, oldVal) => {
        // console.log('新的', newVal)
        // console.log('旧的', oldVal)
    })


    // 4. watchEffect

    let message5 = ref<string>('飞机')
    let message6 = ref<string>('座位')
    const stop = watchEffect((oninvalidate) => {
        // 获取dom
        let ipt:HTMLInputElement = document.getElementById('ipt') as HTMLInputElement;
        console.log(ipt, 'AAAAA')  //这里真实dom还没挂载好
        console.log('message5=====>', message5.value);
        console.log('message6=====>', message6.value);

        oninvalidate(() => {  // 这里在 watchEffect 里都会先执行
            console.log('before')
        })
    }, {
        flush: 'post',  // 这个配置就可以在上面获取到真实dom,
        // 其次还有pre, 组件更新前执行，sync:强制效果始终同步触发，post: 组件更新后执行

        onTrigger(e){
            debugger;  // 调试功能
        }
    })
    const stopWatch = () => {
        stop();  //点击停止监听，也会触发一次 oninvalidate 回调
    }
</script>

<template>
    <input type="text" v-model="message">
    <input type="text" v-model="message2">
    <div>2-</div>
    <input type="text" v-model="message3.nav.bar.name" />
    <div>3-</div>
    <input type="text" v-model="message4.name">
    <input type="text" v-model="message4.name2">

    <div>4-</div>
    <input type="text" v-model="message5" id="ipt">
    <input type="text" v-model="message6">
    <button @click="stopWatch">停止监听</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
div{
    margin-top: 20px;
}
</style>
