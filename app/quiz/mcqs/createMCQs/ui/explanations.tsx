'use client';

import { useState } from "react";

export default function ExplanationInput() {
    const [explanationText, setExplanationText] = useState('');

    const handleTextChange = (e: any) => {
        setExplanationText(e.target.value);
    }

    return (
        <div className="mb-4">
            <textarea className="w-full h-auto"
                placeholder="Explain..."
                value={explanationText}
                onChange={handleTextChange}
            />
        </div>
    );
};