<template>
  <div class="audioPanelContainer">
    <div class="audioPanelInner">
      <div class="audioPanelInnerTitle">
        <n-p class="h6">
          音频资源库
        </n-p>
      </div>
      <div class="audioPanelInnerUploadContainer">
        <n-upload accept="audio/*" :show-file-list="false">
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
      <div class="audioPanelInnerPicTureWall">
        <div class="image">
          123
        </div>
        <div class="image">
          123
        </div>
        <div class="image">
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

.audioPanelInnerPicTureWall {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 9rem;
  grid-template-columns: repeat(2, 16rem);
  gap: $spacing * 4 $spacing * 4;
}
.audioPanelInnerFilterOptions {
  width: 100%;
}
</style>
