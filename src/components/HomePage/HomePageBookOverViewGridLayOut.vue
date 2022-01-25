<template>
  <!--请求渲染spiner-->
  <template v-if="isFetching">
    <n-spin :show="isFetching">
      <n-alert title="获取数据" type="info" />
      <template #description>
        请稍等
      </template>
    </n-spin>
  </template>
  <!--失败渲染404-->
  <template v-if="error">
    <n-result
      status="404"
      title="404 Not Found"
      description="生活总有荒诞"
    >
      <!-- <template #footer>
        <n-button @click="">
          重试
        </n-button>
      </template> -->
    </n-result>
  </template>
  <!--接收数据渲染-->
  <template v-if="ready">
    <n-scrollbar style="max-height: 522px;">
      <div class="scrollbarInner">
        <BookOverViewGridCard
          v-for="item in data.data"
          :key="item.bookId"
          :book-name="item.bookName"
          :book-content="item.bookContent"
          :book-id="item.bookId"
        />
      </div>
    </n-scrollbar>
  </template>
</template>

<script lang="ts" setup>

const ready = ref(false)
const error = ref(false)
const getBookInfoListUrl = import.meta.env.VITE_GETBOOKINFOLIST_BASEURL
const { isFetching, isFinished, data } = useFetch(getBookInfoListUrl, {
  afterFetch(ctx) {
    const parseBookContent = ctx.data.data.slice().map((item: any) => {
      return {
        ...item,
        bookContent: JSON.parse(item.bookContent),
      }
    })

    ctx.data.data = parseBookContent
    return ctx
  },
}).json()

watch(isFinished, () => {
  // //* *数据接收失败 */
  if (!isDefined(data))
    return error.value = true
  // //* *数据接收成功 */
  ready.value = true
  error.value = false
})

</script>
<style lang="scss" scoped>

.scrollbarInner {
    @include desktop {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, 18rem);
        grid-auto-rows: 24rem;
        gap: 4rem 7.5rem;
        overflow: hidden;
    }
}
</style>
