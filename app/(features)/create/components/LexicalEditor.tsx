'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';

import defaultEditorNodes from '../nodes/defaultEditorNodes';
import theme from '../editorTheme';


const editorConfig = {
  namespace: "LessonEditor",
  theme,
  nodes: [...defaultEditorNodes],
  onError: (error: any) => {
    console.error(error);
  },
}

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='min-h-[92vh] w-full max-w-screen-lg sm:mb-[calc(80vh)]'>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className='min-h-[92vh] w-full resize-none p-2 lg:p-4 outline-0' />
          }
          placeholder={<div className="">Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <HistoryPlugin />
      <AutoFocusPlugin />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
    </LexicalComposer>
  )
}