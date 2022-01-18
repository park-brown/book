<template>
  <template v-if="!ready">
    <n-skeleton v-for="(idx) in skeletonArray" :key="idx" width="160" height="90px" />
  </template>
  <template v-if="ready">
    <n-image
      v-for="item in data"
      :key="item.fileId"
      width="160"
      height="90"
      :src="`${storageBaseUrl}/${item.filePath}`"
    />
  </template>
</template>
<script setup lang="ts">
import type { UseFetchReturn } from '@vueuse/core'
import type { Ref } from 'vue-demi'
const storageBaseUrl = import.meta.env.VITE_STORAGE_BASEURL
const getFileByTypeBaseUrl = import.meta.env.VITE_GETFILEBYTYPE_BASEURL
const skeletonArray = Array.from(Array(10).keys())
interface Data {
  createBy: string
  createDate: Date
  fileExtension: string
  fileId: string
  fileName: string
  filePath: string
  fileSize: number
  fileType: string
  id: string
  isValid: boolean
  md5: string
  updateBy: string
  updateDate: Date
}
const { data, post }: {data: Ref<Data[]>; post: () => UseFetchReturn<T> } = useFetch(`${getFileByTypeBaseUrl}/?fileType=image`, {
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
<style lang="scss">

</style>
