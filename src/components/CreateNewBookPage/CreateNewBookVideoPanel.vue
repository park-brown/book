<template>
  <div class="videoPanelContainer">
    <div class="videoPanelInner">
      <div class="videoPanelInnerTitle">
        <n-p class="h6">
          视频资源库
        </n-p>
      </div>
      <div class="videoPanelInnerUploadContainer">
        <n-button type="info" class="uploadButton">
          上传本地视频
        </n-button>
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
      <div class="paginationContainer">
        <n-pagination v-model:page="page" :page-count="10" />
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
</script>
<style lang="scss" scoped>
.videoPanelContainer {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: $spacing * 4 $spacing * 8;
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
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 9rem;
  grid-template-columns: repeat(2, 16rem);
  gap: $spacing * 4 $spacing * 4;
}
.videoPanelInnerFilterOptions {
  width: 100%;
}
</style>
