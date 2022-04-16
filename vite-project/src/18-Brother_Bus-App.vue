<template>
    <div class="App">
        <A @on-click="getFlag"></A>
        <B :flag="Flag"></B>
    </div>
</template>



<script setup lang="ts">
import A from './components/Brother_Bus/A.vue'
import B from './components/Brother_Bus/B.vue'

import {ref} from 'vue'
let Flag = ref(false)

const getFlag = (params: boolean) => {
    Flag.value = params
}
</script>


<style scoped lang="less">
    .App{
        
    }
</style>