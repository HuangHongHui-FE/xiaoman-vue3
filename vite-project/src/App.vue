<template>
    <div>
        <button>切换</button>
        <!--1.  下面每个周期都可以获得这些绑的参数 -->
        <A v-move:aaa.xiaoman="{background: 'red'}"></A>
        <!-- 2.  -->
        <div style="margin-top: 30px;"></div>
        <A v-move2:aaa.xiaoman="{background: 'red'}"></A>
    </div>
</template>


<script setup lang="ts">
import A from './components/Directive/A.vue'

import {ref, Directive, DirectiveBinding} from 'vue';

let flag = ref<boolean>(true);


// 1. 自定义指令的钩子函数， 对象式写法
type Dir = {
    background: string
}

const vMove:Directive = {
    created() {  // 元素初始化的时候
        console.log('=======> created');
    },
    beforeMount(el:HTMLElement, dir:DirectiveBinding<Dir>, ) {  // 指令绑定到元素后, 注意参数
        console.log('=======> beforeMount');
        // console.log(dir.value.background)
        el.style.background = dir.value.background
    },
    // 获取到所有的参数，包括元素，上面绑定的值等
    mounted(...args: Array<any>) {  // 元素插入父级dom调用
        console.log('=======> mounted');
        console.log(args)
    },
    beforeUpdate() {  // 元素被更新之前调用
        console.log('=======> beforeUpdate');
    },
    updated() {  // 元素被更新调用
        console.log('=======> updated');
    },
    beforeUnmount() {  // 元素被移除之前
        console.log('=======> beforeUnmount');
    },
    unmounted() {  // 元素移除
        console.log('=======> unmounted');
    }
}


// 2、函数简写法
const vMove2:Directive = (el:HTMLElement, bingding:DirectiveBinding<Dir>) => {
    el.style.background = bingding.value.background
}


</script>



<style scoped lang="less">

</style>