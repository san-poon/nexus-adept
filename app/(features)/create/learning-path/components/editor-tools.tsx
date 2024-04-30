import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TextBlockIcon, QuizBlockIcon, ImageBlockIcon, CodeBlockIcon } from "@/components/icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePathsDispatch } from './PathsContext';
import { useActivePathID } from './ActivePathContext';
import { LessonBlock, LessonElements } from '../lib/types';
import { PlusIcon } from 'lucide-react';
import { DeleteButton } from './tootip-buttons';


interface ContentType {
    value: LessonElements,
    label: string
}
const contentTypes: ContentType[] = [
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
    const dispatch = usePathsDispatch();
    const activePathID = useActivePathID();
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
            <PopoverContent className="p-0 w-52">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>Not found</CommandEmpty>
                    <CommandGroup>
                        {contentTypes.map((type) => (
                            <CommandItem
                                key={type.value}
                                value={type.value}
                                onSelect={() => {
                                    setOpen(false);
                                    dispatch({
                                        "type": 'added_lesson_block',
                                        "activePathID": activePathID,
                                        "elementType": type.value,
                                        "topBlockID": topBlock["id"]
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


export function DeleteBlock({ blockID }: { blockID: LessonBlock["id"] }) {
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
                        "blockID": blockID
                    });
                }}
            />
        </div>
    );
}