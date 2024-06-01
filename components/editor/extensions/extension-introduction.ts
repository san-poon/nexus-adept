import Paragraph from '@tiptap/extension-paragraph';

export const Introduction = Paragraph.extend({
  name: 'introduction',

  content: 'paragraph block+',

  addOptions() {
    return {
      HTMLAttributes: {}
    }
  }
});