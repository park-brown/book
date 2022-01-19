<template>
  <div>
    readyonly
  </div>
</template>
<script setup lang="ts">
import { bookStore } from '~/composables/useBookStorage'
tryOnUnmounted(() => {
  bookStore.value.bookId = ''
  bookStore.value.bookName = ''
  bookStore.value.bookContent = ''
})
</script>
<style lang="scss" scoped>

</style>
