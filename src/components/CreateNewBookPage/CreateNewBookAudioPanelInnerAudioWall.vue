<template>
  <template v-if="!ready">
    <n-skeleton v-for="(__,idx) in skeletonArray" :key="idx" width="160" height="40px" round />
  </template>
  <div v-if="ready" class="videoWallItem">
    <figure v-for="item in data" :key="item.fileId" class="videoWallItem__figure">
      <audio
        class="videoWallItem__audio"
        controls
        :src="`${storageBaseUrl}/${item.filePath}`"
      />
      <figcaption class="videoWallItem__figureCaption subtitle-1">
        {{ item.fileName }}
      </figcaption>
    </figure>
  </div>
</template>
<script setup lang="ts">
const storageBaseUrl = import.meta.env.VITE_STORAGE_BASEURL
const getFileByTypeBaseUrl = import.meta.env.VITE_GETFILEBYTYPE_BASEURL
const skeletonArray = Array.from(Array(9).keys())

const { data, post } = useFetch(`${getFileByTypeBaseUrl}/?fileType=audio`, {
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
})
</script>
  <style lang="scss" scoped>
    .videoWallItem__audio {
    filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
    width: 100%;
    height: 24px;
    }
    .videoWallItem__figure {
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    }
    .videoWallItem__figureCaption{
    }
  </style>
