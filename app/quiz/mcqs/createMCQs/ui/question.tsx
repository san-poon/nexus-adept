'use client';

import { useState } from "react";

export default function QuestionInput() {
    const [questionText, setQuestionText] = useState('');

    const handleQuestionChange = (event: any) => {
        setQuestionText(event.target.value);
    }

    return (
        <div className="mb-4">
            <label className="text-white font-semibold mb-2 block">Question</label>
            <input
                type="text"
                className="bg-inherit text-inherit"
                placeholder="Question..."
                value={questionText}
                onChange={handleQuestionChange}
            />
        </div>
    );


}