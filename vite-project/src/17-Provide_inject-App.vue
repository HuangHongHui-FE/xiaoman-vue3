<template>
    <div class="App">
        <h1>我是根组件</h1>
        <A></A>
        
    </div>
</template>



<script setup lang="ts">
import A from './components/Provide_Inject/A.vue'

import {provide, ref, getCurrentInstance} from 'vue'

// 传响应式的值
provide('flag', ref(false))

let a = getCurrentInstance()
console.log(a)

</script>


<style scoped lang="less">
    .App{
        width: 300px;
        height: 300px;
        background-color: rgb(5, 239, 239);
        color: rgb(255, 255, 255);
    }
</style>