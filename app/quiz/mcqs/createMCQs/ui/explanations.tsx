'use client';

import { useState } from "react";

export default function ExplanationInput() {
    const [explanationText, setExplanationText] = useState('');

    const handleTextChange = (e: any) => {
        setExplanationText(e.target.value);
    }

    return (
        <div className="mb-4">
            <textarea
                className="w-full min-h-fit dark:bg-inherit shadow-md shadow-neutral-900 focus:outline-none rounded-lg"
                placeholder="Explain..."
                value={explanationText}
                onChange={handleTextChange}
            />
        </div>
    );
};