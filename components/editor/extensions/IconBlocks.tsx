import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import { NoteIcon, PitfallIcon, BookIcon, TriangleAlertIcon } from '@/components/icons';
import { Icons } from './extension-icon-block';

export default function IconBlocks(props: any) {
  const iconName = props.node.attrs.icon as Icons;

  if (iconName === 'icon-note') {
    return (
      <NodeViewWrapper className=" rounded-2xl p-2 sm:p-8 bg-wash-100 dark:bg-wash-730">
        <div className='flex items-center'>
          <NoteIcon className='text-emerald-500' />
          <span className='ps-4 text-2xl font-bold text-emerald-600 dark:text-emerald-500'>Note</span>
        </div>
        <NodeViewContent />
      </NodeViewWrapper>
    )
  }
  if (iconName === 'icon-pitfall') {
    return (
      <NodeViewWrapper className="rounded-2xl p-2 sm:p-8 bg-amber-50 dark:bg-amber-800/20">
        <div className='flex items-center'>
          <PitfallIcon className='text-yellow-500' />
          <span className='ps-4 text-2xl font-bold text-yellow-600 dark:text-yellow-500'>Pitfall</span>
        </div>
        <NodeViewContent />
      </NodeViewWrapper>
    );
  }
  if (iconName === 'icon-deepdive') {
    return (
      <NodeViewWrapper className=" rounded-2xl p-2 sm:p-8 bg-wash-70 dark:bg-wash-770">
        <div className="flex items-center">
          <BookIcon className='w-4 h-4 text-cyan-500' />
          <span className='ps-4 text-sm font-bold text-cyan-600 dark:text-cyan-500'>DEEP DIVE</span>
        </div>
        <NodeViewContent />
      </NodeViewWrapper>
    );
  }
  if (iconName === 'icon-destructive') {
    return (
      <NodeViewWrapper className="rounded-2xl p-2 sm:p-8 bg-red-50 dark:bg-red-800/20">
        <TriangleAlertIcon className='w-4 h-4 text-red-500' />
        <NodeViewContent />
      </NodeViewWrapper>
    );
  }
  else return null;
}