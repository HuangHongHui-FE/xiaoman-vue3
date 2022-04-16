<template>
    <div>
        <h1>A</h1>
        <button @click="emit">emit</button>
    </div>
</template>



<script setup lang="ts">
    import {getCurrentInstance} from 'vue'

    const instance = getCurrentInstance()

    // A传，B接收
    const emit = () => {
        instance?.proxy?.$Bus.emit('on-xiaoman', 'mitt')  // 第一个是事件名，第二个是参数
        instance?.proxy?.$Bus.emit('on-xiaoman2', 'mitt2')  // 第一个是事件名，第二个是参数
    }
</script>



<style scoped lang="less">

</style>
