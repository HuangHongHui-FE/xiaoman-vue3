// 递归组件, 看layout2的menu组件

<script setup lang="ts">

// 1、第一种写法。。。递归
import TreeItem from './index.vue'

// 这种type都应该先提出去
type TreeList = {
    name?: string,
    icon?: string,
    children?: TreeList[] | []
}
type Props = {
    data?: TreeList[]
}

defineProps<Props>();


// 向父组件menu中传事件, 派发
const emit = defineEmits(['on-click'])  // 返回的是一个函数
const clickItem = (item: TreeList) => {
    // console.log('子组件', item)
    emit('on-click', item)
}
</script>


<script lang="ts">
    // 解决引入的时候报错的问题
    export default {
        name: 'TreeItem'
    }
</script>





<template>
    <div style="margin-left:10px;">
        <div :key="index" v-for="(item, index) in data" @click="clickItem(item)">
            {{item.name}}
            <TreeItem v-if="item?.children?.length" :data="item.children" @click="clickItem(item)"></TreeItem>
        </div>
    </div>
</template>





<style scoped>

</style>