<template>
  <editor
    v-model="content"
    class="tinyEditor"
    :api-key="apiKey"
    :init="initConfig"
    output-format="html"
    :disabled="false"
    @init="handleInit"
    @save-content="handleSaveContent"
  />
</template>
<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { useMessage } from 'naive-ui'
import { onBeforeRouteLeave } from 'vue-router'
import { bookStore } from '~/composables/useBookStorage'
const apiKey = import.meta.env.VITE_TINY_APIKEY
const insertBookInfoBaseUrl = import.meta.env.VITE_INSERTBOOKINFO_BASEURL
// const test = Array.from(Array(2).keys()).map((idx) => {
//   return {
//     key: Math.random() * Date.now(),
//     content: '',
//     page: idx + 1,
//   }
// })
const initConfig = {
  selector: 'textarea#full-featured',
  language: 'zh_CN',
  browser_spellcheck: true,
  plugins: 'print  preview powerpaste casechange importcss  searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable image help formatpainter permanentpen  charmap tinycomments mentions quickbars linkchecker emoticons advtable export',
  //   tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  //   tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
  //   tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
  //   tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
  mobile: {
    plugins: 'print  preview powerpaste casechange importcss  searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable',
  },
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations',
    },
  },
  menubar: 'file edit view format tools table tc help',
  toolbar: 'undo redo  | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview print save | image media link anchor codesample | a11ycheck showcomments addcomment',
  //* customize fontselect dropdown */
  // font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;微软雅黑;宋体',
  autosave_ask_before_unload: true,
  save_enablewhendirty: true,
  autosave_interval: '30s',
  autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  // save_onsavecallback() { console.log('Saved') },
  image_advtab: true,
  // mediaembed_max_width: 600,
  link_list: [
    // { title: 'My page 1', value: 'https://www.tiny.cloud' },
    // { title: 'My page 2', value: 'http://www.moxiecode.com' },
  ],
  image_list: [
    // { title: 'My page 1', value: 'https://www.tiny.cloud' },
    // { title: 'My page 2', value: 'http://www.moxiecode.com' },
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' },
  ],
  importcss_append: true,
  // templates: [
  //   { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
  //   { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
  //   { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' },
  // ],
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: '100%',
  media_dimensions: true,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
  tinycomments_mode: 'embedded',
  content_style: '.mymention{ color: gray; }',
  contextmenu: 'link image imagetools table configurepermanentpen',
  a11y_advanced_options: true,
  automatic_uploads: false,
  file_picker_types: 'file image media',
  media_url_resolver() {
  },

}
const content = ref()
const isLeaveRoute = ref(false)
const message = useMessage()
const emit = defineEmits<{
  (event: 'init'): void
}>()

const { data, post, execute } = useFetch(insertBookInfoBaseUrl, { immediate: false }).json()
//* *最多10s发送一次保存请求 */
const debouncedSave = useDebounceFn(() => {
  /**
   **tinymce save-content-event will call handler function on page leave, find a way to disable it */
  if (isLeaveRoute.value) return
  const uploadData = new FormData()
  uploadData.append('bookId', bookStore.value.bookId)
  uploadData.append('bookName', bookStore.value.bookName)
  uploadData.append('bookContent', content.value)
  console.log('unnecessary called')
  post(uploadData)
  execute()
}, 10000)
const handleInit = () => {
  emit('init')
}
const handleSaveContent = () => {
  debouncedSave()
}
watch(data, () => {
  if (data.value.code === '200') {
    //* *保存成功 */
    message.success(
      '保存成功',
      { duration: 3000 },
    )
    content.value = data.value.data.bookContent
    bookStore.value.bookContent = data.value.data.bookContent
  }
  else {
    //* *保存失败 */
    message.error(
      '保存失败,请重试',
      { duration: 3000 },
    )
  }
})
tryOnMounted(() => {
  content.value = bookStore.value.bookContent
})

onBeforeRouteLeave(() => {
  isLeaveRoute.value = true
})
</script>
<style lang="'scss" scoped>

</style>
