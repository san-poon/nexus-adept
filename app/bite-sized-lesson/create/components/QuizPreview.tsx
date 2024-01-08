import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { QuizProps, AnOptionProps } from "../types";
import { QuizBlockIcon } from './icons';

export default function QuizPreview({ quiz }: { quiz: QuizProps }) {
    return (
        <div className="mt-4 flex justify-center">
            <Card className=" w-full md:w-11/12 bg-teal-50 dark:bg-inherit rounded-3xl shadow-2xl dark:shadow-neutral-800 border-2">
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
                                <div key={option.id} className='p-2 m-2 bg-emerald-100 dark:bg-neutral-800 rounded-xl w-80 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-emerald-200 dark:hover:bg-neutral-700 cursor-pointer'>
                                    {option.value}
                                </div>
                            ))}
                        </ul>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className='ml-auto'>
                        <Button>Submit</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}