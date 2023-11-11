'use client';

import { useState } from "react";

export default function ExplanationInput() {
    const [explanationText, setExplanationText] = useState('');

    const handleTextChange = (e: any) => {
        setExplanationText(e.target.value);
    }

    return (
        <div className="mb-4">
            <label className="text-white font-semibold mb-2 block">Explanation</label>
            <textarea className="bg-inherit text-inherit"
                placeholder="Explain..."
                value={explanationText}
                onChange={handleTextChange}
            />
        </div>
    );
};