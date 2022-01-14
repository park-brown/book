<template>
  <div class="Container">
    <BookOverViewFlexCard />
    <BookOverViewFlexCard />
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.Container {
    @include desktop {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 4rem;
        overflow: hidden;
    }
}

</style>
