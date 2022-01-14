<!-- <template>
  <ckeditor v-model="editorData" :editor="ClassicEditor" :config="editorConfig" />
</template>
<script setup lang="ts">
import CKEditor from '@ckeditor/ckeditor5-vue'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// Import translations for the chinese simplified language.
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'
// ⚠️ NOTE: We don't use @ckeditor/ckeditor5-build-classic any more!
// Since we're building CKEditor from source, we use the source version of ClassicEditor.
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials'
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold'
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic'
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link'
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph'
const editorData = ref()
const editorConfig = {
  // The configuration of the editor.
  language: 'zh-cn',
  plugins: [
    EssentialsPlugin,
    BoldPlugin,
    ItalicPlugin,
    LinkPlugin,
    ParagraphPlugin,
  ],
  toolbar: {
    items: [
      'bold',
      'italic',
      'link',
      'undo',
      'redo',
    ],
  },
}
</script>
<script lang="ts">

// declare additional options
export default {
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
}
</script>
<style lang="scss">
</style> -->
