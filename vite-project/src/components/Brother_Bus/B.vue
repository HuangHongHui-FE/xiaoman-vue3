<template>
    <div class="B">
        <div>B组件</div>
        {{flag}}
    </div>
</template>



<script setup lang="ts">
    type Props = {
        flag: boolean
    }

    defineProps<Props>()
</script>


<style scoped lang="less">
    .B{
        margin-top: 200px;
        width: 300px;
        height: 300px;
        background-color: rgb(5, 239, 239);
        color: rgb(255, 255, 255);
    }
</style>