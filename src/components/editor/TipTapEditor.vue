<template>
  <n-scrollbar style="max-height: 86rem;" class="scrollbar">
    <TipTapBubbleMenu :editor="editor" />
    <EditorContent :editor="editor" class="TipTapEditor js-toc-content" />
    <div class="js-toc" />
  </n-scrollbar>
</template>
<script setup lang="ts">

import { useEditor, EditorContent } from '@tiptap/vue-3'

// import { generateJSON } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Heading } from '@tiptap/extension-heading'
import { BulletList } from '@tiptap/extension-bullet-list'
import { ListItem } from '@tiptap/extension-list-item'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { Link } from '@tiptap/extension-link'
import { Blockquote } from '@tiptap/extension-blockquote'
import { TextAlign } from '@tiptap/extension-text-align'
import { CharacterCount } from '@tiptap/extension-character-count'

const characterCount = ref<number>(0)
const editor = useEditor({
  content: '',
  extensions: [
    StarterKit,
    Underline,
    Heading.configure({
      levels: [1, 2, 3],
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right'],
    }),
    BulletList,
    OrderedList,
    ListItem,
    Link,
    Blockquote,
    CharacterCount,
  ],
  // triggered on every change
  onUpdate: ({ editor }) => {
    const json = editor.getJSON()

    // send the content to an API here
    console.log('json:', json)
    /**
     ** 中文模式下计算字数取 character */
    characterCount.value = editor.storage.characterCount.characters()
    console.log('char:', characterCount.value)
    /**
     **获取所有标题生成目录 */
    window.tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.ProseMirror',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true,
    })
  },
})

</script>

<style lang="scss" scoped>
/* Basic editor styles */
.TipTapEditor {
  height: 100%;
  margin: $spacing * 4 0 0 0;
}
.TipTapEditor ::v-deep(.ProseMirror) {
  @include laptop {
    width: 100%;
    max-width: 82rem;
    margin: 0 auto;
    height: 100%;
    padding: $spacing * 24;
  }
  &:focus-visible {
    outline: none;
  }
  & > *  {
    margin-top: 0.75rem;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  p {
    font-size: 14px;
  }

  // h1,
  // h2,
  // h3,
  // h4,
  // h5,
  // h6 {
  //   line-height: 1.1;
  // }
  h1 {
    @include h1
  }
  h2 {
    @include h2
  }
  h3 {
    @include h3
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
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
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
// .js-toc {
//   position: absolute;
//   top:0;
//   left:0;
// }

</style>
