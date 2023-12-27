import { Button } from "@/app/components/Button"
import clsx from 'clsx';
import { PhotoIcon, CodeBracketIcon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';

export const TextBlockButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <>
            {/* Text Button */}
            <Button className=" relative group/textTool" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    {/* Add your text icon SVG or replace with an icon from a library */}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                {/* show button name, except on small screens */}
                <span className='hidden md:inline-block opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/textTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>
                    Add Text
                </span>
            </Button>
        </>
    )
}

export const ImageBlockButton = ({ ...rest }) => {
    return (
        <>
            {/* Images Button */}
            <Button className=" relative group/imageTool" {...rest}>
                <PhotoIcon />
                {/* show button name, except on small screens */}
                <span className='hidden md:inline-block opacity-0 text-xs p-1 absolute -right-24 transition duration-300 ease-in-out group-hover/imageTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Image</span>
            </Button>
        </>
    )
}

export const QuizBlockButton = () => {
    return (
        <>
            {/* Quizzes Button */}
            <Button className="relative group/quizTool">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='w-6 h-6'>
                    <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="currentColor" d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                </svg>
                {/* show button name, except on small screens */}
                <span className='hidden md:inline-block opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/quizTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Quiz</span>
            </Button>
        </>
    )
}


export const CodeBlockButton = () => {
    return (
        <>
            {/* Code Sandbox Button */}
            <Button className="relative group/codeTool">
                <CodeBracketIcon />
                <span className='hidden md:inline-block opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/codeTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Code</span>
            </Button>
        </>
    )
}

export const DeleteButton = ({ onClick, className }: { onClick: () => void, className: string }) => {
    return (
        <Button onClick={onClick} className={className}>
            <XMarkIcon className="h-4 w-4" />
        </Button>
    )
}

export const CreateButton = ({ onClick, ...rest }: { onClick: () => void }) => {
    return (
        <Button {...rest} onClick={onClick}>
            <PlusIcon className="w-3 h-3" /> <span className="ms-2 text-xs">Add here..</span>
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