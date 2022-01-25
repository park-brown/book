<template>
  <div class="container">
    <div id="area">
      <n-button @click="store.increment">
        click
      </n-button>
      <p>count:{{ store.counter }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useEbookStore } from '~/stores/eBook'
const store = useEbookStore()

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width:1280px;
  height:87.5vh;
  margin: 4rem auto;
  background-color: $white;
  box-shadow: $shadow-4;
  border-radius:$border-radius*2;
  padding:$spacing*8;
  overflow: hidden;
}
</style>
