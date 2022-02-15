<template>
  <div v-if="props.editor" class="TipTapFixedMenu">
    <!--切换字体-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-tree-select
          :options="fontOptions"
          default-value="微软雅黑"
          @update:value="handleFontUpdateValue"
        />
      </template>
      <span class="subtitle-1"> 切换字体 </span>
    </n-tooltip>
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
    <!--添加图片-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-popover
          :show="showImagePopover"
          placement="bottom"
          trigger="click"
          :on-clickoutside="() => { showImagePopover = false }"
        >
          <template #trigger>
            <n-button :bordered="false" @click="showImagePopover = !showImagePopover">
              <i-ic-baseline-add-photo-alternate />
            </n-button>
          </template>
          <div class="AddImagePopOverContainer">
            <n-input v-model:value="ImageUrl" type="text" placeholder="图片地址" />
            <n-input v-model:value="ImageWidth" type="text" placeholder="图片宽度" />
            <n-input v-model:value="ImageHeight" type="text" placeholder="图片高度" />
            <div class="popover__action">
              <n-button
                @click="showImagePopover = false"
              >
                取消
              </n-button>
              <n-button
                @click="addImage"
              >
                添加
              </n-button>
            </div>
          </div>
        </n-popover>
      </template>
      <span class="subtitle-1"> 添加图片 </span>
    </n-tooltip>
    <!--添加多媒体-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-popover
          :show="showMediaPopover"
          placement="bottom"
          trigger="click"
          :on-clickoutside="() => { showMediaPopover = false }"
        >
          <template #trigger>
            <n-button :bordered="false" @click="showMediaPopover = !showMediaPopover">
              <i-akar-icons-video />
            </n-button>
          </template>
          <div class="AddMediaPopOverContainer">
            <n-input v-model:value="MediaUrl" type="text" placeholder="媒体地址" />
            <n-input v-model:value="MediaWidth" type="text" placeholder="媒体宽度" />
            <n-input v-model:value="MediaHeight" type="text" placeholder="媒体高度" />
            <div class="popover__action">
              <n-button
                @click="showMediaPopover = false"
              >
                取消
              </n-button>
              <n-button
                @click="addMedia"
              >
                添加
              </n-button>
            </div>
          </div>
        </n-popover>
      </template>
      <span class="subtitle-1"> 添加多媒体 </span>
    </n-tooltip>
    <!--数学公式-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          @click="editor.chain().focus().insertMath().run()"
        >
          <i-carbon-function-math />
        </n-button>
      </template>
      <span class="subtitle-1"> 数学公式 </span>
    </n-tooltip>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(['editor'])
const showImagePopover = ref(false)
const showMediaPopover = ref(false)
const ImageUrl = ref('')
const ImageWidth = ref()
const ImageHeight = ref()
const MediaUrl = ref('')
const MediaWidth = ref()
const MediaHeight = ref()
const addImage = () => {
  if (ImageUrl.value)
    props.editor.chain().focus().setImage({ src: ImageUrl.value, width: ImageWidth.value, height: ImageWidth.value }).run()
  showImagePopover.value = false
  ImageUrl.value = ''
  ImageWidth.value = ''
  ImageHeight.value = ''
}
const addMedia = () => {
  if (MediaUrl.value)
    props.editor.chain().focus().setExternalVideo({ src: MediaUrl.value, width: MediaWidth.value, height: MediaHeight.value }).run()
  showMediaPopover.value = false
  MediaUrl.value = ''
  MediaWidth.value = ''
  MediaHeight.value = ''
}
const fontOptions = ref([{
  label: '微软雅黑',
  key: '微软雅黑',
}, {
  label: '宋体',
  key: '宋体',
}, {
  label: '楷体',
  key: '楷体',
}])
/**  avaiable font family
 ** 宋体、楷体、微软雅黑,Comic Sans MS */

const handleFontUpdateValue = (value: string | number | Array<string | number> | null) => {
  props.editor.chain().focus().setFontFamily(`${value}`).run()
}
</script>
<style lang="scss" scoped>
.TipTapFixedMenu {
    width:100%;
    padding:$spacing*2 $spacing*4;
    display:flex;
    align-items:center;
    background-color:$grey-100;
}
.AddImagePopOverContainer {
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: flex-start;
  gap:$spacing*4;
}
.AddMediaPopOverContainer {
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: flex-start;
  gap:$spacing*4;
}
.popover__action {
  width:100%;
  display: flex;
  align-items:center;
  justify-content: center;
  gap:$spacing*4;
}
.TipTapFixedMenu {
  & ::v-deep(.n-tree-select) {
    width:12rem;
  }
}
</style>
