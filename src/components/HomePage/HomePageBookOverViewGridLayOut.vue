<template>
  <div class="Container">
    <BookOverViewGridCard />
    <BookOverViewGridCard />
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.Container {
    @include desktop {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, 18rem);
        grid-auto-rows: 24rem;
        gap: 4rem 7.5rem;
        overflow: hidden;
    }
}
</style>
