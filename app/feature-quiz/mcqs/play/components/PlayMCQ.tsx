'use client';
import React, { useState } from 'react';
import Quiz from './Quiz';
import { Button } from '@/components/ui/button';
import { QuizData } from '@/app/lib/definitions';

export default function PlayMcq({ mcqs }: { mcqs?: QuizData }) {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

    // mcqs may be undefined
    if (!mcqs) { return <div>Loading...</div> }

    const hasMoreQuestions = currentQuizIndex < mcqs.length - 1;

    const goToNextQuestion = () => {
        if (hasMoreQuestions) {
            setCurrentQuizIndex(currentQuizIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuizIndex > 0) {
            setCurrentQuizIndex(currentQuizIndex - 1);
        }
    }

    return (
        <section>
            {currentQuizIndex < mcqs.length ? (
                <>
                    <p className='text-xs mt-8 me-8 text-end'>{currentQuizIndex + 1} of {mcqs.length}</p>
                    <h3 className=" text-center mb-2 text-2xl">JavaScript Quizzes</h3>
                    <Quiz quiz={mcqs[currentQuizIndex]} key={currentQuizIndex} />
                    <div className='flex justify-between'>
                        <Button
                            onClick={goToPreviousQuestion}
                            disabled={currentQuizIndex === 0}
                            className='my-2 mx-4'
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={goToNextQuestion}
                            disabled={!hasMoreQuestions}
                            className='my-2 mx-4'
                        >
                            Next
                        </Button>
                    </div>
                </>
            ) : (
                <p>You have finished the quiz.</p>
            )}
        </section>
    );
};

