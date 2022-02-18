<template>
  <bubble-menu
    v-if="props.editor"
    :editor="props.editor"
    class="CommentBubbleMenu"
    :tippy-options="{ duration: 100, placement: 'bottom' }"
    :should-show="() => true"
  >
    <div class="inner">
      <div class="header">
        <n-p class="subtitle-1">
          注释
        </n-p>
        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <n-button :bordered="false" @click="emits('close:comment-menu')">
              <i-ci-close-small />
            </n-button>
          </template>
          <span> 关闭 </span>
        </n-tooltip>
      </div>
      <n-input v-model:value="comment" type="textarea" placeholder="请输入注释" :rows="2" />
      <div class="action-footer">
        <div class="left-action">
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button :bordered="false">
                <i-fluent-delete-dismiss-28-regular />
              </n-button>
            </template>
            <span> 删除 </span>
          </n-tooltip>
        </div>
        <div class="right-action">
          <n-button :bordered="false">
            <n-p class="subtitle-1" @click="updateComment">
              确定
            </n-p>
          </n-button>
        </div>
      </div>
    </div>
  </bubble-menu>
</template>
<script lang="ts" setup>
import { BubbleMenu } from '@tiptap/vue-3'
const props = defineProps(['editor', 'currentComment', 'isCommentMenuOpen'])
const emits = defineEmits(['update:comment', 'close:comment-menu'])
const comment = ref('')
const uuid = computed(() => (props.currentComment?.uuid))

const updateComment = () => {
  emits('update:comment', { uuid: uuid.value, comment: comment.value })
  emits('close:comment-menu')
}

</script>
<style lang="scss" scoped>
.inner {
    width: 36rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing * 2;
    padding: $spacing * 2;
    position: relative;
    overflow: hidden;
}
.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .subtitle-1 {
        color: $white;
    }
}
.action-footer {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.right-action .subtitle-1 {
    color:$white
}
</style>
