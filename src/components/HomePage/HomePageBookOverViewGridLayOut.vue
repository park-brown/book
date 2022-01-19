<template>
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
    <!-- <BookOverViewGridCard
          v-for="item in data.data"
          :key="item.bookId"
          :book-name="item.bookName"
          :book-content="item.bookContent"
          :book-id="item.bookId"
        /> -->
  </template>
</template>

<script lang="ts" setup>

const ready = ref(false)
const getBookInfoListUrl = import.meta.env.VITE_GETBOOKINFOLIST_BASEURL
const { data } = useFetch(getBookInfoListUrl).json()

watch(data, () => {
  if (data.value.code === '200') {
    //* *数据接收成功 */
    ready.value = true
    console.log('data:', data.value)
  }
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
