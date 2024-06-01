import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';

export default function ObjectiveBlock() {
  return (
    <NodeViewWrapper>
      <div className='bg-wash-50 dark:bg-wash-700'>
        <h2 className='text-xl font-medium'>We Will Learn</h2>
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  )
}