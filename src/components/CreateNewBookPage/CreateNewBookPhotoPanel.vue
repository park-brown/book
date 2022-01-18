<template>
  <div class="photoPanelContainer">
    <div class="photoPanelInner">
      <div class="photoPanelInnerTitle">
        <n-p class="h6">
          图片资源库
        </n-p>
      </div>
      <div class="photoPanelInnerUploadContainer">
        <n-upload accept="image/*" :show-file-list="false" @change="handleChange">
          <n-button type="info" class="uploadButton">
            上传本地图片
          </n-button>
        </n-upload>
      </div>
      <div class="photoPanelInnerFilterOptions">
        <n-tree-select
          :options="imageFilterOptions"
          default-value="全部"
          @update:value="handleUpdateValue"
        />
      </div>
      <div class="photoPanelInnerPicTureWall">
        <create-new-book-photo-panel-picture-wall />
      </div>
      <div class="paginationContainer">
        <n-pagination v-model:page="page" :page-count="10" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UploadFileInfo } from 'naive-ui'
import { useFetch } from '@vueuse/core'
const uploadBaseUrl = import.meta.env.VITE_UPLOADFILE_BASEURL
const imageFilterOptions = [{
  label: '全部',
  key: '全部',
}, {
  label: '最近',
  key: '最近',
}]
const handleUpdateValue = (...args: any) => {
  console.log(...args)
}

const { data, execute, post } = useFetch(uploadBaseUrl, { immediate: false }).post().json()
const handleChange = ({ file }: { file: UploadFileInfo }) => {
  const uploadData = new FormData()
  uploadData.append('file', file.file)
  uploadData.append('fileType', 'image')
  post(uploadData)
  execute()
}

const page = ref(1)
</script>
<style lang="scss" scoped>
.photoPanelContainer {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: $spacing * 4 $spacing * 8;
}
.photoPanelInner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 4;
}
.photoPanelInnerTitle {
  width: 100%;
  text-align: center;
  padding: 0 0 $spacing * 4 0;
  border-bottom: 1px solid $grey-400;
}

.photoPanelInnerPicTureWall {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 9rem;
  grid-template-columns: repeat(2, 16rem);
  gap: $spacing * 4 $spacing * 4;
}
.photoPanelInnerFilterOptions {
  width: 100%;
}
</style>
