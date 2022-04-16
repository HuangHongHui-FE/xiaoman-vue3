<template>
    <div class="A">
        <button @click="emitA">A派发一个事件</button>
    </div>
</template>



<script setup lang="ts">
    const emit = defineEmits(['on-click'])

    let flag = false
    const emitA = () => {
        flag = !flag
        emit('on-click', flag)
    }
</script>


<style scoped lang="less">

</style>