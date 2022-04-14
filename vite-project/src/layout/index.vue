<script lang="ts" setup>
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Content from "./Content/index.vue";
</script>


<template>
  <div class="layout">
    <Menu></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>


<style scoped lang="less">
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;

    &-right {  // less的作用
        flex: 1;
        display: flex;  // 为了让右边的两部分占满
        flex-direction: column;
    }
}
</style>