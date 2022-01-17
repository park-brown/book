<template>
  <div v-if="ready" class="pictureWallItem">
    <!-- <n-image
      v-for="item in serverImageData.data"
      :key="item.fileId"
      width="160"
      height="90"
      :src="`${storageBaseUrl}/${item.filePath}`"
    /> -->
  </div>
</template>
<script setup lang="ts">
// import { parse } from '@vueuse/share'
const storageBaseUrl = import.meta.env.VITE_STORAGE_BASEURL
const getFileByTypeBaseUrl = import.meta.env.VITE_GETFILEBYTYPE_BASEURL
const { data, post } = useFetch(`${getFileByTypeBaseUrl}/?fileType=image`, {
  immediate: true,
  afterFetch(ctx) {
    // Modifies the response data
    ctx.data = JSON.parse(ctx.data)
    return ctx.data
  },
})
tryOnMounted(() => {
  post()
})

const ready = ref(false)
whenever(data, () => {
  ready.value = true
  console.log('data:', data.value)
})
</script>
<style lang="scss">

</style>
