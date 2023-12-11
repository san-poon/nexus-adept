// CreatePage.js

import { Button } from '@/app/components/Button';
import React from 'react';

const CreatePage = () => {
    return (
        <div className="flex h-screen">
            {/* Right Side - Content Buttons */}
            <div className="flex-shrink-0 w-1/3 p-4 bg-neutral-100 dark:bg-neutral-800 rounded shadow">
                {/* Lesson Title Input */}
                <input
                    type="text"
                    placeholder="Lesson Title"
                    className="w-full p-2 mb-4 border-b-2 border-blue-500 outline-none rounded"
                />

                {/* Content Buttons */}
                <div className="flex flex-col space-y-4">
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

                    {/* Images Button */}
                    <Button className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 me-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Image
                    </Button>

                    {/* Quizzes Button */}
                    <Button className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 me-1"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <line x1="12" y1="4" x2="12" y2="8" />
                            <line x1="6" y1="14" x2="8" y2="16" />
                            <line x1="8" y1="16" x2="18" y2="6" />
                        </svg>
                        Quiz
                    </Button>

                    {/* Code Sandbox Button */}
                    <Button className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 me-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>

                        Code
                    </Button>
                </div>
            </div>

            {/* Left Side - Live Preview */}
            <div className="flex-shrink-0 w-2/3 px-4 overflow-y-auto">
                {/* Live Preview Goes Here */}
                <div className="bg-white dark:bg-gray-700 p-4 rounded shadow h-full">
                    {/* Live Preview Content */}
                    <p className="text-lg font-bold mb-2">Live Preview</p>
                    {/* Add your live preview content here */}
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
