import { Editor } from "@tiptap/react";
import { Check, ChevronDown } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export interface BubbleColorMenuItem {
    name: string;
    color: string;
}

interface ColorSelectorProps {
    editor: Editor;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HIGHLIGHT_COLORS: BubbleColorMenuItem[] = [
    {
        name: "Default",
        color: "#fff",
    },
    {
        name: "Red",
        color: "#fdebeb",
    },
    {
        name: "Yellow",
        color: "#fbf4a2",
    },
    {
        name: "Gray",
        color: "#f1f1ef"
    }

]

export const ColorSelector: FC<ColorSelectorProps> = ({
    editor,
    isOpen,
    setIsOpen
}) => {
    const activeHighlightItem = HIGHLIGHT_COLORS.find(({ color }) =>
        editor.isActive("highlight", { color })
    );

    return (
        <Popover open={isOpen}>
            <PopoverTrigger asChild
                onClick={() => setIsOpen(!isOpen)}>
                <span className="rounded px-1" style={{
                    backgroundColor: activeHighlightItem?.color,
                }}
                >
                    A
                </span>
                <ChevronDown className="h-4 w-4" />
            </PopoverTrigger>

            <PopoverContent
                align="start"
                className="z-50 rounded-lg shadow-xl"
            >
                <div className=" text-sm ">
                    Highlight
                </div>
                {HIGHLIGHT_COLORS.map(({ name, color }, index) => (
                    <button key={index}
                        onClick={() => {
                            editor.commands.unsetHighlight();
                            name !== 'Default' && editor.commands.setHighlight({ color });
                            setIsOpen(false);
                        }}
                        className="items-center justify-between rounded-full px-2 py-1"
                        type="button"
                    >
                        <div className="flex items-center space-x-2">
                            <div
                                className="rounded-full border border-neutral-200 dark:border-neutral-800 px-1 py-px font-medium"
                                style={{ backgroundColor: color }}
                            >
                                A
                            </div>
                            <span>{name}</span>
                        </div>
                        {editor.isActive("hightlight", { color }) && (
                            <Check className="h-4 w-4" />
                        )}
                    </button>
                ))}
            </PopoverContent>
        </Popover>
    );

};