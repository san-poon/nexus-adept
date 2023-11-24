'use client';
import React, { useState } from 'react';
import Quiz from './quiz';
import { Button } from '@/app/components/Button';

const PlayMcq = ({ mcqs }) => {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
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

export default PlayMcq;
