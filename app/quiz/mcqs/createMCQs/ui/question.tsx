'use client';

import { useState } from "react";

export default function QuestionInput() {
    const [questionText, setQuestionText] = useState('');

    const handleQuestionChange = (event: any) => {
        setQuestionText(event.target.value);
    }

    return (
        <div className="mb-4">
            <input
                type="text"
                className="w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 dark:text-slate-200 dark:bg-slate-900"
                placeholder="Question..."
                value={questionText}
                onChange={handleQuestionChange}
            />
        </div>
    );


}