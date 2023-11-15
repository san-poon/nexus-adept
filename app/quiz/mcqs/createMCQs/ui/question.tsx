'use client';

import { useState } from "react";

export default function QuestionInput() {
    const [questionText, setQuestionText] = useState('');

    const handleQuestionChange = (event: any) => {
        setQuestionText(event.target.value);
    }

    return (
        <div className="mb-4">
            <textarea
                className="w-full min-h-fit py-2 px-3 rounded-lg shadow-neutral-900 shadow-md focus:outline-none dark:bg-inherit"
                placeholder="Question..."
                value={questionText}
                onChange={handleQuestionChange}
            />
        </div>
    );


}