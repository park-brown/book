<template>
  <div class="container">
    <CreateNewBookPageHeader />
    <main class="main">
      <div class="sidebar">
        <n-tabs type="segment" class="tabs__container" pane-class="tab-pane-container">
          <n-tab-pane name="page">
            <!--Tab label content.-->
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-fluent-document-one-page-24-filled />
                </template>
                <template #text>
                  页面
                </template>
              </SideBarTabList>
            </template>
            <!--Tab pane content.-->
            <!-- <template #default>
              test
            </template> -->
            <n-empty>
              <template #icon>
                <n-icon>
                  <i-uil-jackhammer />
                </n-icon>
              </template>
              <template #extra>
                <n-p class="h3">
                  页面正在开发...🚀
                </n-p>
              </template>
            </n-empty>
          </n-tab-pane>
          <n-tab-pane name="photo">
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-foundation-photo />
                </template>
                <template #text>
                  图片
                </template>
              </SideBarTabList>
            </template>
            <CreateNewBookPhotoPanel />
          </n-tab-pane>
          <n-tab-pane name="video">
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-dashicons-video-alt3 />
                </template>
                <template #text>
                  视频
                </template>
              </SideBarTabList>
            </template>
            <CreateNewBookVideoPanel />
          </n-tab-pane>
          <n-tab-pane name="audio">
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-ant-design-audio-filled />
                </template>
                <template #text>
                  音频
                </template>
              </SideBarTabList>
            </template>
            <CreateNewBookAudioPanel />
          </n-tab-pane>
          <n-tab-pane name="VR">
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-bi-badge-vr-fill />
                </template>
                <template #text>
                  虚仿
                </template>
              </SideBarTabList>
            </template>
            <n-empty>
              <template #icon>
                <n-icon>
                  <i-uil-jackhammer />
                </n-icon>
              </template>
              <template #extra>
                <n-p class="h3">
                  虚访正在开发...🚀
                </n-p>
              </template>
            </n-empty>
          </n-tab-pane>
          <n-tab-pane name="link">
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-akar-icons-link-chain />
                </template>
                <template #text>
                  链接
                </template>
              </SideBarTabList>
            </template>
            <n-empty>
              <template #icon>
                <n-icon>
                  <i-uil-jackhammer />
                </n-icon>
              </template>
              <template #extra>
                <n-p class="h3">
                  链接正在开发...🚀
                </n-p>
              </template>
            </n-empty>
          </n-tab-pane>
          <n-tab-pane name="annotation">
            <template #tab>
              <SideBarTabList>
                <template #icon>
                  <i-carbon-text-annotation-toggle />
                </template>
                <template #text>
                  注释
                </template>
              </SideBarTabList>
            </template>
            <n-empty>
              <template #icon>
                <n-icon>
                  <i-uil-jackhammer />
                </n-icon>
              </template>
              <template #extra>
                <n-p class="h3">
                  注释正在开发...🚀
                </n-p>
              </template>
            </n-empty>
          </n-tab-pane>
        </n-tabs>
      </div>
      <section class="pageContainer">
        <div class="pageLayOutContainer">
          <!-- <TinyMceEditor /> -->
          <!-- <MavonEditorContainer /> -->
          <!-- <CKEditorContainer /> -->
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: $grey-050;
}

.main {
    @include tablet {
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding:$spacing*15 $spacing*6  0 $spacing*6
    }
}
.sidebar {
    width: 48rem;
    height: 100%;
    box-shadow: $shadow-2;
    display: flex;
}
.pageContainer {
    flex: 1;
    height: 100%;
}
.pageLayOutContainer {
    @include laptop {
        width: 100%;
        height: 100%;
        max-width: 1280px;
        margin: 0 auto;
        background-color: $white;
        box-shadow: $shadow-2;
    }
}
.page {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.tabs__container {
    //** orientation vertical */
    display: flex;
    height:100%;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing * 6;

    & ::v-deep(.n-tabs-nav) {
        flex-basis: 6rem;
        align-self: stretch;
        display: flex;
    }
    & ::v-deep(.n-tabs-rail) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: $spacing * 2;
    }
    & ::v-deep(.n-tabs-tab-wrapper) {
        flex-grow: 0;
        width: 100%;
    }
    & ::v-deep(.tab-pane-container) {
        align-self: stretch;
        padding: 0;
        overflow: hidden;
    }
    & ::v-deep(.n-tabs-tab) {
        flex-basis: 100%;
        padding: 0;
    }
    & ::v-deep(.n-tabs-tab__label) {
        flex-basis: 100%;
        width: 48px;
        height: 60px;
        padding: $spacing $spacing * 2;
    }
    & ::v-deep(.n-tabs-tab--active) {
        .listItem,
        .listItem__text--paragraph {
            color: $blue-600;
        }
    }
}

</style>
