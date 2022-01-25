import { defineStore, acceptHMRUpdate } from 'pinia'

export const useEbookStore = defineStore({
  id: 'ebook',
  state: () => ({
    chapters: [],
    counter: 0,
  }),

  actions: {
    increment() {
      this.counter++
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useEbookStore, import.meta.hot))
