// CreatePage.js

import { Button } from '@/app/components/Button';
import React from 'react';

const CreatePage = () => {
    return (
        <>
            <div className="md:w-2/3 mx-auto p-4">
                {/* Title Input */}
                <TitleInput />
            </div>
            <div className="flex h-screen">

                {/* Left Side - Live Preview */}
                <div className="flex-shrink-0 w-2/3 px-4 overflow-y-auto">
                    {/* Live Preview Goes Here */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow h-full">
                        {/* Live Preview Content */}
                        <p className="text-lg font-bold mb-2">Live Preview</p>
                        {/* Add your live preview content here */}
                    </div>
                </div>
                {/* Right Side - Content Buttons */}
                <div className="flex-shrink-0 w-1/3 p-4 bg-neutral-100 dark:bg-neutral-800 rounded shadow">
                    {/* Content Buttons */}
                    <div className="flex flex-col space-y-4">
                        <TextModalButton />
                        <ImageModalButton />
                        <QuizModalButton />
                        <CodeSandboxModalButton />
                    </div>
                </div>
            </div>
        </>
    );
};




const TitleInput = () => {
    return (
        <>
            {/* Lesson Title input */}
            <input
                type="text"
                placeholder="Lesson Title"
                className="w-full p-2 mb-4 border-b-2 border-blue-500 outline-none rounded shadow"
            />
        </>
    );
}


const TextModalButton = () => {
    return (
        <>
            {/* Text Button */}
            <Button className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 mr-2"
                >
                    {/* Add your text icon SVG or replace with an icon from a library */}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                Text
            </Button>
        </>
    )
}

const ImageModalButton = () => {
    return (
        <>
            {/* Images Button */}
            <Button className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 me-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Image
            </Button>
        </>
    )
}

const QuizModalButton = () => {
    return (
        <>
            {/* Quizzes Button */}
            <Button className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="currentColor" d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                </svg>

                Quiz
            </Button>
        </>
    )
}


const CodeSandboxModalButton = () => {
    return (
        <>
            {/* Code Sandbox Button */}
            <Button className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 me-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>

                Code
            </Button>
        </>
    )
}

export default CreatePage;
