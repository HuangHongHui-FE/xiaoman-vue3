import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";

// 
import loadingBar from "../components/loadingBar.vue";
import {createVNode, render} from 'vue'  // 将loadingBar转成虚拟dom的
const VNode = createVNode(loadingBar)
render(VNode, document.body)


declare module 'vue-router'{
    interface RouteMeta {
        title: string
    }
}


const routes:Array<RouteRecordRaw> = [
    {
        // path与component为必传参数
        path: '/',
        name: 'Login',
        component: () => import('../components/Login_Register/Login/index.vue'),
        meta: {
            title: '登录页面'
        },
        
        // 4. 
        children: [
            
            {
                path: '',  //   /  默认匹配到这个子组件,注意在父路由里写router-view, 当然
                name: 'Register',
                component: () => import('../components/Login_Register/Register/index.vue'),
                meta: {
                    title: '登录页面'
                },
            },
            {
                path: 'res',    // 不用写 /
                name: 'Register',
                component: () => import('../components/Login_Register/Register/index.vue')
            },
        ]
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Login_Register/Register/index.vue')
    },


    // 5. 命名视图
    {
        path: '/',
        name: 'Login',
        component: () => import('../components/Login_Register/Login/index.vue'),
        children: [
            {
                path: '',
                name: 'Register',
                components: {
                    default: () => import('../components/Login_Register/Register/index.vue')
                }
            },
            {
                path: 'res',    // 不用写 /
                name: 'Register',
                components: {
                    bbb: () => import('../components/Login_Register/Register/index.vue'),
                    ccc: () => import('../components/Login_Register/Register/index.vue')
                }
            },
        ]
    }

    // 6. redirect
        // 1. redirect : '/res'
        // 2. 

        // redirect : {
        //     path: '/res'
        // }

        // 3. 
        // redirect: to=> {
        //     console.log(to)  // 这里是所有父组件的信息
        //     return '/res'
        // }

        // 4.  重定向并且传参
        // redirect: to=> {
        //     console.log(to)  // 这里是所有父组件的信息
        //     return {
        //         path: '/res',
        //         query: {
        //             age: 11
        //         }
        //     }
        // }


    // 7. 
    // path: '/'
    // alias: ['/root', '/root1', '/root2']
    // 访问任何一个都算访问 '/'


]

const router = createRouter({
    history:createWebHistory(),
    // history:createWebHashHistory(),
    routes
})


// 路由守卫
router.beforeEach((to, from, next) => {
    VNode.component?.exposed?.startLoading()

    document.title = to.meta.title
})

router.afterEach((to, from, next) => {
    VNode.component?.exposed?.endLoading()
})


export default router;