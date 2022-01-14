<!-- <template>
  <QuillEditor
    ref="textEditor"
    v-model:content="content"
    :modules="modules"
    theme="snow"
    toolbar="full"
    content="Delta"
  />
</template>
<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import BlotFormatter from 'quill-blot-formatter'
import ImageCompress from 'quill-image-compress'
import MagicUrl from 'quill-magic-url'
const modules = [{
  name: 'blotFormatter',
  /**
           * * module for resizing and realigning images and iframe videos */
  module: BlotFormatter,
  options: {/* options */ },
}, {
  name: 'ImageCompress',
  /**
           * *compress images before adding them to the editor. */
  module: ImageCompress,
  options: {/* options */ },

}, {
  name: 'magicUrl',
  /**
           * *Checks for URLs during typing / pasting and automatically converts them to links */
  module: MagicUrl,
  options: {/* options */ },

}]
const content = ref()
const textEditor = ref()

</script>
<style lang="scss">
</style> -->
