<template>
    <div class="dialog" v-if="modelValue">
        <div class="dialog-header">
            <div>标题---{{title}}</div>
            <div @click="close">X</div>
        </div>
        <div class="dialog-content">内容</div>
    </div>
</template>



<script setup lang="ts">
    type Props = {
        modelValue: boolean,
        title: string,
        modelModifiers?: {
            xiaoman: string
        }
    }
    const PropsData = defineProps<Props>()


    const emit = defineEmits(['update:modelValue', 'update:title'])
    const close = () => {
        // 这样就会直接影响父组件的flag
        emit('update:modelValue', false)
        emit('update:title', '我是一只猫')

        console.log(PropsData.modelModifiers)
    }
</script>



<style scoped lang="less">
.dialog{
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &-header{
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    &-content{
        padding: 10px;
    }
}
</style>
