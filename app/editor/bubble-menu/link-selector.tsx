import { cn, getUrlFromString } from "@/lib/utils";
import { Editor } from "@tiptap/core";
import { Check, Trash, ExternalLink } from "lucide-react";
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

interface LinkSelectorProps {
    editor: Editor;
    isOpen: boolena;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LinkSelector: FC<LinkSelectorProps> = ({
    editor,
    isOpen,
    setIsOpen,
}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    // Autofocus on input by default
    useEffect(() => {
        inputRef.current && inputRef.current?.focus();
    });

    return (
        <div className="relative">
            <button
                type="button"
                className=" flex h-full items-center space-x-2 px-3 py-1.5 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 active:bg-neutral-500"
                onClick={() => { setIsOpen(!isOpen) }}
            >
                <ExternalLink className="w-4 h-4" />
            </button>

            {isOpen && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget[0] as HTMLInputElement;
                    const url = getUrlFromString(input.value);
                    url && editor.chain().focus().setLink({ href: url }).run();
                    setIsOpen(false);
                }}
                    className="fixed top-full z-[99999] mt-1 flex w-60 overflow-hidden rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Paste a link..."
                        className=" flex-1 bg-white dark:bg-black p-1 text-sm outline-none"
                    />
                    {editor.getAttributes("link").href ? (
                        <button
                            type="button"
                            className="flex items-center rounded-full p-1 text-red-500 transition-all bg-red-100 dark:bg-red-800"
                            onClick={() => {
                                editor.chain().focus().unsetLink().run();
                                setIsOpen(false);
                            }}
                        >
                            <Trash className="w-4 h-4" />
                        </button>
                    ) : (
                        <button className="flex items-center rounded-full p-1 text-neutral-500 transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700">
                            <Check className="h-4 w-4" />
                        </button>
                    )}
                </form>
            )}
        </div>
    )
}