<script setup lang="ts">
    import Dialog from './components/Dialog/index.vue'

    import {reactive, ref} from 'vue'
    let name = ref('footer')
</script>


<template>
    <!-- 首字母必须大写 -->
    <Dialog>
        <!-- 具名插槽 -->
        <!-- <template v-slot:header> -->
            <!-- 简写 -->
        <template #header>
            <div>
                上
            </div>
        </template>
        
        <!-- 默认插槽 -->
        <!-- <template v-slot="{data, index}"> -->
        <!-- 简写 -->
        <template #default="{data, index}">
            <div>
                {{data}} -- {{index}}
            </div>
        </template>
        <template v-slot:footer>
            <div>
                下
            </div>
        </template>

        <!-- 动态插槽, 通过动态改name -->
        <template #[name]>
            <div>我在哪</div>
        </template>
    </Dialog>
</template>


<style scoped>

</style>