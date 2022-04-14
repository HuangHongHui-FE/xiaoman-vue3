<script lang="ts" setup>
    import {reactive} from 'vue';
    import Tree from '../../components/Tree/index.vue'
    
    type TreeList = {
        name?: string,
        icon?: string,
        children?: TreeList[] | []
    }

    // 定义传过去tree里的数据
    const data = reactive<TreeList[]>([
        {
            name: 'no.1',
            children: [
                {
                    name: 'no.1-1',
                    children: [
                        {
                            name: 'no.1-1-1'
                        }
                    ]
                }
            ]
        },
        {
            name: 'no.2',
            children: [
                {
                    name: 'no.2-1'
                }
            ]
        },
        {
            name: 'no.2'
        }
    ])

    // 接受从tree里传过来的事件
    const getItem = (item: TreeList) => {
        console.log(item, "menu父组件的item")
    }
</script>


<template>
    <div class="menu">
        菜单
        <Tree :data="data" @on-click="getItem"></Tree>
    </div>
</template>


<style scoped lang="less">
    .menu{
        width: 200px;
        border-right: 1px solid #ccc;
    }
</style>