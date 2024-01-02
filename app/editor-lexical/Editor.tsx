import { $getRoot, $getSelection } from 'lexical';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const theme = {
    // Theme styling goes here...
    paragraph: styles.paragraph,
}

/**
 * Lexical React plugins are React components, which makes them highly composable.
 * Furthermore, you can lazy load plugins if desired, so you don't pay the cost of 
 * plugins until you actually use them.
 */
function AutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        // Focus th editor when the effect fires!
        editor.focus();
    }, [editor]);

    return null;
}

/**
 * Catch any errors that occur during Lexical updates and log them,
 * or throw them as needed. If not throw, Lexical will try to recover
 * gracefully without losing user data.
 */
function onError(error: any) {
    console.log(error);
}

/**
 * When the editor changes, get notified via the OnChangePlugin
 */
// function OnChangePlugin({ onChange }: any) {
//     // Access the editor through the LexicalComposerContex
//     const [editor] = useLexicalComposerContext();
//     // Wrap our listener in useEffect to handle the teardown and avoid state references
//     useEffect(() => {
//         // most listeners return a teardown function that can be called to clean them up
//         return editor.registerUpdateListener(({ editorState }) => {
//             // call onChange here to pass the latest state up to the parent
//             onChange(editorState);
//         });
//     }, [editor, onChange]);
//     return null;
// }

export default function Editor() {
    const initialConfig = {
        namespace: 'LessonEditor',
        theme: theme,
        onError,
    };

    const [editorState, setEditorState] = useState();
    function onChange(editorState: any) {
        // Call toJSON the the EditorState object, which producs a serialization safe string
        const editorStateJSON = editorState.toJSON();
        // However, we still have a JavaScript object, so we
        // need to convert it to an actual string with JSON.stringfy
        setEditorState(JSON.stringify(editorStateJSON));
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <OnChangePlugin onChange={onChange} />
        </LexicalComposer>
    )

}