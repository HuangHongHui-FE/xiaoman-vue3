<template>
    <div>
        <!-- 1.  -->
        <A a="456" title="123"></A>
        <!-- 2. -->
        <img src="./assets/logo.png" alt="" id="img" width="300" height="300">
    </div>
</template>


<script setup lang="ts">
import A from './hooks/A.vue'  // 自带hooks的使用

// 2. 自定义hooks, 输出图片的base64
import useBase64 from './hooks'
useBase64({
    el: '#img'
}).then(res => {
    console.log(res)
})
</script>



<style scoped lang="less">

</style>