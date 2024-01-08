import { Button } from "@/app/components/Button"
import { CodeBlockIcon, ImageBlockIcon, QuizBlockIcon, TextBlockIcon } from "./icons"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

export const TextBlockButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button onClick={onClick}>
                        <TextBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add Text</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


export const ImageBlockButton = ({ ...props }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button {...props}>
                        <ImageBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add Image</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export const QuizBlockButton = ({ ...props }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button {...props}>
                        <QuizBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add Quiz</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


export const CodeBlockButton = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button>
                        <CodeBlockIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add Code</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export const DeleteButton = ({ onClick, className }: { onClick: () => void, className: string }) => {
    return (
        <Button onClick={onClick} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
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
// export const ImageBlockButton = ({ ...props }) => {
//     return (
//         <>
//             <Button className=" relative group/imageTool" {...props}>
//                 <ImageBlockIcon />
//                 {/* show button name, except on small screens */}
//                 <span className='hidden md:inline-block opacity-0 text-xs p-1 absolute -right-24 transition duration-300 ease-in-out group-hover/imageTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Image</span>
//             </Button>
//         </>
//     )
// }