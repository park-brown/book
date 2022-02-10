<template>
  <n-tree
    block-line
    :data="TOC.treeData"
    :default-expanded-keys="defaultExpandedKeys"
    selectable
    virtual-scroll
    style="height: 800px"
  />
</template>
<script lang="ts" setup>

import { useTableOfContent } from '~/stores/TableOfContent'
const TOC = useTableOfContent()

const defaultExpandedKeys = ref(['40', '41'])

</script>
<style lang="scss" scoped>
</style>
