<template>
  <div class="audioPanelContainer">
    <div class="audioPanelInner">
      <div class="audioPanelInnerTitle">
        <n-p class="h6">
          音频资源库
        </n-p>
      </div>
      <div class="audioPanelInnerUploadContainer">
        <n-upload accept="audio/*" :show-file-list="false" @change="handleChange">
          <n-button type="info" class="uploadButton">
            上传本地音频
          </n-button>
        </n-upload>
      </div>
      <div class="audioPanelInnerFilterOptions">
        <n-tree-select
          :options="audioFilterOptions"
          default-value="全部"
          @update:value="handleUpdateValue"
        />
      </div>
      <div class="audioPanelInnerAudioWall">
        <create-new-book-audio-panel-inner-audio-wall />
      </div>
      <div class="paginationContainer">
        <n-pagination v-model:page="page" :page-count="10" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UploadFileInfo } from 'naive-ui'
const audioFilterOptions = [{
  label: '全部',
  key: '全部',
}, {
  label: '最近',
  key: '最近',
}]
const handleUpdateValue = (...args: any) => {
  console.log(...args)
}
const uploadBaseUrl = import.meta.env.VITE_UPLOADFILE_BASEURL
const { data, execute, post } = useFetch(uploadBaseUrl, { immediate: false }).post().json()
const handleChange = ({ file }: { file: UploadFileInfo }) => {
  const uploadData = new FormData()
  uploadData.append('file', file.file)
  uploadData.append('fileType', 'audio')
  post(uploadData)
  execute()
}

const page = ref(1)
</script>
<style lang="scss">
.audioPanelContainer {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: $spacing * 4 $spacing * 8;
}
.audioPanelInner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 4;
}
.audioPanelInnerTitle {
  width: 100%;
  text-align: center;
  padding: 0 0 $spacing * 4 0;
  border-bottom: 1px solid $grey-400;
}

.audioPanelInnerAudioWall {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 4rem;
  grid-template-columns: repeat(1, 33.8rem);
  gap: 2.1rem;
}
.audioPanelInnerFilterOptions {
  width: 100%;
}
</style>
