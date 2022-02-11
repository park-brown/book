<template>
  <div class="appbar__toolbar">
    <div class="sortByTime">
      <n-button size="large">
        <n-p class="h6">
          按时间
        </n-p>
        <i-akar-icons-arrow-up-down />
      </n-button>
    </div>
    <div class="search">
      <n-input type="text" placeholder="书名搜索" clearable size="large">
        <template #suffix>
          <i-ant-design-search-outlined />
        </template>
      </n-input>
    </div>
    <div class="switchLayOut">
      <n-button size="large" class="open__flex" @click="openFlex">
        <i-ant-design-unordered-list-outlined />
      </n-button>
      <n-button size="large" class="open__grid" @click="openGrid">
        <i-bx-bxs-grid-alt color="currentColor" />
      </n-button>
    </div>
    <div class="addNewBook">
      <n-button size="large" :bordered="false" @click="goToUpload">
        <i-ant-design-plus-outlined />
        <n-p class="h6">
          添加新电子书
        </n-p>
      </n-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter()
const goToUpload = () => {
  router.push('/upload')
  console.log('run')
}
const emits = defineEmits(['open:flex', 'open:grid'])
const openFlex = () => {
  emits('open:flex')
}
const openGrid = () => {
  emits('open:grid')
}
</script>
<style lang="scss" scoped>
.appbar__toolbar {
  width: 100%;
  padding: $spacing * 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 6;

  & .sortByTime {
    display: flex;
    & ::v-deep(.n-button__content) {
      gap: $spacing * 2;
    }
    & ::v-deep(svg) {
      width: 2rem !important;
      height: 2rem !important;
    }
  }
  & .search {
    width: 64rem;
  }
  & .switchLayOut {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing * 6;
  }
  & .addNewBook {
    margin-left: auto;
    & ::v-deep(.n-button) {
      color: $white;
      background-color: $red-600;
      padding: $spacing * 2 $spacing * 6;
      border-radius: $border-radius * 2;
      &:hover,
      &:active {
        background-color: $red-700;
      }
    }
    & ::v-deep(.n-button__content) {
      gap: $spacing * 4;
      & .n-p {
        color: currentColor;
      }
    }
  }
}
</style>
