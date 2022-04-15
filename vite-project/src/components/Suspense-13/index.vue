<template>
    <div>异步组件</div>
    <div v-for="(item) in list" :key="item">
        {{item}}
    </div>
</template>



<script setup lang="ts">
    import {axios} from './server'

    let list = await axios('./data.json')

    console.log(list)
</script>


<style scoped lang="less">

</style>
