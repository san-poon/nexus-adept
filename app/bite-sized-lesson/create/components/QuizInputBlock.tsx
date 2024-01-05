'use client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

import { DynamicTextarea } from "./content-blocks";
import { quizSchema } from '@/app/lib/schemas/quizSchema';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

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

export default function QuizInputBlock() {
    const [quiz, setQuiz] = useState(initialQuizContent)

    const handleCheckboxChange = (optionId: String, isChecked: boolean) => {
        const nextOptions = [...quiz.options].map((option) => {
            if (option.id === optionId) {
                return { ...option, isCorrect: isChecked }
            } else {
                return option
            }
        })
        setQuiz({ ...quiz, options: nextOptions })

    }
    return (
        <div>
            <div>
                <label>Question</label>
                <DynamicTextarea
                    rows={1}
                    className="px-2 py-2 my-2"
                    placeholder={quiz.question}
                />
            </div>
            <div>
                <label>Options</label>
                {quiz.options.map((option, index) => (
                    <div key={index} className='flex items-center space-x-2 m-2'>
                        <input
                            className='h-4 w-4'
                            type="checkbox"
                            checked={option.isCorrect}
                            onChange={(e) => handleCheckboxChange(option.id, e.target.checked)}
                        />
                        <DynamicTextarea
                            rows={1}
                            className='px-2 py-2 my-2'
                            placeholder={`Option: ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}