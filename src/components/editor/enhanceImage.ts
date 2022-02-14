import { Image } from '@tiptap/extension-image'

export const EnhanceImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: 'auto',
      },
      height: {
        default: 'auto',
      },
    }
  },
})
