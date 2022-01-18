<template>
  <div v-if="!ready" class="videoWallItem">
    <n-skeleton v-for="(__,idx) in skeletonArray" :key="idx" width="160" height="90px" round />
  </div>
  <div v-if="ready" class="videoWallItem">
    <video controls width="160" height="90">
      <source
        v-for="item in data"
        :key="item.fileId"
        :src="`${storageBaseUrl}/${item.filePath}`"
        type="video/webm"
      >
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
</template>
<script setup lang="ts">
const storageBaseUrl = import.meta.env.VITE_STORAGE_BASEURL
const getFileByTypeBaseUrl = import.meta.env.VITE_GETFILEBYTYPE_BASEURL
const skeletonArray = Array.from(Array(9).keys())

const { data, post } = useFetch(`${getFileByTypeBaseUrl}/?fileType=video`, {
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
