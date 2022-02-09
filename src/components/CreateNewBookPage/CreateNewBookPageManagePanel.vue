<template>
  <div class="pageManagerContainer">
    <n-tabs type="line" class="pageManagerTabs">
      <!-- <n-tab-pane name="编辑" tab="编辑">
        <PageManagerEditPanel />
      </n-tab-pane> -->
      <n-tab-pane name="目录" tab="目录">
        <PageManagerTableOfContent />
      </n-tab-pane>
      <!-- <n-tab-pane name="模板" tab="模板">
        <n-empty>
          <template #icon>
            <n-icon>
              <i-uil-jackhammer />
            </n-icon>
          </template>
          <template #extra>
            <n-p class="h3">
              模板正在开发...🚀
            </n-p>
          </template>
        </n-empty>
      </n-tab-pane>
      <n-tab-pane name="背景" tab="背景">
        <n-empty>
          <template #icon>
            <n-icon>
              <i-uil-jackhammer />
            </n-icon>
          </template>
          <template #extra>
            <n-p class="h3">
              背景正在开发...🚀
            </n-p>
          </template>
        </n-empty>
      </n-tab-pane> -->
      <n-tab-pane name="设置" tab="设置">
        <PageManagerSettingPanel />
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.pageManagerContainer {
    width: 100%;
    height:100%;
}

.pageManagerTabs {
    width: 100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    & ::v-deep(.n-tab-pane) {
        flex-basis:100%;
    }
    & ::v-deep(.n-tabs-wrapper) {
        flex-basis:100%;
    }
    & ::v-deep(.n-tabs-tab-wrapper) {
        flex-basis:10%;
    }
    & ::v-deep(.n-tabs-bar) {
        max-width:48px !important
    }
}
</style>
