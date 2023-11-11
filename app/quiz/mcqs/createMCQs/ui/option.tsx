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
        <div className="flex items-center bg-gray-800 text-white p-4 rounded-md shadow-md md:w-1/2 lg:w-1/3 xl:w-1/4">
            <input
                className="form-checkbox h-6 w-6 text-indigo-600"
                type="checkbox"
                checked={isCorrect}
                onChange={handleCorrectnessChange}
            />
            <input type="text"
                className="bg-transparent text-white w-full ml-2 p-2 placeolder-gray-500 focus:outline-none"
                placeholder={`Option ${optionNumber}`}
                value={optionText}
                onChange={handleTextChange}
            />
        </div>
    );
}
