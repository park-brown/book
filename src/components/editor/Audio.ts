import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import EditorAudio from './EditorAudio.vue'

export default Node.create({
  name: 'audio',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      url: {
        default: '',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'audio',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['audio', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(EditorAudio)
  },
  addCommands() {
    return {
      insertAudio: (options: any) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },
})
