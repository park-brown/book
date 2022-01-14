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
          <n-button type="info" class="uploadButton" @click="showUploadStepOneModal = true">
            上传本地视频
          </n-button>
          <n-modal v-model:show="showUploadStepOneModal" class="uploadLocalVideoModal">
            <n-card
              style="width: 736px;"
              :z-index="1500"
              title="上传视频"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
              <template #header-extra>
                <n-button>
                  <template #icon>
                    <i-bi-x />
                  </template>
                </n-button>
              </template>
              <div class="dropUpload">
                <n-upload :on-change="handleUploadFileChange" :max="1" accept="video/*" :show-file-list="false">
                  <n-upload-dragger>
                    <div style="margin-bottom: 12px;">
                      <n-button size="large" class="dropUpload__btn">
                        <i-ant-design-cloud-upload-outlined />
                        <n-p class="subtitle-1">
                          点击上传
                        </n-p>
                      </n-button>
                    </div>
                    <n-p class="subtitle-1">
                      可将
                      <span class="red-400">PDF</span>文档拖曳此区域上传
                    </n-p>
                    <n-p class="subtitle-1">
                      可上传多个文件合并为一本书
                    </n-p>
                  </n-upload-dragger>
                </n-upload>
              </div>
              <template #footer>
                请勿侵犯他人的版权或隐私权
              </template>
            </n-card>
          </n-modal>
          <n-modal v-model:show="showUploadStepTwoModal" class="uploadLocalVideoModal">
            <n-card
              style="width: 736px;"
              :z-index="1500"
              title="上传视频"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
              <template #header-extra>
                <n-button>
                  <template #icon>
                    <i-bi-x />
                  </template>
                </n-button>
              </template>
              <div class="dropUpload">
                <n-upload :on-change="handleUploadFileChange" :max="1" accept="video/*" :show-file-list="false">
                  <n-upload-dragger>
                    <div style="margin-bottom: 12px;">
                      <n-button size="large" class="dropUpload__btn">
                        <i-ant-design-cloud-upload-outlined />
                        <n-p class="subtitle-1">
                          点击上传
                        </n-p>
                      </n-button>
                    </div>
                    <n-p class="subtitle-1">
                      可将
                      <span class="red-400">PDF</span>文档拖曳此区域上传
                    </n-p>
                    <n-p class="subtitle-1">
                      可上传多个文件合并为一本书
                    </n-p>
                  </n-upload-dragger>
                </n-upload>
              </div>
              <template #footer>
                请勿侵犯他人的版权或隐私权
              </template>
            </n-card>
          </n-modal>
        </div>
        <div class="videoPanelInnerFilterOptions">
          <n-tree-select
            :options="videoFilterOptions"
            default-value="全部"
            @update:value="handleUpdateValue"
          />
        </div>
        <div class="videoPanelInnerPicTureWall">
          <div class="video">
            123
          </div>
          <div class="video">
            123
          </div>
          <div class="video">
            123
          </div>
        </div>

        <n-pagination v-model:page="page" :page-count="99" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

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
const showUploadStepOneModal = ref(false)
const showUploadStepTwoModal = ref(false)
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

.videoPanelInnerPicTureWall {
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
  justify-content:center
}
.paginationContainer {
  width:100%;
}
.dropUpload {
  width: 100%;
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
  & ::v-deep(.n-upload-trigger) {
    width: 100%;
    border: 1px dashed $red-400;
  }
  @include desktop {
    max-width: 73.6rem;
    margin: 0 auto;
  }
}
</style>
