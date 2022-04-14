<script setup lang="ts">
    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue'

    let count = ref<number>(0)
    console.log('setup')

    onBeforeMount(() => {
        let div = document.querySelector('#hello');
        console.log('创建之前 === > onBeforeMount', div)
    })

    onMounted(() => {
        let div = document.querySelector('#hello');
        console.log('创建完成 === > onMounted', div)
    })

    onBeforeUpdate(() => {
        let div = document.querySelector('#hello');
        console.log('更新之前 === > onBeforeUpdate', div)
    })

    onUpdated(() => {
        let div = document.querySelector('#hello');
        console.log('更新完成 === > onUpdated', div)
    })

    onBeforeUnmount(() => {
        let div = document.querySelector('#hello');
        console.log('卸载之前 === > onBeforeUnmount', div)
    })

    onUnmounted(() => {
        let div = document.querySelector('#hello');
        console.log('卸载完成 === > onUnmounted', div)
    })


</script>



<template>
    <div id="hello">我是HelloWorld子组件</div>
    <div>{{count}}</div>
    <button @click="count++">改变</button>
</template>


<style scoped>

</style>