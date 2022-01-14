<template>
  <div class="appbar__header">
    <div class="logo">
      <LogoButton />
    </div>
    <div class="userinfo">
      <n-avatar
        size="small"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png"
      />
      <n-p class="h6">
        admin
      </n-p>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.appbar__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 $spacing * 4;
    & .logo {
        cursor: pointer;
        box-shadow: $shadow-1;
        border-radius: $border-radius * 2;
        &:hover {
            box-shadow: $shadow-2;
        }
    }
    & .userinfo {
        display: flex;
        padding: $spacing * 2 $spacing * 4;
        align-items: center;
        justify-content: flex-start;
        gap: $spacing * 4;
    }
}
</style>
