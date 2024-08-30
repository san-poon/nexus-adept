'use client';

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';

import { TRANSFORMERS } from '@lexical/markdown';

import ComponentPickerPlugin from './plugins/ComponentPickerPlugin';
import defaultEditorNodes from '../nodes/defaultEditorNodes';
import theme from '../editorTheme';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';


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
            <div className='min-h-[92vh] w-full max-w-screen-lg dark:lg:border border-wash-600 rounded-3xl shadow-2xl dark:shadow-none my-4 lg:my-8 p-6 lg:p-12'>
                <RichTextPlugin
                    placeholder={<div className="">Enter some text...</div>}
                    contentEditable={
                        <ContentEditable className='min-h-[92vh] w-full resize-none pb-[92vh] outline-0' />
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </div>
            <HistoryPlugin />
            <AutoFocusPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <CodeHighlightPlugin />
            <ComponentPickerPlugin />
            <HorizontalRulePlugin />
            <ListPlugin />
            <TablePlugin />

        </LexicalComposer>
    );
}