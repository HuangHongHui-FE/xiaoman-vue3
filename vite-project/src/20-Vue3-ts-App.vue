<template>
    <renderDom title="我是标题" @on-click='getNum'></renderDom>
</template>



<script setup lang="ts">
    import renderDom from './App.tsx'
    const getNum = (num:number) => {
        console.log(num + '我接受到了')
    }
</script>



<style scoped lang="less">

</style>
