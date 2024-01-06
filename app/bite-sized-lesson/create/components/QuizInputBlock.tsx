'use client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DynamicTextarea } from "./content-blocks";
import { OptionsProps, AnOptionProps, QuizProps } from '../types';

// When Quiz Input Button is clicked, it will create
// a quiz data structure, and QuizInputBlock will render the
// data with initial quiz contents.
const initialQuizContent = {
    id: uuidv4(),
    question: 'What is something divided by zero?',
    options: [
        { id: uuidv4(), value: 'Infinity', isCorrect: false },
        { id: uuidv4(), value: 'Zero', isCorrect: false },
        { id: uuidv4(), value: 'undefined', isCorrect: true },
        { id: uuidv4(), value: 'Error', isCorrect: false },
    ],
    explanation: `
    In mathematics, dividing anything by zero is simply undefined. 
    Imagine trying to distribute something among no one. 
    How much does each person get? It doesn't make sense, right? 
    Similarly, any number divided by zero doesn't have a meaningful answer. 
    Assigning any specific value, like infinity or even zero itself, would lead to contradictions with other basic math rules.
    So, we leave it as undefined to avoid these inconsistencies.
    `
};

export default function QuizInputBlock({ quiz, onQuestionChange, onExplanationChange, onOptionsChange, onCheckedChange }: any) {
    return (
        <div>
            <div>
                <label>Question</label>
                <DynamicTextarea
                    autoFocus={true}
                    rows={1}
                    className="px-2 py-2 my-2"
                    placeholder="Question..."
                    value={quiz.value.question}
                    onChange={(e) => onQuestionChange(quiz.id, e.target.value)}
                />
            </div>
            <div>
                <label>Options</label>
                {quiz.value.options.map((option: AnOptionProps, index: number) => (
                    <div key={option.id} className='flex items-center space-x-2 m-2'>
                        <input
                            className='h-4 w-4'
                            type="checkbox"
                            checked={option.isCorrect}
                            onChange={(e) => onCheckedChange(quiz.id, option.id, e.target.checked)}
                        />
                        <DynamicTextarea
                            rows={1}
                            className='px-2 py-2 my-2'
                            placeholder={`Option: ${index + 1}`}
                            value={option.value}
                            onChange={(e) => onOptionsChange(quiz.id, option.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <DynamicTextarea
                    rows={2}
                    placeholder='Explanation... Make it clear and concise.'
                    value={quiz.value.explanation}
                    onChange={(e) => onExplanationChange(quiz.id, e.target.value)}
                />
            </div>
        </div>
    )
}