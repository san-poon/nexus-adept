'use client';

import { useEffect, useState } from "react";
import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import { defaultEditorProps } from "@/app/editor/props"
import { defaultExtensions } from "@/app/editor/extensions";
import useLocalStorage from "@/lib/use-local-storage";
import { useDebouncedCallback } from "use-debounce";
import { defaultEditorContent } from "./default-content";
import { EditorBubbleMenu } from "./bubble-menu";
// import { ImageResizer } from "./extensions/image-resizer";
import { EditorProps } from '@tiptap/pm/view';
import { Editor as EditorClass, Extensions } from '@tiptap/core';


export default function Editor({
    className = "w-full",
    defaultValue = defaultEditorContent,
    extensions = [],
    editorProps = {},
    onUpdate = () => { },
    onDebouncedUpdate = () => { },
    debounceDuration = 750,
    storageKey = "autodidact__content",
    disableLocalStorage = false,
}: {
    /**
     * Additional classes to add to the editor container.
     * Defaults to ""
     */
    className?: string;

    /**
     * The default value to use for the editor.
     * Defaults to defaultEditorcontent.
     */
    defaultValue?: JSONContent | string;

    /**
     * A list of extensions to use for the editor, in addition to the default Novel extensions
     * Defaults to []
     */
    extensions?: Extensions;

    /**
     * Props to pass to the underlying Tiptap editor, in addition to default Novel editor props
     * Defaults to {}
     */
    editorProps?: EditorProps;

    /**
     * A callback function that is called whenever the editor is updated.
     * Defaults to () => {}
     */
    // eslint-disable-next-line no-unused-vars
    onUpdate?: (editor?: EditorClass) => void | Promise<void>;

    /**
     * A callback function that is called whenever the editor is updated,
     *  but only after the defined debounce duration.
     * Defaults to () => {}
     */
    // eslint-disable-next-line no-unused-vars
    onDebouncedUpdate?: (editor?: EditorClass) => void | Promise<void>

    /**
     * The duration (in milliseconds) to debounce the onDebouncedUpdate callback.
     * Defaults to 750.
     */
    debounceDuration?: number;

    /**
     * The key to use for storing the editor's value in local storage
     * Defaults to "autodidact__content".
     */
    storageKey?: string;

    /**
     * Disable local storage (read/save)
     * Defaults to false.
     */
    disableLocalStorage?: boolean;
}) {


    const [content, setContent] = useLocalStorage(storageKey, defaultValue);

    const [hydrated, setHydrated] = useState(false);

    const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
        const json = editor.getJSON();
        onDebouncedUpdate(editor);

        if (!disableLocalStorage) {
            setContent(json);
        }
    }, debounceDuration);

    const editor = useEditor({
        extensions: [...defaultExtensions, ...extensions],

        editorProps: {
            ...defaultEditorProps,
            ...editorProps,
        },

        onUpdate: (e) => {
            onUpdate(e.editor);
            debouncedUpdates(e);
        },
        autofocus: "end",
        editable: true,
    });

    // Default: Hydrate the editor with the content from localStorage.
    // If disableLocalStorage is true, hydrate the editor with the defaultValue.
    useEffect(() => {
        if (!editor || hydrated) return;

        const value = disableLocalStorage ? defaultValue : content;

        if (value) {
            editor.commands.setContent(value);
            setHydrated(true);
        }
    }, [editor, defaultValue, content, hydrated, disableLocalStorage]);

    return (
        <div
            onClick={() => {
                editor?.chain().focus().run();
            }}
            className={className}
        >
            {/* {editor && <EditorBubbleMenu editor={editor} updateDelay={1000} />} */}

            {/* {editor?.isActive("image") && <ImageResizer editor={editor} />} */}

            <EditorContent editor={editor} />

        </div>
    )

}