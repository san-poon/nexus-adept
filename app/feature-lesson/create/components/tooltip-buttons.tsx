import { Button } from "@/components/ui/button";
import { CodeBlockIcon, ImageBlockIcon, QuizBlockIcon, TextBlockIcon } from "../icons"
import { DeleteIcon } from "@/app/icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

export const TextBlockButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={onClick} className="transition duration-200 ease-in-out transform active:scale-75">
                        <TextBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={2}>
                    <p>Add Text</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


export const ImageBlockButton = ({ ...props }) => {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button {...props} className="transition duration-200 ease-in-out transform active:scale-75">
                        <ImageBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={2}>
                    <p>Add Image</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export const QuizBlockButton = ({ ...props }) => {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button {...props} className="transition duration-200 ease-in-out transform active:scale-75">
                        <QuizBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={2}>
                    <p>Add Quiz</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


export const CodeBlockButton = ({ ...props }) => {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="transition duration-200 ease-in-out transform active:scale-75"
                        {...props}
                    >
                        <CodeBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={2}>
                    <p>Add Code</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export const DeleteButton = ({ onClick, className }: { onClick: () => void, className: string }) => {
    return (
        <Button onClick={onClick} className={className}>
            <DeleteIcon />
        </Button>
    )
}

export const CreateButton = ({ onClick, ...rest }: { onClick: () => void }) => {
    return (
        <Button {...rest} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>  <span className="ms-2">Add here..</span>
        </Button>
    )
}

export const ContentTypeButton = ({ className, children, ...rest }: { className: string, children: React.ReactNode }) => {
    return (
        <Button {...rest} className={className}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </Button>
    )
}
