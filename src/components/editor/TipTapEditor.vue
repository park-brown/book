<template>
  <n-scrollbar style="max-height: 86rem;" class="scrollbar">
    <TipTapBubbleMenu :editor="editor" />
    <EditorContent :editor="editor" class="TipTapEditor js-toc-content" />
  </n-scrollbar>
</template>
<script setup lang="ts">

import { useEditor, EditorContent } from '@tiptap/vue-3'
import { nanoid } from 'nanoid'
// import { generateJSON } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Link } from '@tiptap/extension-link'
import { TextAlign } from '@tiptap/extension-text-align'
import { CharacterCount } from '@tiptap/extension-character-count'
import { useTableOfContent } from '~/stores/TableOfContent.ts'
const TOC = useTableOfContent()
const characterCount = ref<number>(0)
const editor = useEditor({
  content: '',
  extensions: [
    StarterKit.configure({
      // Configure an included extension
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Underline,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right'],
    }),
    Link,
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
    // console.log('char:', characterCount.value)
    /**
     **1)get all heading into headings array */
    const headings = []
    json.content.slice().forEach(item => item.type === 'heading' ? headings.push(item) : null)

    /**
     **2) transform flat headings array into nested tree data */
    let treeData = []
    headings.slice().forEach((heading) => {
      switch (heading.attrs.level) {
        case 1: {
          const label = heading.content[0].text
          const heading_1 = {
            key: nanoid(),
            label,
            children: [],
          }
          treeData = [...treeData, heading_1]
        }
          break
        case 2:{
          const label = heading.content[0].text
          const heading_2 = {
            key: nanoid(),
            label,
            children: [],
          }

          /**
           ** headings [...,1,2] */
          /**
           ** find the lastest heading-1  */
          const lastHeading_1 = treeData[treeData.length - 1]
          /**
          ** find position of the last index heading 1 */
          const index = treeData.findIndex(heading => heading === lastHeading_1)
          /**
           ** fill heading_2 object into the last heading_1 children array */
          const newHeading_1 = {
            ...lastHeading_1,
            children: [
              ...lastHeading_1.children,
              heading_2,
            ],
          }
          /**
           ** replace old heading with new one */
          treeData.splice(index, 1, newHeading_1)
        }
          break
        case 3:{
          const label = heading.content[0].text
          const heading_3 = {
            key: nanoid(),
            label,
          }
          /**
           ** headings [...,1,2,3] */

          /**
           ** find the lastest heading-2  */
          const lastestHeading_1 = treeData[treeData.length - 1]
          const lastestHeading_2 = lastestHeading_1.children[lastestHeading_1.children.length - 1]

          /**
          ** find position of the last index heading 1 */
          const index1 = treeData.findIndex(heading => heading === lastestHeading_1)
          /**
          ** find position of the last index heading 2 */
          const index2 = lastestHeading_1.children.findIndex(heading2 => heading2.key === lastestHeading_2.key)

          /**
           ** fill heading_3 object into the last heading_2 children array */

          treeData[index1].children[index2].children.push(heading_3)
        }

          break
        default:
          break
      }
    })
    TOC.treeData = treeData
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
