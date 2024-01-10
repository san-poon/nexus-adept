
import { Check, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

import { TextBlockIcon, QuizBlockIcon, ImageBlockIcon, CodeBlockIcon } from "../icons";
import { LessonContentBlockProps, ContentTypeProps, CodeBlockProps } from "../types";

const textContentTypes = [
    {
        value: 'text',
        label: 'Text',
    },
    {
        value: 'text/note',
        label: 'Note',
    },
    {
        value: 'text/pitfall',
        label: 'Pitfall',
    },
]

export function TextCombobox({ contentBlock, onTextContentTypeChange }: { contentBlock: LessonContentBlockProps, onTextContentTypeChange: (contentBlock: LessonContentBlockProps) => void }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(contentBlock.contentType);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-xs h-min"
                >
                    {value
                        ? textContentTypes.find((textType) => textType.value === value)?.label
                        : "Text"}
                    <ChevronsUpDown className="ms-2 shrink-0 opacity-50 h-min" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search text type..." />
                    <CommandEmpty>No type found.</CommandEmpty>
                    <CommandGroup className="">
                        {textContentTypes.map((textType) => (
                            <CommandItem
                                key={textType.value}
                                value={textType.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue); // Ignore this TS error
                                    setOpen(false);
                                    onTextContentTypeChange({ ...contentBlock, contentType: currentValue as ContentTypeProps });
                                }}
                            >
                                <Check
                                    className={clsx(`
                                        "mr-2 h-4 w-4",
                                        ${value === textType.value ? "opacity-100" : "opacity-0"}
                                    `)}
                                />
                                {textType.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


const contentTypes = [
    {
        value: 'text',
        label: 'Text',
    },
    {
        value: 'image',
        label: 'Image',
    },
    {
        value: 'quiz',
        label: 'Quiz',
    },
    {
        value: 'code',
        label: 'Code',
    },
];

const BlockIcon = ({ contentType }: { contentType: string }) => {
    switch (contentType) {
        case 'text': {
            return <TextBlockIcon />
        }
        case 'image': {
            return <ImageBlockIcon />
        }
        case 'quiz': {
            return <QuizBlockIcon />
        }
        case 'code': {
            return <CodeBlockIcon />
        }
        default: {
            return null;
        }
    }
};

export function AddContentCombobox({ index, onInsertContentField }: any) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-xs h-min"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>  <span className="ms-2">Add here..</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-52">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>Not found</CommandEmpty>
                    <CommandGroup>
                        {contentTypes.map((type) => (
                            <CommandItem
                                key={type.value}
                                value={type.value}
                                onSelect={(currentValue) => {
                                    setOpen(false);
                                    onInsertContentField(index, type.value);
                                }}
                            >
                                <BlockIcon contentType={type.value} />
                                <span className="ps-4 md:ps-6"> {type.label} </span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


// For users to choose from available languages
const languages = [
    {
        value: 'javascript',
        label: 'JavaScript',
    },
    {
        value: 'css',
        label: 'CSS',
    },
    {
        value: 'html',
        label: 'HTML',
    },
];

export function CodeCombobox({ codeBlock, onCodeLangUpdate }: { codeBlock: CodeBlockProps, onCodeLangUpdate: (contentBlock: CodeBlockProps) => void }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(codeBlock.value.lang);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-xs h-min"
                >
                    {value
                        ? languages.find((textType) => textType.value === value)?.label
                        : "JavaScript"}
                    <ChevronsUpDown className="ms-2 shrink-0 opacity-50 h-min" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search text type..." />
                    <CommandEmpty>No language found!</CommandEmpty>
                    <CommandGroup className="">
                        {languages.map((lang) => (
                            <CommandItem
                                key={lang.value}
                                value={lang.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue);
                                    setOpen(false);
                                    onCodeLangUpdate({ ...codeBlock, value: { ...codeBlock.value, lang: currentValue } });
                                }}
                            >
                                <Check
                                    className={clsx(`
                                        "mr-2 h-4 w-4",
                                        ${value === lang.value ? "opacity-100" : "opacity-0"}
                                    `)}
                                />
                                {lang.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}