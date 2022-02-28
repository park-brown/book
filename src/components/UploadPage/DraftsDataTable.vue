<template>
  <n-data-table
    size="small"
    :columns="columns"
    :data="data"
    :max-height="360"
    :bordered="false"
    :single-line="false"
    :striped="true"
    :pagination="paginationReactive"
    @update:sorter="handleSorterChange"
  />
</template>
<script setup lang="ts">
import { NButton, useMessage, DataTableColumns, NEllipsis } from 'naive-ui'
type Draft = {
  title: string
  category: string
  date: string
  format: string
}

const createColumns = ({
  play,
}: {
  play: (row: Draft) => void
}): DataTableColumns<Draft> => {
  return [
    {
      title: '书名',
      key: 'title',
      render(row) {
        return [h(
          NEllipsis,
          {
            lineClamp: 1,
            style: 'max-width: 140px',
            tooltip: { placement: 'bottom' },
          },
          { default: () => `${row.title}` },
        )]
      },
    },
    {
      title: '类型',
      key: 'category',
    },
    {
      title: '格式',
      key: 'format',
    },
    {
      title: '日期',
      key: 'date',
      sortOrder: false,
      sorter: 'default',
    },
    {
      title: '操作',
      key: 'actions',
      render(row) {
        return [h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            type: 'success',
            onClick: () => play(row),
          },
          { default: () => '编辑' },
        ), h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            type: 'error',
            onClick: () => play(row),
          },
          { default: () => '删除' },
        )]
      },
    },
  ]
}

const message = useMessage()

const data = ref<Draft[]>([{
  title: '思修',
  category: '思政',
  date: '2022-2-28',
  format: 'doc',
}])
const columns = ref(createColumns({
  play(row: Draft) {
    message.info(`Play ${row.title}`)
  },
}))
const paginationReactive = reactive({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [5, 10, 15],
  onChange: (page: number) => {
    paginationReactive.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
  },
})
type SortState = {
  columnKey: string | number
  sorter: 'default' | Function | boolean
  order: 'ascend' | 'descend' | false
}
const handleSorterChange = (sorter: SortState) => {
  columns.value.forEach((column) => {
    /** column.sortOrder !== undefined means it is uncontrolled */
    if (column.sortOrder === undefined) return
    if (!sorter) {
      column.sortOrder = false
      return
    }
    if (column.key === sorter.columnKey) column.sortOrder = sorter.order
    else column.sortOrder = false
  })
}
</script>
<style lang="scss" scoped>
</style>
