<script setup lang="ts">
    

    import {defineAsyncComponent} from 'vue'

    
    // import AsyncCom from './components/Suspense-13/index.vue'

    // 异步组件
    const AsyncCom = defineAsyncComponent(() => import('./components/Suspense-13/index.vue'))  
    //打包的是否会进行拆包，一次不会请求所有的包，而是点击到哪个路由再去请求那个路由对应的组件
</script>


<template>
    <div>
        <!-- <AsyncCom></AsyncCom> -->

        <Suspense>
            <!-- 以默认插槽的形式 -->
            <template #default>
                <AsyncCom></AsyncCom>
            </template>

            <template #fallback>
                <div>loading</div>
            </template>
        </Suspense>
    </div>
    
</template>


<style lang="less" scoped>

</style>