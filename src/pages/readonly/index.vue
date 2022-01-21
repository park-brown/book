<template>
  <div class="pageContainer">
    <div class="bottomNavigationBar">
      <ul class="bottomNavigationBarInner">
        <n-button @click="prev">
          <i-akar-icons-arrow-left />
        </n-button>
        <n-button @click="next">
          <i-akar-icons-arrow-right />
        </n-button>
        <n-statistic :value="36">
          <template #prefix>
            {{ pageIndex + 1 }} /
          </template>
        </n-statistic>
      </ul>
    </div>
    <div class="editorContainer">
      <n-skeleton v-if="!editorReady" height="800px" width="100%" />
      <editor
        v-model="bookStore.bookContent[pageIndex - 1].content"
        :api-key="apiKey"
        :init="initConfig"
        output-format="html"
        :disabled="true"
        @init="handleInit"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { onBeforeRouteLeave } from 'vue-router'
import { bookStore, pageCount } from '~/composables/useBookStorage'
const apiKey = import.meta.env.VITE_TINY_APIKEY

const min = ref(0)
const max = ref(pageCount)
const pageIndex = useClamp(0, min, max)
const editorReady = ref(false)
const handleInit = () => {
  editorReady.value = true
}
const prev = () => {
  pageIndex.value = pageIndex.value - 1
}
const next = () => {
  pageIndex.value = pageIndex.value + 1
}

const initConfig = {
  selector: 'textarea#readOnly',
  language: 'zh_CN',
  menubar: false,
  toolbar: false,
  height: 800,
  readonly: true,

}
tryOnMounted(() => {
  pageCount.value = bookStore.value.bookContent.length
})
onBeforeRouteLeave(() => {
  bookStore.value.bookName = ''
  bookStore.value.bookId = ''
  bookStore.value.bookContent = [{ key: Math.random() * Date.now(), page: 1, content: '' }]
})
</script>
<style lang="scss" scoped>
.pageContainer {
  @include laptop {
    width:100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
}
.editorContainer {
  @include laptop {
    max-width: 108rem;
    margin: 0 auto;
    padding: $spacing*15 0 0 0;
    height: 100%;
    width: 100%;
  }
}
.bottomNavigationBar {
  width:100%;
  background-color: transparent;
  height:$spacing*15;
  padding:$spacing*2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  display:flex;
  transition: opacity $duration-standard $easing-easeInOut;
  &:hover {
    opacity:1;
  }
}
.bottomNavigationBarInner {
  height:100%;
  flex-grow:0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 $spacing*4;
  gap:$spacing*3;
  border: 1px solid $black;
  border-radius:$border-radius*2;
  box-shadow: $shadow-2;
  & ::v-deep(.n-statistic) {
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap:$spacing*2;
  }
  & ::v-deep(.n-statistic-value) {
   margin:0
  }
  & ::v-deep(.n-statistic-value__prefix) {
   @include h6
  }
  & ::v-deep(.n-statistic-value__content) {
   @include h6
  }
}
</style>
