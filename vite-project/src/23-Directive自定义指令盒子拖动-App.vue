<template>
    <div class="box" v-move>
        <div class="header">

        </div>
        <div>
            内容
        </div>
    </div>
</template>


<script setup lang="ts">
import {ref, Directive, DirectiveBinding} from 'vue';

const vMove:Directive<any, void> = (el:HTMLElement, bingding:DirectiveBinding) => {  // 没有返回值，定义为void
    // 获取到header
    let moveElement:HTMLDivElement = el.firstElementChild as HTMLDivElement;  // 类型断言

    const mouseDown = (e:MouseEvent) => {
        // 记录起始按下时的值
        // console.log(e)
        let X = e.clientX - e.offsetX;
        let Y = e.clientY - e.offsetY;
        const move = (e: MouseEvent) => {
            // console.log(e)
            el.style.left = e.clientX - X + 'px';
            el.style.top = e.clientY - Y + 'px';
        }

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })
    }
    moveElement.addEventListener('mousedown', mouseDown)
}
</script>



<style scoped lang="less">
.box{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 3px solid black;
    .header{
        height: 20px;
        background-color: aquamarine;
    }
}
</style>