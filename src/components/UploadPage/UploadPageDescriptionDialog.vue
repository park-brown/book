<template>
  <n-modal :show="props.showModal">
    <n-card
      style="width: 960px"
      title="详细信息"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button size="small" @click="closeDescModal">
          <i-clarity-close-line />
        </n-button>
      </template>
      <!-- modal content -->
      <n-card :bordered="false">
        <div class="cardContent">
          <n-input v-model:value="title" type="text" placeholder="书名" />
          <n-select
            v-model:value="category"
            placeholder="类型"
            filterable
            multiple
            tag
            :options="categoryOptions"
          />
          <div class="bookcoverContainer">
            <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="1">
              <n-upload-dragger>
                <i-icon-park-outline-add-pic style="width:4.8rem;height:4.8rem" />
                <n-p class="h5">
                  封面图
                </n-p>
                <n-p class="subtitle-1">
                  选择或上传一张可展示的封面图。好的封面图能脱颖而出，吸引读者的眼球
                </n-p>
              </n-upload-dragger>
            </n-upload>
          </div>
          <div class="footer">
            <n-button size="small" type="success">
              创建
            </n-button>
            <n-button size="small" type="error" @click="closeDescModal">
              取消
            </n-button>
          </div>
        </div>
      </n-card>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
interface Props {
  showModal: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['close:descModal'])
const closeDescModal = () => {
  emits('close:descModal')
}
const title = ref('')
const category = ref('')
const categoryOptions = ref([{
  label: '政治',
  value: 'politics',
},
{
  label: '社会学',
  value: 'sociology',
}, {
  label: '历史',
  value: 'history',
}, {
  label: '金融',
  value: 'finance',
}, {
  label: '心理学',
  value: 'psychology',
}, {
  label: '法律',
  value: 'law',
}, {
  label: '科学',
  value: 'science',
}, {
  label: '教育',
  value: 'education',
}, {
  label: '哲学',
  value: 'philosophy',
}])
</script>
<style lang="scss" scoped>
.cardContent {
  width:100%;
  max-width:50rem;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap:$spacing*8;
}
.bookcoverContainer {
    width:100%;
    min-height: 20rem;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
    gap:$spacing*4;
    & ::v-deep(.n-upload-trigger) {
        width:50rem
    }
    & ::v-deep(.n-upload-dragger) {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap:$spacing *2
    }
}
.footer {
  width:100%;
  max-width:50rem;
  margin:0 auto;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:$spacing * 4;
}
</style>
