import { App, VNode, createVNode, render } from "vue";


import Loading from './index.vue'



export default {
    install(app:App) {
        // console.log(loading)
        const vnode: VNode = createVNode(Loading)  // loading组件转成虚拟dom
        render(vnode, document.body)  //转真实dom, 第二个参数为挂载点， 
        // console.log(vnode)  //这时候component以及el就有值了

        // 获取到组件暴露出来的方法，挂载到全局
        app.config.globalProperties.$loading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }
        // console.log(vnode.component?.exposed)  // 获取组件暴露出来的方法
    }
}