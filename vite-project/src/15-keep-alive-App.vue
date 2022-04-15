<template>
    <div class="con">
        <button @click="switchCom">切换</button>
        <!-- 里面只能绑定一个组件, 指定缓存的组件列表, 指定缓存组件的前多少个 -->
        <keep-alive :include="['Login']" :max="10">
            <Login v-if="flag"></Login>
            <Register v-else></Register>
        </keep-alive>
        
    </div>
</template>


<script setup lang="ts">
    import {reactive, ref} from 'vue';

    import Login from './components/Login_Register/Login/index.vue'
    import Register from './components/Login_Register/Register/index.vue'

    let flag = ref<boolean>(true)
    const switchCom = () => {
        flag.value = !flag.value
    }
</script>


<style scoped lang="less">

</style>
