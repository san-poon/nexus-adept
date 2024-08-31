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
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';


import ComponentPickerPlugin from './plugins/ComponentPickerPlugin';
import defaultEditorNodes from '../nodes/defaultEditorNodes';
import theme from '../editorTheme';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import { $createHeadingNode } from '@lexical/rich-text';
import { $createListItemNode, $createListNode } from '@lexical/list';


export default function Editor() {
    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className='min-h-[92vh] w-full max-w-screen-lg dark:lg:border border-wash-600 rounded-3xl lg:shadow-2xl dark:shadow-none my-4 lg:my-8 p-6 lg:p-12'>
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable className='min-h-[92vh] w-full resize-none pb-[92vh] outline-0' />
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </div>
            <HistoryPlugin />
            <AutoFocusPlugin />
            <MarkdownShortcutPlugin />
            <CodeHighlightPlugin />
            <ComponentPickerPlugin />
            <HorizontalRulePlugin />
            <ListPlugin />
            <TablePlugin />

        </LexicalComposer>
    );
}




const initialConfig = {
    editorState: $prepopulatedRichText,
    namespace: "LessonEditor",
    theme,
    nodes: [...defaultEditorNodes],
    onError: (error: any) => {
        console.error(error);
    },
}


function $prepopulatedRichText() {
    const root = $getRoot();
    if (root.getFirstChild() === null) {
        const heading = $createHeadingNode('h1');
        heading.append($createTextNode('Crafting a Good Lesson'));
        root.append(heading);

        const paragraph = $createParagraphNode();
        paragraph.append(
            $createTextNode('This part is an introduction of the lesson. It often answers the '),
            $createTextNode('reason ').toggleFormat('bold'),
            $createTextNode('behind the existence of the lesson.')
        );
        root.append(paragraph);

        const heading2 = $createHeadingNode('h2');
        heading2.append($createTextNode('You will learn'));
        root.append(heading2);

        const list = $createListNode('bullet');
        list.append(
            $createListItemNode().append(
                $createTextNode('What are ')
            )
        )

    }
}
