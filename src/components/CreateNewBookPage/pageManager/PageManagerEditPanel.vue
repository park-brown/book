<template>
  <div class="pageManagerEditPanelContainer">
    <ThumbNailItem v-for="item in bookContent" :key="item.key" :page="item.page" />
  </div>
</template>
<script setup lang="ts">
import { bookStore } from '~/composables/useBookStorage'

const bookContent = bookStore.value.bookContent

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

</style>
