import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { DeleteIcon, PencilSquareIcon } from '@/components/icons';

export const DeleteButton = ({ onClick, className }: { onClick: () => void, className: string }) => {
    return (
        <Button
            onClick={onClick}
            className={cn("rounded-full", className)}
            size="icon"
        >
            <DeleteIcon />
        </Button>
    );
}

export function AddButton({ onClick, className, children }: { onClick: () => void, className?: string, children: React.ReactNode }) {
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
                        <PlusIcon className='h-3 w-3' />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={2}>
                    {children}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export function EditContentButton({ onClick, className, children }: { onClick: () => void, className?: string, children: React.ReactNode }) {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        onClick={onClick}
                        className={cn(
                            "transition duration-500 ease-in-out transform active:scale-75",
                            className
                        )}
                    >
                        <PencilSquareIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={2}>
                    {children}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}