'use client';

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { defaultExtensions } from "../editor/extensions";

export const defaultEditorContent = {
    type: "doc",
    content: [
        {
            type: 'heading',
            attrs: { level: 1 },
            content: [{ type: "text", text: "Lesson Title Here..." }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "A captivating introduction Here..."
                },
            ],
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [
                {
                    type: "text",
                    text: "You will learn..."
                },
                {
                    type: "listItem",
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                { type: "text", text: "Obective 1" },
                                { type: "text", text: "Objective 2" },
                                { type: "text", text: "..." },
                            ],
                        },
                    ],
                },
            ],
        },
    ]
}

const Editor = () => {
    const editor = useEditor({
        extensions: [
            ...defaultExtensions,

        ],
        content: defaultEditorContent,
    })

    return (
        <EditorContent editor={editor} />
    )
}

export default Editor;