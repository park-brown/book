<template>
  <TipTapFixedMenu :editor="editor" />
  <n-scrollbar style="max-height: 75rem;" class="scrollbar">
    <TipTapBubbleMenu :editor="editor" />
    <EditorContent :editor="editor" class="TipTapEditor" />
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
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TextStyle } from '@tiptap/extension-text-style'
import { FontFamily } from '@tiptap/extension-font-family'
import { Highlight } from '@tiptap/extension-highlight'
import { EnhanceImage } from './enhanceImage'
import ExternalVideo from './externalVideo'
import MathBlock from './Math'
import Audio from './Audio'
import {Comment} from './Comment'
import { useTableOfContent } from '~/stores/TableOfContent'
import { useEventListener } from '@vueuse/core'
/**
 ** import over */
const TOC = useTableOfContent()
const characterCount = ref<number>(0)

const allComments = ref<any[]>([]);
const findCommentsAndStoreValues = () => {
  const proseMirror = document.querySelector('.ProseMirror');
  const comments = proseMirror?.querySelectorAll('span[data-comment]');
  const tempComments: any[] = [];
  if (!comments) {
    allComments.value = [];
    return;
  }
  comments.forEach((node) => {
    const uuid = node.getAttribute('data-comment');
    useEventListener(node,'click', () => {console.log('current-data-comment:',node.getAttribute('data-comment') )})    
      tempComments.push({
        uuid,
      });
    
  });
  allComments.value = tempComments;
};
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
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    EnhanceImage,
    TextStyle,
    Highlight,
    FontFamily,
    ExternalVideo,
    MathBlock,
    Audio,
    Comment
  ],
  // triggered on every change
  onUpdate: ({ editor }) => {
    const json = editor.getJSON()

    // send the content to an API here
    console.log('json:', json)
    findCommentsAndStoreValues();
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
           ** headings [...,1,1,2] */
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
           ** headings [...,1,2,2,3] */

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
watch(allComments, () => {
  console.log('allComments:',allComments.value)
})
</script>

<style lang="scss" scoped>
/* Basic editor styles */
.TipTapEditor {
  height: 75rem;
  margin: $spacing * 4 0 0 0;
}
.TipTapEditor ::v-deep(.ProseMirror) {
  @include laptop {
    width: 100%;
    max-width: 82rem;
    margin: 0 auto;
    height: 100%;
    padding: $spacing * 12;
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

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }
  .tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
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
    &.ProseMirror-selectednode {
      outline: 3px solid #68CEF8;
    }
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
</style>
