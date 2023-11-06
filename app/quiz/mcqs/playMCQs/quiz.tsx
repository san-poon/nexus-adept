'use client';

import { useState, useCallback, useEffect } from 'react';
import Code from './code';

type QuizProps = {
    quiz: {
        id: number,
        question: string,
        code: string,
        options: optionType[];
    }
}

interface optionType {
    correct: boolean;
    value: string;
    option: string;
}

export default function Quiz({ quiz }: QuizProps) {
    const [message, setMessage] = useState<string>("");
    const [shuffledOptions, setShuffledOptions] = useState<optionType[]>([]);

    useEffect(() => {
        setShuffledOptions(shuffleArray(quiz.options));
    }, [quiz.options])

    useEffect(() => {
        setMessage("")
    }, [quiz.question]);



    // Handler for when a choice is selected
    const handleChoiceSelection = useCallback((option: optionType) => {
        setMessage(option.correct === true ? "Correct" : 'Try again!');
    }, []);
    return (
        <div className='shadow-md rounded-lg p-4'>
            <p className='text-gray-200 font-medium mb-4'>{quiz.question}</p>
            <Code code={quiz.code} />
            <ul>
                {shuffledOptions.map((choice: optionType) => (
                    <li key={choice.option} className="my-2">
                        <button onClick={() => handleChoiceSelection(choice)} className="w-full text-left transition duration-150 ease-in-out transform hover:scale-105 active:scale-95 bg-neutral-800 hover:bg-neutral-600 text-white rounded-md py-2 px-4">
                            {choice.value}
                        </button>
                    </li>
                ))}
            </ul>
            {message && <p className='text-gray-400 mt-4'>{message}</p>}
        </div>
    );
}

// Returns a new shuffled array without mutating the original array
const shuffleArray = (array: optionType[]): optionType[] => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};