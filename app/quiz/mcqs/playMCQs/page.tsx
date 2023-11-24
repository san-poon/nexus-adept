'use client';
import { useState } from 'react';
import mcqs from '@/app/lib/data.json';
import Quiz from './components/quiz';
import { Button } from '@/app/components/Button';

export default function PlayMCQs() {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const hasMoreQuestions = currentQuizIndex < mcqs.length - 1;

    const goToNextQuestion = () => {
        if (hasMoreQuestions) {
            setCurrentQuizIndex(currentQuizIndex + 1);
        }
    }

    return (
        <div className='flex justify-center items-center pt-4'>
            <div className="bg-neutral-900 mx-2 my-8 p-6 shadow-lg rounded-lg overflow-auto w-full sm:w-9/12 md:w-9/12">
                <h3 className="text-center my-2">JavaScript Quizzes</h3>
                {currentQuizIndex < mcqs.length ? (
                    <section>
                        <Quiz quiz={mcqs[currentQuizIndex]} />

                    </section>
                ) : (
                    <p>You have finished the quiz.</p>
                )}
            </div>
            <Button onClick={goToNextQuestion} disabled={!hasMoreQuestions}>
                Next
            </Button>

        </div>
    );

}

