import { z } from 'zod';

export const quizSchema = z.object({
    question: z.string().min(5, 'Question is required'),
    options: z.array(
        z.object({
            value: z.string().min(1, 'Option text is required'),
            isCorrect: z.boolean(),
        })
    ).min(3, 'At least 3 options are required'),
    explanation: z.string().min(10, 'Explanation is required'),
});