import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import MathBlock from './MathBlock.vue'

export default Node.create({
  name: 'math',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      formula: {
        default: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'math-block',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['math-block', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(MathBlock)
  },
  addCommands() {
    return {
      insertMath: (options: any) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },
})
