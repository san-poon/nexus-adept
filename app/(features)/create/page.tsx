import './prosemirror.css';
import Editor from '@/components/editor/Editor';

export default function EditorPage() {
  return (
    <div className='flex items-center justify-center'>
      <Editor />
    </div>
  )
}