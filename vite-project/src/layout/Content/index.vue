<script lang="ts" setup>
    
</script>


<template>
    <div class="content">
        <div class="content-items" :key="item" v-for="item in 100">{{item}}</div>
    </div>
</template>


<style scoped lang="less">
    .content{
        flex: 1;
        margin: 20px;
        border: 1px solid #ccc;

        overflow: auto;
        &-items{
            padding: 20px;
            border: 1px solid #ccc;
        }
    }
</style>