<template>
    <div>
        <!-- <loadingBar></loadingBar> -->
        <div>
            <!-- 1.  -->
            <router-link to="/">LOgin</router-link>
            <router-link :to="{name: 'Login'}">LOgin</router-link>

            <router-link to="/register" style="margin-left: 20px;">Register</router-link>
            <router-link :to="{name: 'Register'}" style="margin-left: 20px;">Register</router-link>

            <!-- 2.  -->
            <button @click="toPage('/')">Login</button>
            <button @click="toPage('/register')">register</button>

            <!-- 3.不留历史记录 -->
            <router-link replace to="/">LOgin</router-link>
            <router-link replace :to="{name: 'Login'}">LOgin</router-link>

            <router-link to="/register" style="margin-left: 20px;">Register</router-link>
            <router-link :to="{name: 'Register'}" style="margin-left: 20px;">Register</router-link>

            <!-- 5. 命名视图 -->
            <router-view></router-view>
            <router-view name="bbb"></router-view>
            <router-view name="ccc"></router-view>
        </div>
        <h1>小满最好</h1>
        <!-- <router-view></router-view> -->
    </div>
</template>



<script setup lang="ts">
    import {useRouter} from 'vue-router'
    // import loadingBar from './components/loadingBar.vue'
    const router = useRouter()

    const toPage = (url: string) => {
        // 1. 传字符串    还有router.replace不留历史记录
        router.push(url)

        router.push({
            path: url
        })

        router.push({
            name: url
        })

        // 2. 前进后退
        // router.go(1)
        // router.back()    router.go(-1)


        // 3. 路由跳转传参
        // 3.1   query
        // router.push({
        //     path: '/',
        //     query: {
        //         name: 'hhh'
        //     }
        // })

        // 在跳过去的组件里取值时：
        // import {useRoute} from 'vue-router'
        // const route = useRoute()
        // console.log(route.query.name)


        // 3.2   params  
            // 存在问题：值存在内存中，刷新会丢失，
            // 解决：  配置动态路由/:name，
        // router.push({
        //     name: '/',  // 只能用name
        //     params: {
        //         name: 'hhh'
        //     }
        // })

        // 在跳过去的组件里取值时：
        // import {useRoute} from 'vue-router'
        // const route = useRoute()
        // console.log(route.params.name)


        // 4. 嵌套路由
    }
</script>




<style scoped lang="less">

</style>
