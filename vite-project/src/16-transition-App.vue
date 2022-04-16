<template>
<!-- 1.  -->
    <div class="con">
        <button @click="flag = !flag">switch</button>
        <transition name="fade">
            <div v-if="flag" class="box">
            </div>
        </transition>
    </div>

<!-- 2,.   这样主要是可以结合一些第三方的animate, 也可以自定义名字-->
    <div class="con">
        <button @click="flag2 = !flag2">switch</button>
        <transition enter-to-class="e-to" enter-active-class="e-active" enter-from-class="e-from">
            <div v-if="flag2" class="box"></div>
        </transition>
    </div>

<!-- 3. animate.css     500ms   :duration="500" -->
    <div class="con">
        <button @click="flag3 = !flag3">switch</button>
        <transition :duration="{enter: 50, leave: 500}"  enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <div v-if="flag3" class="box"></div>
        </transition>
    </div>


<!-- 4. transition生命周期 -->
    <div class="con">
        <button @click="flag4 = !flag4">switch</button>
        <transition
            @before-enter="EnterFrom"
            @enter="EnterAvtive"
            @after-enter="EnterTo"
            @enter-cancelled="EnterCancel"
            @before-leave="LeaveFrom"
            @leave="Leave"
            @after-leave="LeaveTo"
            @leave-cancelled="LeaveCancel"
        >
            <div v-if="flag4" class="box"></div>
        </transition>
    </div>


<!-- 5. GSAP -->
    <div class="con">
        <button @click="flag5 = !flag5">switch</button>
        <transition
            @before-enter="EnterFrom5"
            @enter="EnterAvtive5"
            @leave="Leave5"
        >
            <div v-if="flag5" class="box"></div>
        </transition>
    </div>

<!-- 6. appear属性, 初次挂在页面上时就执行 -->
    <div class="con">
        <button @click="flag6 = !flag6">switch</button>
        <transition
            appear
            appear-from-class="from"
            appear-active-class="active"
            appear-to-class="to"
        >
            <div v-if="flag6" class="box"></div>
        </transition>
    </div>


<!-- 7. transitionGroup： 用时渲染整个列表，在使用v-for的情况下，会使用<transition-group>, 其他的生命周期4，3，2的功能也都有 -->
    <div class="con">
        <div class="wraps">
            <!-- 页面中就会多加一层section -->
            <transition-group tag="section">
                <div :key="item" v-for="item in list" class="item">{{item}}</div>
            </transition-group>
        </div>
    </div>


<!-- 8. transitionGroup平面过度动画 -->
    <div>
        <button @click="random">random</button>
        <transition-group class="wraps8" tag="div" move-class="mmm">
            <div class="item8" :key="item.id" v-for="item in list8">
                {{item.number}}
            </div>
        </transition-group>
    </div>


<!-- 9 .状态过度 -->
    <div>
        <input v-model="num.current" step="20" type="number">
        <div>
            {{ num.tweenedNumber.toFixed(0) }}
        </div>
    </div>

</template>







<script setup lang="ts">
import 'animate.css'

import {ref, reactive, watch} from 'vue';

let flag = ref<boolean>(true)
let flag2 = ref<boolean>(true)
let flag3 = ref<boolean>(true)
let flag4 = ref<boolean>(true)
let flag5 = ref<boolean>(true)
let flag6 = ref<boolean>(true)

// 4. 
// 注意参数
const EnterFrom = (el:Element) => {
    console.log('进入之前');
}
const EnterActive = (el:Element, done:Function) => {
    console.log('过度曲线');
    setTimeout(() => {
        done();  // 执行done才会过度完成
    }, 3000)
}
const EnterTo = (el:Element) => {
    console.log('过度完成');
}
const EnterCancel = () => {
    console.log('过度效果被打断');
}

const LeaveFrom = () => {
    console.log('离开之前')
}

const Leave = () => {
    console.log('离开过度曲线')
}

const LeaveTo = () => {
    console.log('离开完成')
}

const LeaveCancel = () => {
    console.log('离开的过度曲线被打断-----')
}


// 5. GSAP的使用
import gsap from 'gsap'

const EnterFrom5 = (el:Element) => {
    gsap.set(el, {
        width: 0,
        height: 0
    })
}

const EnterActive5 = (el:Element, done:gsap.Callback) => {
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done  // 过度完的回调执行
    })
}

const Leave5 = (el:Element, done:gsap.Callback) => {
    gsap.to(el, {
        width: 0,
        height: 0,
        onComplete: done  // 过度完的回调执行
    })
}


// 7. 
const list = reactive<number[]>([1,2,3,4,5])


// 8. 
import _ from 'lodash';
// 生成数据
    // 注意这里跟使用 new Array(81) 的不同之处
let list8 = ref(Array.apply(null, {length: 81} as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))  // 第二个参数只能为数组断言下
console.log(list8.value)


const random = () => {
    list8.value = _.shuffle(list8.value)
}



// 9. 状态过度
const num = reactive({
    current: 0,
    tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal
    })
})

</script>







<style lang="less">
// 1.
.con{
}
    .box{
        width: 100px;
        height: 100px;
        background-color: aqua;
    }
    .fade-enter-from {
        width: 0;
        height: 0;
    }
    .fade-enter-active {
        transition: all 1.5s ease;
    }
    .fade-enter-to {
        width: 200px;
        height: 200px;
    }
    .fade-leave-from {
        width: 200px;
        height: 200px;
    }
    .fade-leave-active {
        transition: all 5s ease;
    }
    .fade-leave-to {
        width: 0;
        height: 0;
    }



// 2. 
    .e-from {
        width: 0;
        height: 0;
    }
    .e-active {
        transition: all 1.5s ease;
    }
    .e-to {
        width: 200px;
        height: 200px;
    }


// 6. 
    .from {
        width: 0;
        height: 0;
    }
    .active {
        transition: all 2s ease;
    }
    .to {
        width: 200px;
        height: 200px;
    }


// 7. 
    .wraps {
        display: flex;
        flex-wrap: wrap;
        word-break: break-all;
        border: 1px solid #ccc;

        .item{
            margin: 10px;
        }
    }


// 8.
    .wraps8 {
        display: flex;
        flex-wrap: wrap;
        width: calc(25px * 10 + 9px);
        .item8{
            width: 25px;
            height: 25px;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    } 
    .mmm{
        transition: all 1s;
    }
</style>
