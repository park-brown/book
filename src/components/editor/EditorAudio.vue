<template>
  <node-view-wrapper ref="el" class="editorAudio">
    <vue-plyr>
      <audio controls playsinline>
        <source
          :src="props?.node?.attrs.url"
          type="audio/mp3"
        >
      </audio>
    </vue-plyr>
  </node-view-wrapper>
</template>
<script setup lang="ts">
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
const props = defineProps(nodeViewProps)

</script>

<style lang="scss" scoped>
.editorAudio {
    width:100%;
    max-width:36rem;
    &:hover {
       border:2px solid #00b3ff;
       border-radius:$border-radius*1;
       box-shadow: $shadow-2;
    }
}
</style>
