<template>
  <div class="videoPanelContainer">
    <div class="videoPanelInner">
      <div class="videoPanelInnerTitle">
        <n-p class="h6">
          视频资源库
        </n-p>
      </div>
      <div class="videoPanelInnerUploadContainer">
        <div class="uploadbuttonContainer">
          <n-upload accept="video/*" :show-file-list="false" @change="handleChange">
            <n-button type="info" class="uploadButton">
              上传本地视频
            </n-button>
          </n-upload>
        </div>
        <div class="videoPanelInnerFilterOptions">
          <n-tree-select
            :options="videoFilterOptions"
            default-value="全部"
            @update:value="handleUpdateValue"
          />
        </div>
        <div class="videoPanelInnerVideoWall">
          <create-new-book-video-panel-video-wall />
        </div>
        <n-pagination v-model:page="page" :page-count="99" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UploadFileInfo } from 'naive-ui'
const uploadBaseUrl = import.meta.env.VITE_UPLOADFILE_BASEURL
const videoFilterOptions = [{
  label: '全部',
  key: '全部',
}, {
  label: '最近',
  key: '最近',
}]
const handleUpdateValue = (...args: any) => {
  console.log(...args)
}
const page = ref(1)
const { data, execute, post } = useFetch(uploadBaseUrl, { immediate: false }).post().json()

const handleChange = ({ file }: { file: UploadFileInfo }) => {
  const uploadData = new FormData()
  uploadData.append('file', file.file)
  uploadData.append('fileType', 'video')
  post(uploadData)
  execute()
}
watch(data, () => {
  console.log('data:', data.value)
})
</script>
<style lang="scss" scoped>
.videoPanelContainer {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: $spacing * 4 $spacing * 8;
}
.videoPanelInnerUploadContainer {
  width: 100%;
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap:$spacing*4;
}
.videoPanelInner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 4;
}
.videoPanelInnerTitle {
  width: 100%;
  text-align: center;
  padding: 0 0 $spacing * 4 0;
  border-bottom: 1px solid $grey-400;
}

.videoPanelInnerVideoWall {
  width: 100%;
  flex:1;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 9rem;
  grid-template-columns: repeat(2, 16rem);
  gap: $spacing * 4 $spacing * 4;
}
.videoPanelInnerFilterOptions {
  width: 100%;
}
.uploadbuttonContainer {
  width:100%;
  display:flex;
  justify-content:center;
  & ::v-deep(.n-upload-trigger){
    width:100%;
    display:flex;
    justify-content:center
  }
}
.paginationContainer {
  width:100%;
}
.dropUpload {
  width: 100%;
  height:100%;
  &__btn {
    color: $white;
    background-color: $red-400;
    transition: all $duration-standard $easing-easeInOut;
    &:hover,
    &:focus,
    &:active {
      color: $white;
      background-color: $red-600;
      box-shadow: $shadow-2;
      transform: translateY($spacing * -0.5);
    }
    & ::v-deep(.n-button__content) {
      & > * {
        color: currentColor;
      }
      gap: $spacing * 3;
    }
    & ::v-deep(.n-base-wave) {
      display: none;
    }
  }
  & ::v-deep(.n-upload) {
    width: 100%;
    height:100%;
    border: 1px dashed $red-400;
  }
  & ::v-deep(.n-upload-trigger) {
    width: 100%;
    height:100%;
    border: 1px dashed $red-400;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  & ::v-deep(.n-upload-dragger) {
    width: 100%;
    height:100%;
    border: 1px dashed $red-400;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @include desktop {
    max-width: 73.6rem;
    margin: 0 auto;
  }
}
// .uploadDialog__stepTwo {
//   & ::v-deep(.n-card__content) {
//   display:flex;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap:$spacing * 4
//   }
// }
// .leftside {
//   width:100%;
//   max-width: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   gap:$spacing * 4
// }
// .rightside {
//   flex:1;
//   height:auto;
//   display:flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content:flex-start;
//   gap:$spacing * 4
// }
// .thumbnailContainer {
//   width:100%;
//   display:flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap:$spacing * 4
// }
// .thumbnailUploadAndDisplayContainer {
//   display:flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap:$spacing * 4
// }
</style>
