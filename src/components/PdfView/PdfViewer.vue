<template>
  <div id="webviewer" :ref="viewerRef" />
</template>

<script lang='ts' setup>
import { get } from '@vueuse/core'
import { useWebViewerInstance } from '../../composables/useWebViewerInstance'
const props = defineProps({ initialDoc: { type: String } })
const { viewerRef, instance, ready } = useWebViewerInstance({ initialDoc: props.initialDoc })
whenever(ready, () => {
  const { UI, Core } = get(instance)
  const { documentViewer, annotationManager } = Core
  const { Feature } = UI
  UI.setLanguage('zh_cn')
  UI.enableFeatures([Feature.FilePicker])
  UI.setHeaderItems((header: any) => {
    header.push({
      type: 'actionButton',
      hidden: ['mobile'],
      dataElement: 'header',
      ariaLabel: '保存',
      img: 'https://api.iconify.design/bx/bxs-save.svg?color=%23868e96',
      onClick: async() => {
        const doc = documentViewer.getDocument()
        const xfdfString = await annotationManager.exportAnnotations()
        const options = {
          xfdfString,
          downloadType: 'pdf',
        }
        const data = await doc.getFileData(options)
        console.log('data:', data)
        const arr = new Uint8Array(data)
        const blob = new Blob([arr], { type: 'application/pdf' })
        // add code for handling Blob here
        const file = new File([blob], 'pdf', { type: 'application/pdf' })
        console.log('file:', file)
      },
    })
  })
})
</script>
<style>
#webviewer {
  height: 100vh;
}
</style>
