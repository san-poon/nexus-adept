'use client';
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

const initialQuizContent = {
    id: uuidv4(),
    question: 'What is something divided by zero?',
    options: [
        { value: 'Infinity', isCorrect: false },
        { value: 'Zero', isCorrect: false },
        { value: 'undefined', isCorrect: true },
        { value: 'Error', isCorrect: false },
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
    const form = useForm<z.infer<typeof quizSchema>>({
        resolver: zodResolver(quizSchema),
    });

    const onSubmit = (data: z.infer<typeof quizSchema>) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Question</FormLabel>
                            <FormControl>
                                <DynamicTextarea placeholder={initialQuizContent.question} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div>
                    {initialQuizContent['options'].map((option, index) => (
                        <FormField
                            key={index}
                            control={form.control}
                            name="options"
                            render={({ field }) => (
                                <FormItem key={index}>
                                    <FormLabel>{index + 1}</FormLabel>
                                    <FormControl>
                                        <Checkbox
                                        // checked={field.value?.includes(option)}
                                        // onCheckedChange={(checked) => {
                                        //     return checked
                                        //         ? field.onChange([...field.value, option])
                                        //         : field.onChange(field.value?.filter(
                                        //             (value) => value !== option
                                        //         ))
                                        // }}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <DynamicTextarea placeholder={`Option ${index + 1}`} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                <FormField
                    control={form.control}
                    name="explanation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Explanation</FormLabel>
                            <FormControl>
                                <DynamicTextarea placeholder="Explanation here..." />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
