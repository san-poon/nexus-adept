'use client';
import { useState } from 'react';
import { mcqs } from './data';
import Quiz from './quiz';

export default function PlayMCQs() {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const hasMoreQuestions = currentQuizIndex < mcqs.length - 1;

    const goToNextQuestion = () => {
        if (hasMoreQuestions) {
            setCurrentQuizIndex(currentQuizIndex + 1);
        }
    }

    return (
        <div>
            {currentQuizIndex < mcqs.length ? (
                <section>
                    <Quiz quiz={mcqs[currentQuizIndex]} />
                    <br />
                    <button onClick={goToNextQuestion} disabled={!hasMoreQuestions} className='text-gray-200 bg-emerald-800 mx-6 px-4 py-1'>
                        Next
                    </button>
                </section>
            ) : (
                <p>You have finished the quiz.</p>
            )}
        </div>
    );

}

