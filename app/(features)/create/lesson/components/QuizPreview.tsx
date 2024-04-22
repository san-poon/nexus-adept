import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

import { QuizProps, AnOptionProps } from "../lib/types";
import { QuizBlockIcon } from '@/components/icons';

type Status = 'idle' | 'in-progress' | 'submitted' | 'reviewing'

export default function QuizPreview({ quiz }: { quiz: QuizProps }) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [playerStatus, setPlayerStatus] = useState<Status>('idle'); // 'idle' | 'in-progress' | 'submitted' | 'reviewing'


    const handleOptionClick = (optionId: string) => {
        setPlayerStatus('in-progress');
        const updatedOptions = selectedOptions?.includes(optionId)
            ? selectedOptions.filter((id) => id !== optionId)
            : [...selectedOptions, optionId];
        setSelectedOptions(updatedOptions);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setPlayerStatus('submitted');
    }

    // Check correctness based on 'isCorrect' flag
    const isPlayerCorrect = selectedOptions.every(
        (optionId) => quiz.options.find((option) => option.id === optionId)?.isCorrect
    );

    const isPlayerInProgress = playerStatus === 'in-progress';
    const isSubmitted = playerStatus === 'submitted';

    return (
        <div className="mt-4 flex justify-center">
            <Card className=" w-full md:w-11/12 bg-teal-50 dark:bg-teal-800/50 rounded-3xl shadow-2xl dark:shadow-neutral-800">
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-center">
                            <span className='pe-2'>Reflect With</span>
                            <QuizBlockIcon />
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                    <div className='flex flex-col items-center'>
                        <div className="text-xl">
                            {quiz.question}
                        </div>
                        <ul className='mt-4'>
                            {quiz.options.map((option: AnOptionProps) => (
                                <div
                                    key={option.id}
                                    className={cn(
                                        "p-2 md:p-4 m-2 md:m-4 bg-emerald-100 dark:bg-neutral-800 rounded-xl md:w-80 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer",
                                        selectedOptions.includes(option.id) ? 'bg-emerald-300 dark:bg-emerald-800' : "",
                                    )}
                                    onClick={() => handleOptionClick(option.id)}
                                >
                                    {option.value}
                                </div>
                            ))}
                        </ul>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col'>
                    <div className="flex justify-between items-center w-full">
                        <div>
                            {isSubmitted && (
                                isPlayerCorrect
                                    ? <span>Correct!</span>
                                    : <span>Try Again!</span>
                            )}
                        </div>
                        <div>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className='w-full'>
                        <AccordionItem value="explanation">
                            <AccordionTrigger>
                                Explanation
                            </AccordionTrigger>
                            <AccordionContent>
                                {quiz.explanation}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardFooter>
            </Card>
        </div>
    )
}