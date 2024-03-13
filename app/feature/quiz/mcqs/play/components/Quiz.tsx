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
        options: OptionData[],
        explanation: string
    }
}

interface OptionData {
    correct: boolean;
    value: string;
    option: string;
}

export default function Quiz({ quiz }: any) {
    const [message, setMessage] = useState<string>("");

    // Handler for when a choice is selected
    const handleChoiceSelection = (option: OptionData) => {
        setMessage(option.correct ? "Correct" : 'Try Again!');
    };

    const codeIsAvailable = quiz.code && quiz.code !== "";

    return (
        <div className=' p-4'>
            <p className='mb-4'>{quiz.question}</p>
            {codeIsAvailable &&
                <div >
                    <Code code={quiz.code} />
                </div>
            }
            {
                quiz.options && (
                    <ul>
                        {quiz.options.map((option: OptionData, index: number) => (
                            <li key={index} className='flex justify-center'>
                                <div
                                    onClick={() => handleChoiceSelection(option)}
                                    className={cn(
                                        " p-2 md:p-4 m-2 md:m-4 bg-emerald-200 dark:bg-neutral-800 rounded-xl md:w-80 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer",
                                    )}
                                >
                                    {option.value}
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }
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