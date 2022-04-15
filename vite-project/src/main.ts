import { createApp } from 'vue'
import App from './10-全局组件-递归组件-App.vue'

import './assets/css/reset.less'  //样式重置

import Card from './components/Card/index.vue'

// 全局组件注册，组件名，组件实例，createApp会返回自身实例
createApp(App).component('Card', Card).mount('#app')
