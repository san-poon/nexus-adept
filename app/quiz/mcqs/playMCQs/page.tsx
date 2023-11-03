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
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-neutral-900 max-w-4xl mx-2 my-8 p-6 shadow-lg rounded-lg overflow-hidden">
                <h3 className="text-center my-2">JavaScript Quizzes</h3>
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
        </div>
    );

}

