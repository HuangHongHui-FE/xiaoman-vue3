<script setup lang="ts">
    import {reactive, readonly, shallowReactive} from 'vue';  // 实现复杂类型的响应式

    // let obj = reactive({
    //   name: '小满'
    // })
    // obj.name = '大满'

    // 1.
    let message1 = reactive<number[]>([])

    setTimeout(() => {
      let arr = [1,2,3,4];
      // message = arr;  //这种不能变成响应式

      message1.push(...arr)
      console.log(message1)
    }, 2000);


    // 2.
    type O = {
      list: number[];
    }
    let message2 = reactive<O>({
      list: []
    })

    setTimeout(() => {
      message2.list = [1,2,3,4]
      console.log(message2)
    }, 2000)


    // 3. readonly   拷贝对象将其设置为只读的
    let person = reactive({
      count: 1
    })

    person.count++

    let copy = readonly(person);
    // copy.count++  // 会有警告


    // 4. shallowReactive  只第一层响应式
    let shallow = shallowReactive({
      test: '我是小满',
      nav: {
        bar: {
          name: '我是谁，我在那'
        }
      }
    })

    const change1 = () => {
      shallow.test = '我被修改了'
    }
    

    const change2 = () => {
      shallow.nav.bar.name = '我被修改了'
      console.log(shallow.nav.bar.name)
    }
    // change1()
    // change2()  //这种直接调的深层次也可以改，等到dom完成后再修改深层次，修改不了

</script>

<template>
  <div>arr: {{message1}}</div>
  <div>arr: {{message2.list}}</div>
  <!-- <div>obj: {{obj}}</div> -->
  <div>{{shallow.test}}</div>
  <div>{{shallow.nav.bar.name}}</div>
  <button @click="change1">change1</button>
  <button @click="change2">change2</button>
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
