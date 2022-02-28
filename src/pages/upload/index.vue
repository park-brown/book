<template>
  <div class="appbar">
    <UploadPageAppbar />
  </div>
  <div class="container">
    <div class="inner-container">
      <div class="inner-header">
        <n-p class="h2">
          作品集
        </n-p>
        <n-button size="small" type="info" @click="showModal = true">
          创建
        </n-button>
        <UploadPageCreateBookDialog :show-modal="showModal" @close:modal="showModal = false" @open:desc-modal="openDescModal" />
        <UploadPageDescriptionDialog :show-modal="showDescModal" @close:desc-modal="showDescModal = false" />
      </div>

      <n-tabs type="card">
        <n-tab-pane name="drafts" tab="草稿箱">
          <DraftsDataTable />
        </n-tab-pane>
        <n-tab-pane name="published" tab="已发布">
          <PublishedDataTable />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import PublishedDataTable from '~/components/UploadPage/PublishedDataTable.vue'
const documentTitle = useTitle()
documentTitle.value = '上传页面'
const showModal = ref(false)
const showDescModal = ref(false)
const openDescModal = () => {
  showModal.value = false
  showDescModal.value = true
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @include desktop {
    max-width: 144rem;
    margin:0 auto
  }
  @include laptop {
    max-width: 108rem;
    margin:0 auto
  }
}
.inner-container {
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:flex-start;
  gap:$spacing *4;
  padding:$spacing*8 $spacing*4;
}
.inner-header {
  width:100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
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

</style>
