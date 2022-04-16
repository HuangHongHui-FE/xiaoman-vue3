import { createApp } from 'vue'
import App from './20-Vue3-ts-App.vue'

import './assets/css/reset.less'  //样式重置

import Card from './components/Card/index.vue'

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


// 10. 全局组件注册，组件名，组件实例，createApp会返回自身实例
// createApp(App).component('Card', Card).mount('#app')


createApp(App).mount('#app')
