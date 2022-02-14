<template>
  <div class="container">
    <div class="buttonGroup">
      <n-button @click="next">
        next
      </n-button>
      <n-button @click="pre">
        pre
      </n-button>
    </div>
    <div id="area" />
  </div>
</template>
<script  lang="ts" setup>
import ePub from 'epubjs'

const book = ePub('./test.epub')
const rendition = book.renderTo('area', { width: 900, height: 600, flow: 'paginated', allowScriptedContent: true })
const displayed = rendition.display()
const next = () => {
  rendition.next()
}
const pre = () => {
  rendition.prev()
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1280px;
  height: 87.5vh;
  margin: 4rem auto;
  background-color: $white;
  box-shadow: $shadow-4;
  border-radius: $border-radius * 2;
  padding: $spacing * 8;
  overflow: hidden;
}
// #area {
//   width:60rem;
//   height:80rem;
// }
</style>
