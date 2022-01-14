<template>
  <VueQueryDevTools :initial-is-open="true" />
  <ThemeProvider />
</template>
<script lang="ts">
import { useQueryProvider } from 'vue-query'
import { VueQueryDevTools } from 'vue-query/devtools'
import ThemeProvider from './ThemeProvider.vue'
export default defineComponent({
  components: { ThemeProvider, VueQueryDevTools },
  setup() {
    useQueryProvider()
  },
})
</script>
