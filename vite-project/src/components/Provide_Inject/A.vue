<template>
    <div class="A">
        <h1>我是A组件</h1>
        <div>
            {{data}}
        </div>
        <B></B>
        
    </div>
</template>



<script setup lang="ts">
import B from './B.vue'

import {inject} from 'vue'

let data = inject('flag')

</script>


<style scoped lang="less">
    .A{
        width: 200px;
        height: 200px;
        background-color: rgb(80, 231, 16);
        color: rgb(255, 255, 255);
    }
</style>