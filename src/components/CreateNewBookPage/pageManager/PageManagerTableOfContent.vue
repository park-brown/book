<template>
  <div v-if="isEmpty" class="intro">
    <n-p class="h6">
      您追加到文档的标题会显示在此处
    </n-p>
  </div>
  <n-tree
    block-line
    :data="TOC.treeData"
    selectable
    virtual-scroll
    style="height: 800px"
    :on-update:selected-keys="scroll"
  />
</template>
<script lang="ts" setup>
import { TreeOption } from 'naive-ui'

import { useTableOfContent } from '~/stores/TableOfContent'
const TOC = useTableOfContent()
const scroll = (__: any, options: TreeOption[]) => {
  const h1 = document.getElementsByTagName('h1')
  const h2 = document.getElementsByTagName('h2')
  const h3 = document.getElementsByTagName('h3')
  const targetH1 = Array.from(h1).find(h1 =>
    h1.textContent === options[0].label,
  )
  const targetH2 = Array.from(h2).find(h2 =>
    h2.textContent === options[0].label,
  )
  const targetH3 = Array.from(h3).find(h3 =>
    h3.textContent === options[0].label,
  )
  targetH1?.scrollIntoView()
  targetH2?.scrollIntoView()
  targetH3?.scrollIntoView()
}
const isEmpty = ref(true)
watch(TOC, () => {
  TOC.treeData.length === 0 ? isEmpty.value = true : isEmpty.value = false
})
</script>
<style lang="scss" scoped>
.intro {
  position:absolute;
}
</style>
