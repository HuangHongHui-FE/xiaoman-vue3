<template>
    <div>
        <table>
            <tr>
                <td>账号</td> 
                <td>
                    <input v-model="form.login" type="text">
                </td>
            </tr>
            <tr>
                <td>密码</td>
                <td>
                    <input v-model="form.pwd" type="password">
                </td>
            </tr>
        </table>
        <button @click="submit">登录</button>
    </div>
</template>


<script setup lang="ts">
    import {reactive, ref, onMounted, onUnmounted, onActivated, onDeactivated} from 'vue';

    const form = reactive({
        login: '',
        pwd: ''
    })

    const submit = () => {
        console.log(form)
    }

    // 只会再开始走一次
    onMounted(() => {
        console.log('onMounted')
    })

    onUnmounted(() => {
        console.log('onUnmounted')
    })

    // 激活
    onActivated(() => {
        console.log('onActivated')
    })

    // 暂时失活
    onDeactivated(() => {
        console.log('onDeactivated')
    })
</script>
<script lang="ts">
export default {
    name: 'Login'
}
</script>



<style scoped lang="less">

</style>