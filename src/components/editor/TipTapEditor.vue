<template>
  <n-scrollbar style="max-height: 86rem;">
    <bubble-menu v-if="editor" :editor="editor">
      <n-button :class="{ 'is-active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
        <i-clarity-bold-line />
      </n-button>
      <n-button :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
        <i-clarity-italic-line />
      </n-button>
      <n-button :class="{ 'is-active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()">
        <i-clarity-strikethrough-line />
      </n-button>
      <n-button :class="{ 'is-active': editor.isActive('underline') }" @click="editor.chain().focus().toggleUnderline().run()">
        <i-dashicons-editor-underline />
      </n-button>
      <n-button :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
        <i-gridicons-heading-h1 />
      </n-button>
      <n-button :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
        <i-gridicons-heading-h2 />
      </n-button>
      <n-button :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
        <i-gridicons-heading-h3 />
      </n-button>
    </bubble-menu>
    <EditorContent :editor="editor" class="TipTapEditor" />
  </n-scrollbar>
</template>
<script setup lang="ts">
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
// import { generateJSON } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'

// const output = computed(() => {
//   return generateJSON('', [
//     Document,
//     Paragraph,
//     Text,
//     Bold,
//     Underline,
//     // other extensions …
//   ])
// })

const editor = useEditor({
  content: '',
  extensions: [
    StarterKit,
    Underline,
    Heading.configure({
      levels: [1, 2, 3],
    }),
  ],
  // triggered on every change
  onUpdate: ({ editor }) => {
    const json = editor.getJSON()
    // send the content to an API here
    console.log('json:', json)
  },
})
</script>

<style lang="scss" scoped>
/* Basic editor styles */
.TipTapEditor {
    height:100%;
    margin:$spacing*4 0 0 0;
}
.TipTapEditor ::v-deep(.ProseMirror)  {
 @include laptop {
    width:100%;
    max-width:82rem;
    margin:0 auto;
    height:100%;
    padding:$spacing*24;
 }
 &:focus-visible {
     outline:none
 }
 > * + * {
    margin-top: 0.75rem;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  p {
      font-size:14px
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}

</style>
