import { defineStore, acceptHMRUpdate } from 'pinia'
import { TreeOption } from 'naive-ui'
interface TOC {
  treeData: TreeOption[] | []
}
export const useTableOfContent = defineStore({
  id: 'TOC',
  state: (): TOC => ({
    treeData: [],
  }),

  actions: {

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTableOfContent, import.meta.hot))
