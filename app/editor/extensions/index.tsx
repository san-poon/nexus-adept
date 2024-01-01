import StarterKit from "@tiptap/starter-kit";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TiptapLink from "@tiptap/extension-link";
import TiptapImage from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TiptapUnderline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Highlight from "@tiptap/extension-highlight";
import SlashCommand from "./slash-command";
import { InputRule } from "@tiptap/core";
import UpdatedImage from "./updated-image";
import CustomKeymap from "./custom-keymap";
import DragAndDrop from "./drag-and-drop";


export const defaultExtensions = [
    StarterKit.configure({
        bulletList: {
            HTMLAttributes: {
                class: " list-disc list-outside leading-3 mt-2",
            },
        },
        orderedList: {
            HTMLAttributes: {
                class: "list-decimal list-outside leading-3 mt-2",
            },
        },
        blockquote: {
            HTMLAttributes: {
                class: " border-l-4 border-neutral-500 ",
            },
        },
        listItem: {
            HTMLAttributes: {
                class: " leading-normal -mb-2 ",
            },
        },
        codeBlock: {
            HTMLAttributes: {
                class: " rounded-lg bg-neutral-200 dark:bg-neutral-700 p-5 font-mono font-medium ",
            },
        },
        code: {
            HTMLAttributes: {
                class: " rounded-md bg-neutral-200 dark:bg-neutral-700 px-1.5 py-1 font-mono font-medium "
            },
        },
        horizontalRule: false,
        dropcursor: {
            color: " #DBEAFE ",
            width: 4,
        },
        gapcursor: false,
    }),

    // patch to fix the horizontal rule bug: https://github.com/ueberdosis/tiptap/pull/3859#issuecomment-1536799740
    HorizontalRule.extend({
        addInputRules() {
            return [
                new InputRule({
                    find: /^(?:---|—-|___\s|\*\*\*\s)$/,
                    handler: ({ state, range }) => {
                        const attributes = {};

                        const { tr } = state;
                        const start = range.from;
                        let end = range.to;

                        tr.insert(start - 1, this.type.create(attributes)).delete(
                            tr.mapping.map(start),
                            tr.mapping.map(end)
                        );
                    },
                }),
            ];
        },
    }).configure({
        HTMLAttributes: {
            class: " mt-4 mb-6 border-t border-stone-500"
        },
    }),

    TiptapLink.configure({
        HTMLAttributes: {
            class: " text-neutral-500 underline underline-offset-[3px] hover:text-neutral-700 dark:hover:text-neutral-300 trasition-colors cursor-pointer ",
        },
    }),
    UpdatedImage.configure({
        HTMLAttributes: {
            class: " rounded-lg border border-neutral-200 dark:border-neutral-700 ",
        },
    }),
    Placeholder.configure({
        placeholder: ({ node }) => {
            if (node.type.name === "heading") {
                return `Heading ${node.attrs.level}`
            }
            return "Press '/' for commands..."
        },
        includeChildren: true,
    }),
    SlashCommand,
    TiptapImage,
    TiptapUnderline,
    TextStyle,
    Color,
    Highlight.configure({
        multicolor: true,
    }),
    TaskList.configure({
        HTMLAttributes: {
            class: " not-prose pl-2 ",
        },
    }),
    TaskItem.configure({
        HTMLAttributes: {
            class: " flex items-start my-4 ",
        },
        nested: true,
    }),
    CustomKeymap,
    DragAndDrop,
]