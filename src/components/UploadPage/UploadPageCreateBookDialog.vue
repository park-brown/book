<template>
  <n-modal :show="props.showModal" transform-origin="center">
    <n-card
      style="width: 960px"
      title="创建电子书"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button size="small" @click="closeModal">
          <i-clarity-close-line />
        </n-button>
      </template>
      <!-- modal content -->
      <n-card :bordered="false">
        <div class="cardContent">
          <div class="drapDrop">
            <n-upload>
              <n-upload-dragger>
                <i-ic-sharp-file-upload style="width:9.6rem;height:9.6rem" />
                <n-p depth="3" style="margin: 8px 0 0 0">
                  拖放要上传的文件
                </n-p>
                <n-p depth="3" style="margin: 8px 0 0 0">
                  您的文件在发布之前将处于私享状态。
                </n-p>
              </n-upload-dragger>
            </n-upload>
          </div>
          <div class="manualCreate">
            <n-button size="small" type="success" @click="openDescModal">
              手动创建
            </n-button>
          </div>
        </div>
      </n-card>
      <template #footer>
        <n-p depth="3" style="margin: 8px 0 0 0">
          1.请勿侵犯他人的版权或隐私权
        </n-p>
        <n-p depth="3" style="margin: 8px 0 0 0">
          2.您的文件必须小于50 MB,并且页数不能超过400页；
        </n-p>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">

interface Props {
  showModal: boolean
}

const props = defineProps<Props>()
const emits = defineEmits(['close:modal', 'open:descModal'])
const closeModal = () => {
  emits('close:modal')
}
const openDescModal = () => {
  emits('open:descModal')
}
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
</style>
