<script setup lang="ts">
    import {reactive } from 'vue'

    type names = {
        name: string,
        age: number
    }

    const data = reactive<names[]>([
        {
            name: '小曼111',
            age: 201
        },
        {
            name: '小曼222',
            age: 202
        },
        {
            name: '小曼333',
            age: 203
        },
        {
            name: '小曼444',
            age: 204
        }
    ])
</script>


<template>
    <div>
        <header class="header">
            <slot name="header"></solt>
        </header>
        <main class="main">
            <!-- 匿名插槽 向父传数据 -->
            <div v-for="(item, index) in data" :key="item">
                <slot :data="item" :index="index"></slot>
            </div>
            
        </main>
        <footer class="footer">
            <!-- <slot name="footer"></solt> -->
        </footer>
    </div>
</template>


<style lang="less" scoped>
    .header{
        height: 200px;
        background-color: red;
        color: #fff;
    }
    .main{
        height: 200px;
        background-color: rgb(67, 207, 49);
        color: #fff;
    }
    .footer{
        height: 200px;
        background-color: rgb(76, 39, 223);
        color: #fff;
    }
</style>