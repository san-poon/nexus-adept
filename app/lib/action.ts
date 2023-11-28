'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation';

// Define the schema for quiz creation form data
const quizSchema = z.object({
    question: z.string().min(1),
    options: z.array(z.object({
        option: z.string().min(1),
        isCorrect: z.boolean(),
    })).refine(data => data.length >= 2 && data.length <= 4),
    explanation: z.string().min(1),
});

// Server action to create a new quiz
export async function createQuiz(formData: FormData) {
    // Parse and validate the form data
    const data = quizSchema.parse({
        question: formData.get('question'),
        options: Array.from(formData.getAll('options')).map((optionText, index) => ({
            option: optionText,
            isCorrect: formData.get(`isCorrect${index}`) === 'true', // Check if the checkbox is checked
        })),
        explanation: formData.get('explanation'),
    });

    try {

        // Generate a UUID for the question
        const quizId = uuidv4();

        // Insert the question and explanation into mcq_questions table
        await sql`
                INSERT INTO user_quiz (id, question, explanation)
                VALUES (${quizId}, ${data.question}, ${data.explanation});
            `;

        // Insert options into mcq_options table with reference to the question UUID
        await Promise.all(data.options.map(async (option) => {
            await sql`
          INSERT INTO user_quizOptions (quiz_id, value, is_correct)
          VALUES (${quizId}, ${option.option}, ${option.isCorrect});
        `
        }));

        // Trigger revalidation of the relevant path
        revalidatePath('/app/quiz');

        return { message: `Quiz created successfully!` }

    } catch (e) {
        return { message: 'Faile to create quiz' }
    }
}
