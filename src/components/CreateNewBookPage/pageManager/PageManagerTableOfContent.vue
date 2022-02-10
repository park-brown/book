<template>
  <n-tree
    block-line
    :data="TOC.treeData"
    selectable
    virtual-scroll
    style="height: 800px"
  />
</template>
<script lang="ts" setup>
import { useTableOfContent } from '~/stores/TableOfContent'
const TOC = useTableOfContent()

</script>
<style lang="scss" scoped>
</style>
