<template>
  <div id="content">
    <n-button @click="execute">
      get
    </n-button>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

const config: AxiosRequestConfig = {
  method: 'POST',
  data: { firstName: 'Brian' },
  params: { id: '123', field: 'name', sort: 'des' },
  transformResponse: [function(data) {
  // Do whatever you want to transform the data

    // console.log('trans:', data)
  }],
}

const { data, execute } = useAxios('/posts', config, instance, { immediate: false })
watch(data, () => {
  console.log('data:', data.value)
})
</script>

<style lang="scss" scoped>
.content {
  max-width: 76rem;
  margin: 5rem auto;
}
</style>
