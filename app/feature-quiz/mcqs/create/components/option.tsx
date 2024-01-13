'use client';

import { useState, ChangeEvent } from 'react';

interface OptionInputProps {
    optionNumber: number;
}

export default function OptionInput({ optionNumber }: OptionInputProps): JSX.Element {
    const [optionText, setOptionText] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setOptionText(e.target.value);
    };

    const handleCorrectnessChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setIsCorrect(e.target.checked);
    };

    return (
        <div className="mb-4 flex items-center p-4 rounded-md shadow-md">
            <input
                className="form-checkbox h-6 w-6"
                type="checkbox"
                checked={isCorrect}
                onChange={handleCorrectnessChange}
            />
            <input type="text"
                name="options"
                className="w-full ml-2 p-2 placeolder-gray-500 focus:outline-none dark:bg-neutral-800"
                placeholder={`Option ${optionNumber}...`}
                value={optionText}
                onChange={handleTextChange}
            />
        </div>
    );
}
