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
                name="question"
                className="w-full h-24 md:h-32 py-2 px-3 rounded-lg shadow-md focus:outline-none dark:bg-neutral-800"
                placeholder="Question..."
                value={questionText}
                onChange={handleQuestionChange}
            />
        </div>
    );


}