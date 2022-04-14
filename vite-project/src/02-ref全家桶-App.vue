<script lang="ts" setup>
    import {ref, Ref, isRef, shallowRef, triggerRef, customRef} from 'vue';

    // let message = ref<string | number>('小满');   //联合类型, 返回的是一个对象
    let message:Ref<string> = ref('小满');  // 这两种方式都可

    let notRef:number = 1


    let msg = shallowRef({
        name: '小满'
    })

    function MyRef<T>(value: T){  // 定义一个泛型T
        return customRef((trank, trigger) => {  // 一个用来收集依赖，一个用来触发dom更新
            return {
                get() {
                    trank();
                    return value;
                },
                set(newVal: T) {
                    console.log('set');
                    value = newVal;
                    // 场景：调接口之后在进行触发
                    trigger();
                }
            }
        })
    }

    let custom = MyRef<string>('小满')

    const changeMsg = () => {
        message.value = 'change msg';
        // console.log(message)
        console.log(isRef(message))  // 判断是不是Ref对象
        console.log(isRef(notRef))

        msg.value.name = '大满'  // 单独用不是响应式的,但是跟ref一块用，都会变
        // msg.value = { name: '大满' }

        triggerRef(msg)  // 强制的去更新dom，配合shallowRef
        
        custom.value = '大满'
    }

</script>



<template>
    <div>
        <button @click="changeMsg">change</button>
        <div>{{message}}</div>
        <div>{{msg}}</div>
        <div>{{custom}}</div>
    </div>
</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>