<script setup lang="ts">
    import {computed, ref, reactive} from 'vue';
    

    // 1.
    let firstName = ref('');
    let lastName = ref('');

    const name = computed(() => {
        return firstName.value + '-----' + lastName.value
    })

    // 2.第二种写法
    let firstName2 = ref('');
    let lastName2 = ref('');

    const name2 = computed({
        get() {
            return firstName2.value + lastName2.value
        },
        set() {
            firstName2.value + lastName2.value
        }
    })

    // 3。购物车案例
    // 总价
    let $total = ref(0)

    type Shop = {
        name: string,
        num: number,
        price: number
    }

    const data = reactive<Shop[]>([  //注意Shop[]
        {
            name: '小满的裤子',
            num: 1,
            price: 200
        },
        {
            name: '小满的衣服',
            num: 1,
            price: 200
        },
        {
            name: '小满的丝袜',
            num: 1,
            price: 300
        }
    ])

    // 点击加减号
    const addAndSub = (item: Shop, type:boolean):void => {
        if(item.num > 1 && !type){
            item.num --
        }
        if(item.num < 99 && type){
            item.num++
        }
        // total()
    }

    const del = (index: number) => {
        data.splice(index, 1)
        // total()
    }

    // 计算总价
    $total = computed<number>(() => {
        return data.reduce((prev, next) => {
            return prev + (next.num * next.price)
        }, 0)
    })
    // const total = () => {
    //     $total.value = data.reduce((prev, next) => {
    //         return prev + (next.num * next.price)
    //     }, 0)
    // }
    // total()
</script>

<template>
    <input v-model="firstName" type="text">
    <input v-model="lastName" type="text">
    <div>{{name}}</div>

    <input v-model="firstName2" type="text">
    <input v-model="lastName2" type="text">
    <div>{{name2}}</div>

    <!-- 购物车 -->
    <div>购物车</div>
    <div>
        <table border style="width: 800px">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>数量</th>
                    <th>单价</th>
                    <th>操作</th>
                </tr>
            </thead>

            <tbody>
                <tr :key="index" v-for="(item, index) in data">
                    <td align="center">{{item.name}}</td>
                    <td align="center">
                        <button @click="addAndSub(item, false)">-</button>
                        {{item.num}}
                        <button @click="addAndSub(item, true)">+</button>
                    </td>
                    <td align="center">{{item.num * item.price}}</td>
                    <td align="center">
                        <button @click="del(index)">删除</button>
                    </td>
                </tr>
            </tbody>

            <tfoot>
                <td>总价: 500</td>
                <td>总价: 500</td>
                <td>总价: 500</td>
                <td align="center">总价: {{$total}}</td>
            </tfoot>
        </table>
    </div>
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
