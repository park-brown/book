<template>
  <div class="userinfo">
    <n-avatar size="small" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png" />
    <n-p class="h6">
      admin
    </n-p>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">
.userinfo {
    display: flex;
    padding: $spacing * 2 $spacing * 4;
    align-items: center;
    cursor:pointer;
    justify-content: flex-start;
    gap: $spacing * 4;
    box-shadow: $shadow-1;
  }
</style>
