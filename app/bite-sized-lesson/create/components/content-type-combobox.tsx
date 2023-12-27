
import { Check, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

const textContentTypes = [
    {
        value: "paragraph",
        label: 'paragraph'
    },
    {
        value: 'heading2',
        label: 'Heading2',
    },
    {
        value: 'introduction',
        label: 'Introduction',
    },
    {
        value: 'objective',
        label: 'Objective',
    },
    {
        value: 'note',
        label: 'Note',
    },
    {
        value: 'pitfall',
        label: 'Pitfall',
    },
    {
        value: 'deep-dive',
        label: 'Deep Dive'
    }
]


export function TextCombobox() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

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
                        : "paragraph"}
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
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
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