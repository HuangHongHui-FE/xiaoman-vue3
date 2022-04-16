<template>
    <div>
        <h1>B</h1>
    </div>
</template>



<script setup lang="ts">
    import {getCurrentInstance} from 'vue'

    const instance = getCurrentInstance()

    instance?.proxy?.$Bus.on('on-xiaoman', (str) => {
        console.log(str, '============B')
    })
    instance?.proxy?.$Bus.on('on-xiaoman2', (str2) => {
        console.log(str2, '============B')
    })


    // 一下子全触发
    instance?.proxy?.$Bus.on('*', (type, str) => {
        console.log(type, str, '============B')
    })


    // 取消监听
    const Bus = (str: any) => {
        console.log(str, "取消============> B")
    }
    instance?.proxy?.$Bus.off('on-xiaoman', Bus)


    // 清空所有事件
    // instance?.proxy?.$Bus.all.clear()
</script>



<style scoped lang="less">

</style>
