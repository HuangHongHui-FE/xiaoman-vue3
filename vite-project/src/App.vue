<template>
    
</template>


<script setup lang="ts">
import axios from 'axios'
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter();
console.log(router)

// 根据登录时，用户名密码，返回不同的·路由数据
const initRouter = async () => {
    let res = await axios.get('http://localhost:9999/login', {params: {
        user: 'admin', password: '123456'
    }})
    console.log(res)
    console.log(router)
    res.data.route.forEach((v:any) => {
        // addRoute
        router.addRoute({
            path: v.path,
            name: v.name,
            component: ()=>import(`../views/${v.component}`)
        })
    })

    console.log(router.getRoutes());
}

onMounted(() => {
    initRouter()
})

</script>


<style scoped lang="less">

</style>