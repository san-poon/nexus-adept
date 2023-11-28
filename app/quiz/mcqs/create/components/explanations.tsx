'use client';

import { useState } from "react";

export default function ExplanationInput() {
    const [explanationText, setExplanationText] = useState('');

    const handleTextChange = (e: any) => {
        setExplanationText(e.target.value);
    }

    return (
        <textarea
            name="explanation"
            className={`w-full h-32 md:h-60 shadow-md focus:outline-none rounded-lg dark:bg-neutral-800 p-4`}
            placeholder="Explain..."
            value={explanationText}
            onChange={handleTextChange}
        />
    );
};