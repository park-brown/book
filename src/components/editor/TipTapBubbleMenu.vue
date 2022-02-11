<template>
  <bubble-menu v-if="props.editor" :editor="props.editor" class="bubbleMenu">
    <!--加粗-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <i-clarity-bold-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 加粗 </span>
    </n-tooltip>
    <!--斜体-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <i-clarity-italic-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 斜体 </span>
    </n-tooltip>
    <!--删除线-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <i-clarity-strikethrough-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 删除线 </span>
    </n-tooltip>
    <!--下划线-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('underline') }"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <i-dashicons-editor-underline />
        </n-button>
      </template>
      <span class="subtitle-1"> 下划线 </span>
    </n-tooltip>
    <!--标题一-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          <i-gridicons-heading-h1 />
        </n-button>
      </template>
      <span class="subtitle-1"> 标题一 </span>
    </n-tooltip>
    <!--标题二-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          <i-gridicons-heading-h2 />
        </n-button>
      </template>
      <span class="subtitle-1"> 标题二 </span>
    </n-tooltip>
    <!--标题三-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          <i-gridicons-heading-h3 />
        </n-button>
      </template>
      <span class="subtitle-1"> 标题三 </span>
    </n-tooltip>
    <!--无序表单-->
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <i-clarity-bullet-list-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 无序表单 </span>
    </n-tooltip>
    <!--有序表单-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <i-codicon-list-ordered />
        </n-button>
      </template>
      <span class="subtitle-1"> 有序表单 </span>
    </n-tooltip>
    <!--添加链接-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-popover
          :show="showLinkPopover"
          placement="bottom"
          trigger="click"
          :on-clickoutside="() => { showLinkPopover = false }"
        >
          <template #trigger>
            <n-button :bordered="false" @click="showLinkPopover = !showLinkPopover">
              <i-clarity-link-line />
            </n-button>
          </template>
          <div class="linkPopOverContainer">
            <n-input v-model:value="link" type="text" placeholder="https://example.com" />
            <n-button
              :bordered="false"
              :class="{ 'is-active': editor.isActive('link') }"
              @click="setLink"
            >
              添加
            </n-button>
          </div>
        </n-popover>
      </template>
      <span class="subtitle-1"> 链接 </span>
    </n-tooltip>
    <!--块引用-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <i-clarity-block-quote-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 块引用 </span>
    </n-tooltip>
    <!--左对齐-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          @click="editor.chain().focus().setTextAlign('left').run()"
        >
          <i-clarity-align-left-text-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 左对齐 </span>
    </n-tooltip>
    <!--居中-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          @click="editor.chain().focus().setTextAlign('center').run()"
        >
          <i-cil-align-center />
        </n-button>
      </template>
      <span class="subtitle-1"> 居中 </span>
    </n-tooltip>
    <!--右对齐-->
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button
          :bordered="false"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          @click="editor.chain().focus().setTextAlign('right').run()"
        >
          <i-clarity-align-right-text-line />
        </n-button>
      </template>
      <span class="subtitle-1"> 右对齐 </span>
    </n-tooltip>
  </bubble-menu>
</template>
<script lang="ts" setup>
import { BubbleMenu } from '@tiptap/vue-3'
const props = defineProps(['editor'])
const showLinkPopover = ref(false)
const link = ref('')
const setLink = () => {
  const url = link.value
  // cancelled
  if (url === null)
    return

  /**
   **empty do nothing */
  if (url === '') {
    props.editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .unsetLink()
      .run()

    return
  }

  /**
   **update link */
  props.editor
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run()

  /**
   ** close link popover after save**/
  showLinkPopover.value = false
}

</script>
<style lang="scss" scoped>
.linkPopOverContainer {
  width: 36rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 4;
}

</style>
