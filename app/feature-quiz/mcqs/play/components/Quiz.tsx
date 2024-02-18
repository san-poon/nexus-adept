'use client';

import { useState, useCallback, useEffect } from 'react';
import Code from './Code';
import { shuffleArray } from '@/lib/utils';

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
        setMessage(option.correct ? "Correct" : 'Try again!');
    }, []);
    return (
        <div className='shadow-md rounded-lg p-4'>
            <p className='text-gray-200 font-medium mb-4'>{quiz.question}</p>
            <div >
                <Code code={quiz.code} />
            </div>
            <ul>
                {shuffledOptions.map((choice: optionType, index) => (
                    <li key={index} className='flex justify-center'>
                        <div
                            onClick={() => handleChoiceSelection(choice)}
                            className=" p-2 md:p-4 m-2 md:m-4 bg-emerald-100 dark:bg-neutral-800 rounded-xl md:w-80 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            {choice.value}
                        </div>
                    </li>
                ))}
            </ul>
            {message && <p className='text-gray-400 mt-4'>{message}</p>}
        </div>
    );
}

// Returns a new shuffled array without mutating the original array
