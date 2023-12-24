import { Button } from "@/app/components/Button"

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
                <span className='opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/textTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Text Field</span>
            </Button>
        </>
    )
}

export const ImageBlockButton = ({ ...rest }) => {
    return (
        <>
            {/* Images Button */}
            <Button className=" relative group/imageTool" {...rest}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {/* show button name, except on small screens */}
                <span className='opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/imageTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Image</span>
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
                <span className=' opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/quizTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Quiz</span>
            </Button>
        </>
    )
}


export const CodeBlockButton = () => {
    return (
        <>
            {/* Code Sandbox Button */}
            <Button className="relative group/codeTool">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                {/* show button name, except on small screens */}
                <span className='opacity-0 text-xs p-1 absolute -right-20 transition duration-300 ease-in-out group-hover/codeTool:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>Add Code</span>
            </Button>
        </>
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