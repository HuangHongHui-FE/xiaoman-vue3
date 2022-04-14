<script lang="ts" setup>
    import {reactive} from 'vue';

    // 1. 
    // type Prop = {
    //     title: string,
    //     data: number[]
    // }

    // defineProps<Prop>()  //接受父传过来的


    // 1.1 对传的值进行处理,可能传过来，也可能不传, withDefaults  只有ts才有
    type Prop = {
        title?: string,
        data?: number[]
    }

    withDefaults(defineProps<Prop>(), {
        title: '我是默认值',
        data: () => {
            return [1,2,3,4]
        }      
    })

    

    // 2. 子传给父事件
    const ls = reactive<number[]>([0,9,8])
    const emit = defineEmits(['on-click'])  //要是传传递多个就在这个列表里面写多个
    const clickTap = () => {
        emit('on-click', ls, false)  // 第二个为传递的参数
    }

    // 3. 子暴露出去，父可以ref拿到
    defineExpose({
        ls
    })
</script>


<template>
    <div class="menu">菜单
        <div>{{title}}</div>
        <div>{{data}}</div>
    </div>

    <div>
        <button @click="clickTap"> 派发给父组件</button>
    </div>
</template>


<style scoped lang="less">
    .menu{
        width: 200px;
        border-right: 1px solid #ccc;
    }
</style>