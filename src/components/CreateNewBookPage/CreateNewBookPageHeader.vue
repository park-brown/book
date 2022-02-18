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
      <div class="rightside">
        <div class="userInfoContainer">
          <user-info-box />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push('/')
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 60px;
    padding: $spacing * 4 $spacing * 8;
    background-color: $grey-100;
    & .layout {
        display: flex;
        height:100%;
        align-items: center;
        justify-content: space-between;
    }
}
.rightside {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing*4;
}
</style>
