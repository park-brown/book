<template>
  <n-button size="large" :bordered="false" class="manualUpload__btn" @click="showModal = true">
    <i-akar-icons-book />
    <n-p class="subtitle-1">
      手动创建
    </n-p>
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px;"
      title="创建电子书"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button @click="showModal = false">
          <template #icon>
            <i-bi-x />
          </template>
        </n-button>
      </template>
      <div class="ModalContent">
        <n-space vertical>
          <n-input v-model:value="title" type="text" placeholder="请输入标题" />
        </n-space>
      </div>
      <template #footer>
        <div class="footerAction">
          <n-button
            type="info"
            :disabled="title === '' || isFetching === true"
            @click="handleConfirm"
          >
            确定
          </n-button>
          <n-button type="error" @click="showModal = false">
            取消
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { bookStore } from '~/composables/useBookStorage'
const insertBookInfoBaseUrl = import.meta.env.VITE_INSERTBOOKINFO_BASEURL
const router = useRouter()
const message = useMessage()
const goToCreateNewBook = () => {
  router.push('/createNewBook')
}
const { isFetching, data, execute, post } = useFetch(insertBookInfoBaseUrl, {
  immediate: false,
}).json()
const title = ref<string>('')
//* *最多3s一次 */
const debouncedFn = useDebounceFn(() => {
  const uploadData = new FormData()
  uploadData.append('bookName', title.value)
  post(uploadData)
  execute()
}, 3000)
const handleConfirm = () => {
  debouncedFn()
}
watch(data, () => {
  //* *success case */
  if (data.value.code === '200') {
    message.success('创建成功，进入编辑页面',
      { duration: 3000 })
    bookStore.value.bookId = data.value.data.bookId
    bookStore.value.bookName = data.value.data.bookName
    bookStore.value.bookContent = ''
    goToCreateNewBook()
  }
  else {
    //* *reject case */
    message.error('创建失败，请重试',
      { duration: 3000 })
  }
})
const showModal = ref(false)
//* life cycle */

tryOnMounted(() => {
  bookStore.value.bookId = ''
  bookStore.value.bookName = ''
  bookStore.value.bookContent = ''
})

</script>
<style lang="scss" scoped>
.manualUpload__btn {
  color: $red-400;
  border: 1px solid $red-400;
  border-radius: $border-radius;
  box-shadow: $shadow-1;
  transition: all $duration-standard $easing-easeInOut;
  &:hover,
  &:focus,
  &:active {
    color: $red-600;
    border: 1px solid $red-600;
    box-shadow: $shadow-2;
    transform: translateY($spacing * -0.5);
  }
  & ::v-deep(.n-button__content) {
    & > * {
      color: currentColor;
    }
    gap: $spacing * 3;
  }
  & ::v-deep(.n-base-wave) {
    display: none;
  }
}
.footerAction {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing * 4;
}
</style>
