<template>
  <n-button :bordered="false" tag="a" :style="{height:'auto'}" @click="goToHome">
    <Logo />
  </n-button>
</template>
<script lang="ts" setup>
const router = useRouter()
const goToHome = () => {
  router.push('/')
}
</script>
