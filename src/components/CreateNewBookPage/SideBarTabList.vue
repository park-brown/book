<template>
  <div class="listItem">
    <slot name="icon" />

    <div class="listItem__text">
      <n-p class="body-2 listItem__text--paragraph">
        <slot name="text" />
      </n-p>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex:1;
    color:$grey-700;
}

</style>
