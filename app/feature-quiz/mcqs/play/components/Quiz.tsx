'use client';

import { useState } from 'react';
import Code from './Code';
import { cn } from '@/lib/utils';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

type QuizProps = {
    quiz: {
        id: number,
        question: string,
        code: string,
        options: optionType[],
        explanation: string
    }
}

interface optionType {
    correct: boolean;
    value: string;
    option: string;
}

export default function Quiz({ quiz }: QuizProps) {
    const [message, setMessage] = useState<string>("");

    // Handler for when a choice is selected
    const handleChoiceSelection = (option: optionType) => {
        setMessage(option.correct ? "Correct" : 'Try Again!');
    };


    return (
        <div className=' p-4'>
            <p className='mb-4'>{quiz.question}</p>
            <div >
                <Code code={quiz.code} />
            </div>
            <ul>
                {quiz.options.map((choice: optionType, index) => (
                    <li key={index} className='flex justify-center'>
                        <div
                            onClick={() => handleChoiceSelection(choice)}
                            className={cn(
                                " p-2 md:p-4 m-2 md:m-4 bg-emerald-200 dark:bg-neutral-800 rounded-xl md:w-80 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer",
                            )}
                        >
                            {choice.value}
                        </div>
                    </li>
                ))}
            </ul>
            <p className={cn("mt-4", message ? "opacity-100" : " opacity-100")}>{message}</p>
            <Accordion type="single" collapsible className='w-full'>
                <AccordionItem value="explanation">
                    <AccordionTrigger>
                        Explanation
                    </AccordionTrigger>
                    <AccordionContent className='text-lg'>
                        {quiz.explanation}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

// Returns a new shuffled array without mutating the original array
