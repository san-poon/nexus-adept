'use client';
import React, { useState } from 'react';
import Quiz from './quiz';
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

    return (
        <section>
            {currentQuizIndex < mcqs.length ? (
                <>
                    <p>{currentQuizIndex + 1} of {mcqs.length}</p>
                    <Quiz quiz={mcqs[currentQuizIndex]} />
                    <Button onClick={goToNextQuestion} disabled={!hasMoreQuestions}>
                        Next
                    </Button>
                </>
            ) : (
                <p>You have finished the quiz.</p>
            )}
        </section>
    );
};

