'use client';

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import { TRANSFORMERS } from '@lexical/markdown';

import ComponentPickerPlugin from './plugins/ComponentPickerPlugin';
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
      <div className='min-h-[92vh] w-full max-w-screen-lg sm:mb-[calc(80vh)] border border-wash-500 rounded-3xl mt-5 p-4'>
        <RichTextPlugin
          placeholder={<div className="">Enter some text...</div>}
          contentEditable={
            <ContentEditable className='min-h-[92vh] w-full resize-none p-2 lg:p-4 outline-0' />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <HistoryPlugin />
      <AutoFocusPlugin />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      <ComponentPickerPlugin />

      <HorizontalRulePlugin />
    </LexicalComposer>
  );

}