<script setup lang="ts">
    import {toRef, reactive, toRefs, toRaw} from 'vue'

    // 1.
    const obj = {
        foo: 1,
        bar: 1
    }

    const state = toRef(obj, 'bar');

    const change = () => {
        state.value++

        console.log('---原始对象,', obj);
        console.log('---引用对象,', state);  // 会影响原始与引用对象的改变，但是不会更新视图
    }


    // 2.
    const obj2 = reactive({
        foo: 1,
        bar: 1
    })

    const state2 = toRef(obj2, 'bar');

    const change2 = () => {
        state2.value++
        console.log('---原始对象,', obj2);
        console.log('---引用对象,', state2);
    }


    // 3. toRefs
    let obj3 = reactive({
        foo3: 1,
        bar3: 1
    })

    // let {foo3, bar3} = obj3;
    let {foo3, bar3} = toRefs(obj3);  // 这样解构出来的是响应式的
    console.log(foo3, bar3);


    // 4. toRaw  //响应式对象变为原始对象
    let obj4 = reactive({
        foo: 1,
        bar: 1
    })

    const raw = toRaw(obj4)
    console.log('响应式的', obj4)
    console.log('非响应式的', raw)
</script>

<template>
    <div>
        <button @click="change">gaibian</button>
    </div>
    <div>{{state}}</div>

    <div>
        <button @click="change2">gaibian</button>
    </div>
    <div>{{state2}}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
