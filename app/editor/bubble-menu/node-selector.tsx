import { Editor } from "@tiptap/core";
import {
    Check,
    ChevronDown,
    Heading1,
    Heading2,
    Heading3,
    TextQuote,
    ListOrdered,
    TextIcon,
    Code,
    CheckSquare,
} from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Dispatch, FC, SetStateAction } from "react";
import { BubbleMenuItem } from ".";

interface NodeSelectorProps {
    editor: Editor;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const NodeSelector: FC<NodeSelectorProps> = ({
    editor,
    isOpen,
    setIsOpen,
}) => {
    const items: BubbleMenuItem[] = [
        {
            name: "Text",
            isActive: () =>
                editor.isActive("paragraph") &&
                !editor.isActive("bulletList") &&
                !editor.isActive("orderedList"),
            icon: TextIcon,
            command: () => editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
        },

        {
            name: "Heading 1",
            icon: Heading1,
            command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: () => editor.isActive("heading", { level: 1 }),
        },
        {
            name: "Heading 2",
            icon: Heading2,
            command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive("heading", { level: 2 }),
        },
        {
            name: "Heading 3",
            icon: Heading3,
            command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: () => editor.isActive("heading", { level: 3 }),
        },
        {
            name: "To-do List",
            icon: CheckSquare,
            command: () => editor.chain().focus().toggleTaskList().run(),
            isActive: () => editor.isActive("taskItem"),
        },
        {
            name: "Bullet List",
            icon: ListOrdered,
            command: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList"),
        },
        {
            name: "Numbered List",
            icon: ListOrdered,
            command: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderedList"),
        },
        {
            name: "Quote",
            icon: TextQuote,
            command: () =>
                editor
                    .chain()
                    .focus()
                    .toggleNode("paragraph", "paragraph")
                    .toggleBlockquote()
                    .run(),
            isActive: () => editor.isActive("blockquote"),
        },
        {
            name: "Code",
            icon: Code,
            command: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive("codeBlock"),
        },
    ];

    const activeItem = items.filter((item) => item.isActive()).pop() ?? {
        name: "Multiple",
    };

    return (
        <Popover open={isOpen}>
            <PopoverTrigger asChild onClick={() => setIsOpen(!isOpen)}>
                <span>{activeItem?.name}</span>
                <ChevronDown className="h-4 w-4" />
            </PopoverTrigger>

            <PopoverContent className=" z-50 my-1 rounded-lg">
                {items.map((item, index) => (
                    <button key={index}
                        onClick={() => { item.command(); setIsOpen(false); }}
                        className="rounded-full"
                        type="button">
                        <item.icon className="h-3 w-3" />
                        <span className="px-2 lg:px-4">{item.name}</span>
                        {activeItem.name === item.name && (
                            <Check className="w-4 h-4" />
                        )}
                    </button>
                ))}
            </PopoverContent>

        </Popover>
    )
}