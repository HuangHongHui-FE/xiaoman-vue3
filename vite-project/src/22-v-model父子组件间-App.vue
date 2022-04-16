<template>
    <!-- 父组件控制子组件显示隐藏 -->
    <button @click="flag = !flag">change {{flag}}</button>
    <div>
        标题  {{title}}
    </div>
    <!-- !!! xiao小的修饰符，title自定义双向绑定的-->
    <Dialog v-model="flag" v-model:title="title" v-model.xiaoman="xiao"></Dialog>
</template>



<script setup lang="ts">
import Dialog from './components/Dialog-22.vue'
import {ref} from 'vue';

let flag = ref<boolean>(true)
let title = ref<string>('我是人')

let xiao = "牛牛"


</script>



<style scoped lang="less">

</style>
