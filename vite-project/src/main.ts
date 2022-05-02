import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/reset.less'  //样式重置


// 10. 全局组件注册，组件名，组件实例，createApp会返回自身实例
// import Card from './components/Card/index.vue'
// createApp(App).component('Card', Card).mount('#app')


// 19: mitt
// import mitt from 'mitt'
// const Mit = mitt();
// const app = createApp(App)
// declare module 'vue' {
//     export interface ComponentCustomProperties {
//         $Bus: typeof Mit
//     }
// }
// app.config.globalProperties.$Bus = Mit
// app.mount('#app')



// 24. pinia
// import {createPinia} from 'pinia'
// const store = createPinia()
// let app = createApp(App)
// app.use(store)
// app.mount('#app')



// 26.  全局函数和变量
// let app = createApp(App)

// // 用!!!!!!!的时候可能会报错，来个声明文件   !!!!

// type Filter = {
//     format: <T>(str: T) => string
// }
// declare module '@vue/runtime-core' {
//     export interface ComponentCustomProperties {
//         $filters: Filter,
//         $env: string
//     }
// }
// app.config.globalProperties.$filters = {
//     format <T>(str: T):string {  // 泛型T, 返回的是string
//         return `真^${str}`
//     }
// }
// app.config.globalProperties.$env = 'dev'
// app.mount('#app')




// 27. install插件, loading插件

// 定义声明文件
// declare module '@vue/runtime-core' {
//     export interface ComponentCustomProperties {
//         $loading: {
//             show: () => void,
//             hide: () => void
//         }
//     }
// }

// import Loading from './components/Loading'
// let app = createApp(App)
// app.use(Loading)  //注册插件
// app.mount('#app')



// 28. router
// import router from './router'
// let app = createApp(App)


// app.use(router)
// app.mount("#app")



createApp(App).mount('#app')
