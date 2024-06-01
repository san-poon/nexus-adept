import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import IconBlocks from './IconBlocks';

export interface IconBlockOptions {
  /**
  * Custom HTML attributes that should be added to the rendered HTML tag.
  * @default {}
  * @example { class: 'bg-wash-50 dark:bg-wash-800' }
  */
  HTMLAttributes: Record<string, any>
};

export type Icons =
  | 'icon-note'
  | 'icon-pitfall'
  | 'icon-deepdive'
  | 'icon-destructive';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iconBlock: {
      /**
       * Set an icon block, and the meaningful background-color
       * @param icon Available Icons: 'icon-note' | 'icon-pitfall' | 'icon-deepdive' | 'icon-destructive'
       */
      setIconBlock: (icon: Icons) => ReturnType,
      /**
       * Remove an icon block.
       */
      unsetIconBlock: () => ReturnType,
      /**
       * Toggle an icon block.
       * @param icon Available Icons: 'icon-note' | 'icon-pitfall' | 'icon-deepdive' | 'icon-destructive'
       */
      toggleIconBlock: (icon: Icons) => ReturnType,
    }
  }
}

export const IconBlock = Node.create<IconBlockOptions>({
  name: 'icon-block',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  content: 'block+',
  group: 'block',
  defining: true,

  addAttributes() {
    return {
      icon: {
        default: null,
        parseHTML: element => element.getAttribute('data-icon'),
        renderHTML: attributes => {
          if (!attributes.icon) {
            return {};
          } return { 'data-icon': attributes.icon };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-icon]'
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div', mergeAttributes(HTMLAttributes, {
        class: `icon-node relative p-2`,
      },),
      0
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(IconBlocks);
  },

  addCommands() {
    return {
      setIconBlock: (icon) => ({ commands }) => {
        return commands.wrapIn(this.name, { icon });
      },
      unsetIconBlock: () => ({ commands }) => {
        return commands.lift(this.name);
      },
      toggleIconBlock: (icon) => ({ commands }) => {
        return commands.toggleWrap(this.name, { icon });
      }
    }
  },
});
