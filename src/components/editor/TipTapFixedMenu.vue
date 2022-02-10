<template>
  <div v-if="props.editor" class="TipTapFixedMenu">
    <!--插入表格-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()"
        >
          <i-ci-table />
        </n-button>
      </template>
      <span class="subtitle-1"> 插入表格 </span>
    </n-tooltip>
    <!--删除表格-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().deleteTable().run()"
        >
          <i-ci-table-delete />
        </n-button>
      </template>
      <span class="subtitle-1"> 删除表格 </span>
    </n-tooltip>
    <!--左边插入列-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().addColumnAfter().run()"
        >
          <i-ri-insert-column-left />
        </n-button>
      </template>
      <span class="subtitle-1"> 左边插入列 </span>
    </n-tooltip>
    <!--右边插入列-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().addColumnBefore().run()"
        >
          <i-ri-insert-column-right />
        </n-button>
      </template>
      <span class="subtitle-1"> 右边插入列 </span>
    </n-tooltip>
    <!--删除选中列-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().deleteColumn().run()"
        >
          <i-ci-delete-column />
        </n-button>
      </template>
      <span class="subtitle-1"> 删除选中列 </span>
    </n-tooltip>
    <!--上方插入行-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().addRowBefore().run()"
        >
          <i-tabler-row-insert-top />
        </n-button>
      </template>
      <span class="subtitle-1"> 上方插入行 </span>
    </n-tooltip>
    <!--下方插入行-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().addRowAfter().run()"
        >
          <i-tabler-row-insert-bottom />
        </n-button>
      </template>
      <span class="subtitle-1"> 下方插入行 </span>
    </n-tooltip>
    <!--删除选中行-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().deleteRow().run()"
        >
          <i-ri-delete-row />
        </n-button>
      </template>
      <span class="subtitle-1"> 删除选中行 </span>
    </n-tooltip>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(['editor'])

</script>
<style lang="scss" scoped>
.TipTapFixedMenu {
    width:100%;
    height:4rem;
    background-color:$grey-100;
}
</style>
