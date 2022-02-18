<template>
  <div class="pageManagerSettingPanel">
    <div class="pageManagerSettingPanelInner">
      <div class="pageManagerSettingPanelInnerHeader">
        <n-p class="h6">
          基本信息
        </n-p>
      </div>
      <div class="pageManagerSettingPanelInnerTitle">
        <n-p class="h6">
          书名
        </n-p>
        <n-input v-model:value="title" type="text" />
      </div>
      <div class="pageManagerSettingPanelInnerDescription">
        <n-p class="h6">
          描述
        </n-p>
        <n-input v-model:value="description" type="textarea" />
      </div>
      <div class="pageManagerSettingPanelInnerBookCover">
        <n-p class="h6">
          上传封面
        </n-p>
        <div class="pageManagerSettingPanelInnerBookCoverUploadContainer">
          <n-upload
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            class="upload"
            list-type="image-card"
            :max="1"
          >
            点击上传
          </n-upload>
          <div class="pageManagerSettingPanelInnerBookCoverUploadLimit">
            <n-p class="body-2">
              支持格式：JPG/PNG/GIF/JPEG
            </n-p>
            <n-p class="body-2">
              推荐尺寸：150*30像素
            </n-p>
            <n-p class="body-2">
              最大尺寸：500*500像素
            </n-p>
          </div>
        </div>
      </div>
      <div class="footer">
        <n-button>保存</n-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref()
const description = ref()
</script>
<style lang="scss" scoped>
.pageManagerSettingPanel {
    width: calc(100% - 32px);
    height:calc(100% - 32px);
    margin: 0 auto;
    background-color: $white;
    border-radius:$border-radius*2;
    box-shadow: $shadow-2;
}
.pageManagerSettingPanelInner {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:$spacing*4;
    padding:$spacing*4 $spacing*4;
}
.pageManagerSettingPanelInnerHeader {
    width:100%;
}
.pageManagerSettingPanelInnerTitle {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    gap:$spacing*4;
}
.pageManagerSettingPanelInnerDescription {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    gap:$spacing*4;
}
.pageManagerSettingPanelInnerBookCover {
     width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    gap:$spacing*4;
}
.pageManagerSettingPanelInnerBookCoverUploadContainer {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:$spacing*4;
}
.upload {
    flex-basis:15rem;
    height:15rem
}
.pageManagerSettingPanelInnerBookCoverUploadLimit {
    flex:1;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:$spacing*4;
}
.footer {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:$spacing*4;
}
</style>
