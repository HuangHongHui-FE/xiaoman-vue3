<script lang="ts" setup>
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Content from "./Content/index.vue";
import {reactive, ref} from 'vue';

// 1. 
const list = reactive<number[]>([1,2,3,4])


// 2. 从子传过来的事件以及参数ls
const getLs = (ls:number[], flag:boolean) => {
    console.log("我是子组件传过来的ls:",flag , ls)
}

// 3. 通过ref拿到Menu实例, 子defineExpose暴露出的数据才能拿到
const menus = ref(null);
console.log(menus)
</script>


<template>
  <div class="layout">
    <!-- 1. 父传子， 2. 接收子传过来的事件 3. ref-->
    <Menu title="我想穿一跳裤子" :data="list" @on-click="getLs" ref="menus"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>


<style scoped lang="less">
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;

    &-right {  // less的作用
        flex: 1;
        display: flex;  // 为了让右边的两部分占满
        flex-direction: column;
    }
}
</style>