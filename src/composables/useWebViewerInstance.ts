import WebViewer from '@pdftron/webviewer'
import { markRaw, ref } from 'vue'
import { set } from '@vueuse/core'
const markRawWebViewer = markRaw(WebViewer)

export const useWebViewerInstance = ({ initialDoc }: { initialDoc: string | undefined }) => {
  const path = `${import.meta.env.BASE_URL}webviewer`
  const ready = ref(false)
  const viewer = ref()
  const viewerRef = (el: any) => {
    viewer.value = el
  }
  const instance = shallowRef()
  watchEffect(async() => {
    const result = await markRawWebViewer({ path, initialDoc, accessibleMode: true, fullAPI: true }, viewer.value)
    set(instance, result)
    set(ready, true)
  }, { flush: 'post' })
  return {
    viewerRef,
    ready,
    instance,
  }
}
