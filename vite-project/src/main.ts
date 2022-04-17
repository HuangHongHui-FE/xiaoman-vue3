import { createApp } from 'vue'
import App from './23-Directive自定义指令盒子拖动-App.vue'

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



createApp(App).mount('#app')
