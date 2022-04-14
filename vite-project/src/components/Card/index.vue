// 全局组件
<script lang="ts" setup> 
    type Prop = {
        content?: string 
    }
    defineProps<Prop>()
</script>


<template>
    <div class="card">
        <div class="card-header">
            <div>主标题</div>
            <div>副标题</div>
        </div>
        <div v-if="content" class="card-content">
            {{content}}
        </div>
    </div>
</template>



<style scoped lang="less">
@border: #ccc;
.card{
    border: 1px solid @border;

    &-header{
        display: flex;
        justify-content: space-around;
        padding: 10px;
        border-bottom: 1px solid @border;
    }
    &-content {
        padding: 10px;
    }
    &:hover{
        box-shadow: 0 0 10px @border;
    }
}
</style>