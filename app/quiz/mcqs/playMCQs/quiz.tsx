'use client';

import { useState, useCallback, useEffect } from 'react';

type QuizProps = {
    quiz: {
        id: number;
        question: string;
        choices: string[]
    }
}

export default function Quiz({ quiz }: QuizProps) {
    const [message, setMessage] = useState<string>("");
    const [shuffledChoices, setShuffledChoices] = useState<string[]>([]);

    const correctAnswer = quiz.choices[0]; // Assuming the first choice is always correct

    useEffect(() => {
        setShuffledChoices(shuffleArray(quiz.choices));
    }, [quiz.choices])

    useEffect(() => {
        setMessage("")
    }, [quiz.question]);

    // Handler for when a choice is selected
    const handleChoiceSelection = useCallback((choice: string) => {
        setMessage(choice === correctAnswer ? "Correct" : 'Try again!');
    }, [correctAnswer]);
    return (
        <div className='shadow-md rounded-lg p-4'>
            <p className='text-gray-200 font-medium mb-4'>{quiz.question}</p>
            <ul>
                {shuffledChoices.map((choice) => (
                    <li key={choice} className="my-2">
                        <button onClick={() => handleChoiceSelection(choice)} className="w-full text-left transition duration-150 ease-in-out transform hover:scale-105 active:scale-95 bg-neutral-800 hover:bg-neutral-600 text-white rounded-md py-2 px-4">
                            {choice}
                        </button>
                    </li>
                ))}
            </ul>
            {message && <p className='text-gray-400 mt-4'>{message}</p>}
        </div>
    );
}

// Returns a new shuffled array without mutating the original array
const shuffleArray = (array: string[]) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};