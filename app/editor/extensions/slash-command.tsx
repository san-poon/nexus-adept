import React, {
    useState,
    useEffect,
    useCallback,
    ReactNode,
    useRef,
    useLayoutEffect,
    useContext,
} from 'react';
import { Editor, Range, Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { ReactRenderer } from '@tiptap/react';
import tippy from 'tippy.js';

import {
    Heading1,
    Heading2,
    List,
    ListOrdered,
    MessageSquarePlus,
    Text,
    TextQuote,
    Image as ImageIcon,
    Code,
    CheckSquare
} from 'lucide-react';
import { LoadingCircle, Magic } from '@/app/icons';
import { toast } from 'sonner';
import { startImageUpload } from '../plugins/upload-image';

interface CommandItemprops {
    title: string;
    description: string;
    icon: ReactNode;
}

interface CommandProps {
    editor: Editor;
    range: Range;
}

const Command = Extension.create({
    name: "slash-command",
    addOptions() {
        return {
            suggesion: {
                char: "/",
                command: ({
                    editor,
                    range,
                    props,
                }: {
                    editor: Editor,
                    range: Range,
                    props: any
                }) => {
                    props.command({ editor, range });
                },
            },
        };
    },
    addProseMirrorPlugins() {
        return [
            Suggestion({
                edtor: this.editor,
                ...this.options.suggestion,
            }),
        ];
    },
});

const getSuggestionItems = ({ query }: { query: string }) => {
    return [
        {
            title: "Text",
            description: "Start typing with just plain text.",
            searchTerms: ["p", 'paragraph'],
            icon: <Text size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleNode("paragraph", "paragraph")
                    .run();
            },
        },
        {
            title: "To-do List",
            description: "Track tasks with a to-do list.",
            searchTerms: ["todo", "task", "list", "check", "checkbox"],
            icon: <CheckSquare size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleTaskList()
                    .run();
            },
        },
        {
            title: "Heading",
            description: 'Page Heading',
            searchTerms: ["title", 'large', 'big'],
            icon: <Heading1 size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode("heading", { level: 1 })
                    .run();
            },
        },
        {
            title: "Heading 2",
            description: "Heading Level-2",
            searchTerms: ['subtitle', 'medium', 'sub-heading'],
            icon: <Heading2 size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode("heading", { level: 2 })
                    .run();
            },
        },
        {
            title: 'Bullet List',
            description: "Bullet List",
            searchTerms: ['unordered', 'point'],
            icon: <List size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleBulletList().run();
            },
        },
        {
            title: "Numbered List",
            description: "Create a list with numbering.",
            searchTerms: ["ordered"],
            icon: <ListOrdered size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor.chain().focus().deleteRange(range).toggleOrderedList().run();
            },
        },
        {
            title: "Quote",
            description: "Capture a quote.",
            searchTerms: ["blockquote"],
            icon: <TextQuote size={18} />,
            command: ({ editor, range }: CommandProps) =>
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleNode("paragraph", "paragraph")
                    .toggleBlockquote()
                    .run(),
        },
        {
            title: "Code",
            description: "Capture a code snippet.",
            searchTerms: ["codeblock"],
            icon: <Code size={18} />,
            command: ({ editor, range }: CommandProps) =>
                editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
        },
        {
            title: "Image",
            description: "Upload an image from your computer.",
            searchTerms: ["photo", "picture", "media"],
            icon: <ImageIcon size={18} />,
            command: ({ editor, range }: CommandProps) => {
                editor.chain().focus().deleteRange(range).run();
                // upload image
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = async () => {
                    if (input.files?.length) {
                        const file = input.files[0];
                        const pos = editor.view.state.selection.from;
                        startImageUpload(file, editor.view, pos);
                    }
                };
                input.click();
            },
        },
    ].filter((item) => {
        if (typeof query === 'string' && query.length > 0) {
            const search = query.toLowerCase();
            return (
                item.title.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                (item.searchTerms &&
                    item.searchTerms.some((term: string) => term.includes(search)))
            );
        }
        return true;
    })
};


