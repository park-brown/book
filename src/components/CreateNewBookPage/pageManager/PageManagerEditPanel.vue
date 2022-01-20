<template>
  <div class="pageManagerEditPanelContainer">
    <div class="paper" />
  </div>
</template>
<script setup lang="ts">

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
.paper {
    width:21rem;
    height:29.7rem;
    background-color:$white;
    border-radius:$border-radius*2;
    box-shadow: $shadow-2
}
</style>
