import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TextBlockIcon, QuizBlockIcon, ImageBlockIcon, CodeBlockIcon } from "@/components/icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePaths, usePathsDispatch } from './PathsContext';
import { useActivePathID } from './ActivePathContext';
import { LessonBlock, LessonElements } from '../lib/types';
import { Check, ChevronsUpDown, PlusIcon } from 'lucide-react';
import { DeleteButton } from './tootip-buttons';
import clsx from 'clsx';


interface Elements {
    value: LessonElements,
    label: string
}
const elements: Elements[] = [
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
function getLegalElements(parentType: LessonElements) {
    switch (parentType) {
        case 'quiz':
        case 'note': {
            return elements.filter((element) => {
                switch (element.value) {
                    case 'text':
                    case 'code':
                    case 'image': return element;
                    default: return;
                }
            });
        }
        default: return elements;
    }
}

const BlockIcon = ({ element }: { element: LessonElements }) => {
    switch (element) {
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

export function AddBlock({ topBlock }: { topBlock: LessonBlock }) {
    const [open, setOpen] = useState(false);
    const paths = usePaths();
    const dispatch = usePathsDispatch();
    const activePathID = useActivePathID();
    let legalElements = elements;
    if (topBlock.parentID) {
        const parentElementType = paths[activePathID].lesson[topBlock.parentID].elementType;
        legalElements = getLegalElements(parentElementType);
    }
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-xs h-min"
                >
                    <PlusIcon />  <span className="ms-2">Add here..</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 max-w-60">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>Not found</CommandEmpty>
                    <CommandGroup>
                        {legalElements.map((type) => (
                            <CommandItem
                                key={type.value}
                                value={type.value}
                                onSelect={() => {
                                    setOpen(false);
                                    dispatch({
                                        "type": 'added_lesson_block',
                                        "activePathID": activePathID,
                                        "elementType": type.value,
                                        "topBlockID": topBlock.id,
                                    });
                                }}
                            >
                                <BlockIcon element={type.value} />
                                <span className="ps-4 md:ps-6"> {type.label} </span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}


export function DeleteBlock({ blockID }: { blockID: LessonBlock['id'] }) {
    const activePathID = useActivePathID();
    const dispatch = usePathsDispatch();
    return (
        <div className='relative group/toolbar my-3'>
            <DeleteButton
                className='absolute bottom-0 right-0 opacity-0 transition-opacity duration-300 group-hover/content:opacity-100'
                onClick={() => {
                    dispatch({
                        "type": "deleted_lesson_block",
                        "activePathID": activePathID,
                        "blockID": blockID,
                    });
                }}
            />
        </div>
    );
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

export function CodeLangSelector({ blockData }: { blockData: LessonBlock }) {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("");
    const activePathID = useActivePathID();
    const dispatch = usePathsDispatch();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-xs h-min"
                >
                    {lang
                        ? languages.find((textType) => textType.value === lang)?.label
                        : "JavaScript"}
                    <ChevronsUpDown className="ms-2 shrink-0 opacity-50 h-min" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search text type..." />
                    <CommandEmpty>No language found!</CommandEmpty>
                    <CommandGroup className="">
                        {languages.map((language) => (
                            <CommandItem
                                key={language.value}
                                value={language.value}
                                onSelect={(currentLang) => {
                                    setLang(currentLang === lang ? "" : currentLang);
                                    setOpen(false);
                                    dispatch({
                                        "type": "changed_lesson_block",
                                        "activePathID": activePathID,
                                        "block": {
                                            ...blockData,
                                            value: {
                                                ...blockData.value,
                                                lang: currentLang,
                                            }
                                        }
                                    })
                                }}
                            >
                                <Check
                                    className={clsx(`
                                        "mr-2 h-4 w-4",
                                        ${lang === language.value ? "opacity-100" : "opacity-0"}
                                    `)}
                                />
                                {language.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}