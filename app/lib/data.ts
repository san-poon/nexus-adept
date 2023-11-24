import { sql } from "@vercel/postgres";

export async function fetchMcqs() {
    try {
        const data = await sql`
            SELECT
                q.id,
                q.question,
                q.code,
                o.option_letter,
                o.value,
                o.is_correct,
                q.explanation
            FROM
                mcq_questions AS q
                JOIN mcq_options AS o ON q.quiz_id = o.quiz_id
                OFFSET (SELECT COUNT(*) FROM mcq_questions) % 10
                LIMIT 30
        `;

        const quizzes = data.rows.reduce((accumulator, current) => {
            const existingQuestion = accumulator.find((item: any) => item.id === current.id);
            if (existingQuestion) {
                existingQuestion.options.push({
                    option: current.option_letter,
                    value: current.value,
                    correct: current.is_correct,
                });
            } else {
                accumulator.push({
                    id: current.id,
                    question: current.question,
                    code: current.code,
                    options: [
                        {
                            option: current.option_letter,
                            value: current.value,
                            correct: current.is_correct,
                        },
                    ],
                    explanation: current.explanation,
                });
            }
            return accumulator;
        }, []);

        return quizzes;
    } catch (error) {
        console.error('Database Error: ', error);
    }
}
