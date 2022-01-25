<template>
  <div class="pageManagerEditPanelContainer">
    <n-button type="info" @click="page++">
      添加页面
    </n-button>
    <n-pagination v-model:page="page" class="paginationContainer" :page-count="100" show-quick-jumper />
  </div>
</template>
<script setup lang="ts">
const page = ref(1)
</script>
<style lang="scss" scoped>
.pageManagerEditPanelContainer {
    width:100%;
    height:100%;
    overflow:auto;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:$spacing*4;
}
.paginationContainer {
  width:100%;
  position:relative;
  & ::v-deep(.n-pagination-quick-jumper) {
      position:absolute;
      bottom:-40px;
      left:50%;
      transform:translateX(-50%)
  }
}
</style>
