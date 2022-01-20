
export const bookStore = useStorage('book-store', { bookId: '', bookName: '', bookContent: '' })
const content = Array.from(Array(1).keys()).map((idx) => {
  return {
    key: Math.random() * Date.now(),
    page: idx + 1,
    content: '',
  }
})
const min = ref(0)
const max = ref(content.length - 1)
const pageIndex = useClamp(0, min, max)
