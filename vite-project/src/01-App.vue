<script setup lang="ts">
  const message:string = '我是真男人';
  const age:number = 18;
  const html:string = '<span>2222222222222</span>'

  const parent = () => {
    console.log('我是你爹')
  }


  type Style = {
    color: string,
    fontSize: string  // 注意写法
  }
  const style: Style = {
    color: 'blue',
    fontSize: '200px'
  }


  const Arr:Array<number> = [1,2,3,4,5]
  const ArrObj:Array<any> = [{name: 1}, {name: 2}, {name: 3}]


  import {ref} from 'vue'
  const inp = ref('test');
</script>

<template>
  <div>{{message}}</div>
  <div>{{age}}</div>
  <div v-html="html"></div>

  <button @click="parent">123</button>

  <div v-bind:style="style">
    样式
  </div>

  <div>
    <span :key="item" v-for="item in Arr">{{item}}</span>
  </div>

  <div>
    <span :key="item" v-for="(item, index) in ArrObj">{{item}}--{{index}};</span>
  </div>

  <input type="text" v-model="inp">
  <div>{{inp}}</div>
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
