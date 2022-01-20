
export const bookStore = useStorage('book-store', { bookId: '', bookName: '', bookContent: '' })
export const insertPageAfter = () => {
  //* * get all information about current bookContent */
  const currentBookContent = bookStore.value.bookContent.slice()
  //* *get current array length */
  const currentPageCount = bookStore.value.bookContent.length
  //* *set next bookContent */
  const nextBookContent = [...currentBookContent, { key: Math.random() * Date.now(), page: currentPageCount + 1, content: '' }]
  bookStore.value.bookContent = nextBookContent
}
//* *keep track of active page number in here */
export const activePageNumber = ref(1)
export const readActivePageNumber = (page) => {
  activePageNumber.value = page
}
