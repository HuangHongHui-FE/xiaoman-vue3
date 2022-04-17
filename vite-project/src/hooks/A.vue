<template>
    <div>
        A组件
    </div>
</template>


<script setup lang="ts">
// useAttrs就是自定义hooks
import {useAttrs, useSlots} from 'vue'
// 接受所有传过来的属性
let attr = useAttrs();

console.log(attr)

</script>



<style scoped lang="less">

</style>