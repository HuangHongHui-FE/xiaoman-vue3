// teleport传送组件

// teleport是一种能够将模板渲染至指定的DOM节点，不受父级style, v-show等属性的影响，
// 但是data,prop数据依然可以共用的技术
<template>
    <div style="color: red;" v-show="false">  <!-- v-if就会影响了,v-if优先级高 -->
        <!-- // to表示插入的位置  body, html都可, 这样就会插入到index.html文件里的div['teleport']那里 -->
        <teleport to=".teleport">  
            <div>loading</div>
        </teleport>
    </div>
</template>



<script setup lang="ts">

</script>



<style scoped lang="less">
</style>