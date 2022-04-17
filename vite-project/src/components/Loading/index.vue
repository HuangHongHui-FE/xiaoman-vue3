<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">
            loading
        </div>
    </div>
</template>


<script setup lang="ts">
    import {ref} from 'vue'

    let isShow = ref<boolean>(false)

    const show = () => {
        isShow.value = true
    }

    const hide = () => {
        isShow.value = false
    }

    // 暴露出去，供index.ts读取
    defineExpose({
        isShow,
        show,
        hide
    })
</script>



<style scoped lang="less">
.loading{
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content{
        font-size: 30px;
        color: #fff;
    }
}
</style>