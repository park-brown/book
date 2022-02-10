import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTableOfContent = defineStore({
  id: 'TOC',
  state: () => ({
    treeData: [],
  }),

  actions: {

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTableOfContent, import.meta.hot))
