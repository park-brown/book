
export const bookStore = useStorage('book-store', { bookId: '', bookName: '', bookContent: '' })

// export const pageCount = ref(1)
// export const currentPage = ref(1)
// export const addNewPage = () => {
//   //* * get all information about current bookContent */

//   const currentBookStore = JSON.parse(localStorage.getItem('book-store'))
//   //* *get current array length */
//   const currentPageCount = currentBookStore.bookContent.length
//   //* *set next bookContent *//
//   const nextBookContent = [...currentBookStore.bookContent, { key: Math.random() * Date.now(), page: currentPageCount + 1, content: '' }]
//   bookStore.value.bookContent = nextBookContent
//   pageCount.value = currentBookStore.bookContent.length + 1
// }
