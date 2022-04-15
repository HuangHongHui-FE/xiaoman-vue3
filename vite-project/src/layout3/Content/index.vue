<script lang="ts" setup>
    import { reactive, ref, markRaw, toRaw} from 'vue'
    import A from './A.vue'
    import B from './B.vue'
    import C from './C.vue'

    // 1. 
    type Tabs = {
        name: string,
        comName: any
    }

    // reactive本身就有proxy代理，使用组件的markRaw跳过代理 
    const data = reactive<Tabs[]>([
        {
            name: "我是A",
            comName: markRaw(A)  // 要写成组件实例
        },
        {
            name: "我是B",
            comName: markRaw(B)
        },
        {
            name: "我是C",
            comName: markRaw(C)
        }
    ])

    // 2. 
    type Com = Pick<Tabs, 'comName'>  //选择出Tabs里的comName列

    // 默认展示这一个组件
    let current = reactive<Com>({
        comName: data[0].comName
    })


    // 3. 展示markRaw的作用
    let obj = {name: 123};
    let o = markRaw(obj);
    console.log(o)  // 发现多了个__v_skip属性，跳过代理

    // 4. 跳转
    const switchCom = (item: Tabs) => {
        current.comName = item.comName
    }
</script>


<template>
    <div class="content">
        <div class="content-items">
            <div v-for="(item) in data" :key="item" @click="switchCom(item)">
                {{item.name}}
            </div>
        </div>
        <!-- 动态组件 -->
        <component :is="current.comName"></component>
    </div>
</template>


<style scoped lang="less">
    .content{
        flex: 1;
        margin: 20px;
        border: 1px solid #ccc;

        overflow: auto;
        &-items{
            padding: 20px;
            border: 1px solid #ccc;
        }
    }
</style>