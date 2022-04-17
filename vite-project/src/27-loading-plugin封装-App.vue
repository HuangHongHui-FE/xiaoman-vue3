<template>
    <button @click="showLoading">切换</button>
</template>


<script setup lang="ts">
    import {getCurrentInstance, ComponentInternalInstance} from 'vue'
    const { appContext }  = getCurrentInstance() as ComponentInternalInstance;
    // 都是为了找到插件的show,hide方法
    const showLoading = () => {
        appContext.config.globalProperties.$loading.show()

        setTimeout(() => {
            appContext.config.globalProperties.$loading.hide()
        }, 4000)
    }
</script>



<style scoped lang="less">

</style>