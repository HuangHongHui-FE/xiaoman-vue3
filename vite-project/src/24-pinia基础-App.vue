<template>
    <div>
        <!-- 1.  -->
        pinia: {{Test.current}} -- {{Test.name}}

        <!-- 2.  -->
        <div>修改state里的值</div>
        <button @click="change">change</button>
        
        <!-- 3 -->
        <div>
            pinia: {{current}} == {{name}}
            <button @click="change3">结构Test对象</button>
        </div>

        <!-- 4 -->
        <div>
            <p>actions-user: {{Test.user}}</p>
            <button @click="change4">action的同步写法</button>
        </div>

        <div>
            <h2>action的异步{{Test.user2}}</h2>
            <button @click="change5">异步</button>
        </div>

        <!-- 6.1 -->
        <div>
            getters: {{Test.newName}}
        </div>

        <!-- 7 -->
        <div>
            <button @click="reset">reset</button>
        </div>
    </div>
</template>



<script setup lang="ts">
// 1. 
import {useTestStore} from './store/index.ts'

const Test = useTestStore()

// 2. 修改内容
const change = () => {
    // 2.1.    
    // Test.current++
    // console.log(Test.current)

    // 2.2
    // Test.$patch({
    //     current: 888,
    //     name: '娃娃'
    // })

    // 2.3
    // Test.$patch((state:any) => {
    //     state.current = 999,
    //     state.name = '娃娃'
    // })

    // 2.4  整个对象都修改，不方便
    // Test.$state = {
    //     current: 2000,
    //     name: '小满娃娃'
    // }

    // 2.5 通过调用action的方式
    Test.setCurrent(567)
}


// 3. 
// pinia结构不具有响应式
import {storeToRefs} from 'pinia';   // 添加响应式，包裹一层ref
const {current, name} = storeToRefs(Test)
const change3 = () => {
    // current.value++
    console.log(current, name)  
}


// 4. action的同步异步
const change4 = () => {
    Test.setUser()
}

// 5. action异步
const change5 = () => {
    Test.setUser2()
}

// 6. 一些api方法,
// 重置数据
const reset = () => {
    Test.$reset()
}

// 更改store就会触发
Test.$subscribe((args:any, state:any) => {
    console.log('=====>', args)  //包含一些新旧值，Key等等
    console.log('=====>', state)
}, {
    detached: true,
    deep: true,
    flush: 'post'
})

// 调用action会触发
Test.$onAction((args:any) => {
    args.after(()=>{  //都会在最后执行
        console.log('after')
    })
    // args.onError来捕获错误
    // args.args来捕获到传递的参数
    console.log(args)
}, true)  //第二个参数true, 这个组件销毁$onAction监听依然存活

</script>



<style scoped lang="less">

</style>
