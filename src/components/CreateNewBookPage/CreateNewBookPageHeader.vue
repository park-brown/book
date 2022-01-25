<template>
  <div class="header">
    <div class="layout">
      <n-button size="medium" :bordered="false" @click="goToHome">
        <template #icon>
          <n-icon>
            <i-eva-arrow-back-outline width="16" height="16" />
          </n-icon>
        </template>
      </n-button>
      <div class="bookTitle">
        <n-p class="h4">
          {{ bookName }}
        </n-p>
      </div>
      <div class="saveBtnContainer">
        <n-button type="info" size="medium" class="body-1 btn__save">
          保存
        </n-button>
        <div class="timestamp">
          <n-p class="body-2">
            最近保存12:03
          </n-p>
        </div>
      </div>
      <div class="toolbar" />
      <div class="userInfoContainer">
        <user-info-box />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { bookStore } from '~/composables/useBookStorage'
const bookName = bookStore.value.bookName
const router = useRouter()
const goToHome = () => {
  router.push('/')
}
</script>
<style lang="scss">
.header {
    width: 100%;
    height: 80px;
    padding: $spacing * 4 $spacing * 8;
    box-shadow: $shadow-2;
    background-color: $white;
    & .layout {
        display: flex;
        height:100%;
        align-items: center;
        justify-content: space-between;
    }
}
.btn__save {
    padding:$spacing*2 $spacing*4;
    & ::v-deep(.n-button__icon) {
        margin:0
    }
}
.timestamp .body-2 {
    color:$grey-700
}
.saveBtnContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:$spacing*4;
}
</style>
