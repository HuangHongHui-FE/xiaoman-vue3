<template>
    <div class="B">
        <h1>我是B组件</h1>
        <button @click="changeFlag">changeFlag</button>
        <div>
            {{data}}
        </div>
    </div>
</template>



<script setup lang="ts">

import {inject, Ref, ref} from 'vue'

// 第二个传的是默认值，解决报错的问题
let data = inject<Ref<boolean>>('flag', ref(false))

// 改变响应式的值
const changeFlag = () => {
    data.value = true
}
</script>


<style scoped lang="less">
    .B{
        width: 100px;
        height: 100px;
        background-color: rgb(236, 13, 140);
        color: rgb(255, 255, 255);
    }
</style>