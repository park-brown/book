<template>
  <node-view-wrapper class="mathBlock">
    <div class="mathBlockHeader">
      <div class="mathBlockDescription">
        <n-p class="h6">
          块级公式
        </n-p>
      </div>
      <div class="mathBlockAction">
        <n-button :bordered="false" @click="isEditting = true">
          编辑
        </n-button>
        <n-button :bordered="false" @click="isEditting = false">
          预览
        </n-button>
      </div>
    </div>
    <n-input
      v-if="isEditting"
      v-model:value="formula"
      type="textarea"
      placeholder="输入lateX公式"
    />
    <vue-mathjax v-if="!isEditting" :formula="formula" />
  </node-view-wrapper>
</template>

<script lang="ts" setup>

import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
// '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
const formula = ref('')
const isEditting = ref(true)
const props = defineProps(nodeViewProps)

watch(formula, () => {
  props.updateAttributes({
    formula: formula.value,
  })
})
// const increase = () => {
//   props.updateAttributes({
//     count: props.node.attrs.count + 1,
//   })
// }

</script>

<style lang="scss" scoped>

.mathBlock {
  background: $white;
  border-radius: $spacing*2;
  margin: 1rem 0;
  position: relative;
}
.mathBlockHeader {
  width:100%;
  height:4rem;
  background-color: $grey-100;
  padding: $spacing*2 $spacing*4;
  display:flex;
  align-items: center;
  justify-content: space-between;
}
.mathBlockAction {
  display:flex;
  align-items: center;
  justify-content:flex-start;
  gap:$spacing*4;
}
.mathBlockDescription {
  display:flex;
  align-items: center;
  justify-content: flex-start;
  gap:$spacing*4;
}
</style>
