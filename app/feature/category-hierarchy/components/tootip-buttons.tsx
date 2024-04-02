import { Button } from '@/components/ui/button';
import { Trash2Icon, PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

export function DeleteTooltipButton({ onClick, className }: { onClick: () => void, className: string }) {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        onClick={onClick}
                        className={cn(
                            "transition duration-200 ease-in-out transform active:scale-75",
                            className
                        )}
                    >
                        <Trash2Icon size={16} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={2} className=" bg-red-200 dark:bg-red-500/40">
                    <p >Delete Hierarchy?</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export function AddTooltipButton({ onClick, className, children }: { onClick: () => void, className: string, children: React.ReactNode }) {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        onClick={onClick}
                        className={cn(
                            "transition duration-500 ease-in-out transform active:scale-75",
                            className
                        )}
                    >
                        <PlusIcon size={16} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={2}>
                    {children}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}