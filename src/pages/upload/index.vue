<template>
  <div class="appbar">
    <UploadPageAppbar />
  </div>
  <div class="container">
    <div class="container__content">
      <div class="manualUpload">
        <n-p class="h1">
          创建电子书
        </n-p>
        <n-p class="h3">
          可选择创建方式，手动创建和上传创建
        </n-p>
        <n-button size="large" :bordered="false" class="manualUpload__btn" @click="goToBlankPdf">
          <i-akar-icons-book />
          <n-p class="subtitle-1">
            手动创建
          </n-p>
        </n-button>
      </div>
      <div class="dropUpload">
        <n-upload :on-change="handleUploadFileChange" :max="1">
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
      <div class="rule">
        <n-p class="subtitle-1">
          1、您的文件必须小于50 MB,并且页数不能超过400页；
        </n-p>
        <n-p class="subtitle-1">
          2、多个文件会被自动合并；
        </n-p>
        <n-p class="subtitle-1">
          3、文档上传须知条款；
        </n-p>
        <n-p class="subtitle-1">
          4、您上传的文档默认公开，请勿上传隐私文件，如确定上传，将自动备份在资源库
        </n-p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const handleUploadFileChange = (info: Object) => {
  console.log(info)
}
const router = useRouter()
const goToBlankPdf = () => {
  router.push('/createNewBook')
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @include laptop {
    max-width: 108rem;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
  @include desktop {
    max-width: 144rem;
    gap: $spacing * 4;
    &__content {
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: $spacing * 10;
      padding-top: $spacing * 10;
    }
  }
}
.appbar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: $spacing * 4;
  padding: $spacing * 4;
  box-shadow: $shadow-1;
}
.manualUpload {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 4;
  & .h3 {
    color: $grey-700;
  }
  &__btn {
    color: $red-400;
    border: 1px solid $red-400;
    border-radius: $border-radius;
    box-shadow: $shadow-1;
    transition: all $duration-standard $easing-easeInOut;
    &:hover,
    &:focus,
    &:active {
      color: $red-600;
      border: 1px solid $red-600;
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
  @include desktop {
    max-width: 73.6rem;
    margin: 0 auto;
  }
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
.red-400 {
  color: $red-400;
}
.rule {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: $spacing * 3;
  @include desktop {
    max-width: 73.6rem;
    margin: 0 auto;
  }
}
</style>
