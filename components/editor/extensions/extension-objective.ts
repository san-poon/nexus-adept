import BulletList from '@tiptap/extension-bullet-list'
import { ReactNodeViewRenderer } from '@tiptap/react';
import ObjectiveBlock from './ObjectiveBlock';

export const Objective = BulletList.extend({
  name: 'objective',

  content: 'bulletList block+',

  addNodeView() {
    return ReactNodeViewRenderer(ObjectiveBlock)
  },
});