const { sql } = require('@vercel/postgres');
const mcqs = require("../app/quiz/mcqs/playMCQs/data.json");

async function seedMcqs() {
    try {
        // Create the 'mcq_questions' table if it doesn't exist
        const createQuestionTable = await sql`
            CREATE TABLE IF NOT EXISTS mcq_questions (
                id SERIAL PRIMARY KEY,
                question TEXT NOT NULL,
                code TEXT
                explanation TEXT NOT NULL
            );
        `;
        console.log(`Created 'mcq_questions' table`);

        // Insert data into the 'mcq_questions' table
        const insertedQuestions = await Promise.all(
            mcqs.map(async (mcq) => {
                return sql`
                    INSERT INTO mcq_questions (question, code, explanation)
                    VALUES (${mcq.question}, ${mcq.code}, ${mcq.explanation})
                    RETURNING id;
                `;
            }),
        );
        console.log(`Seeded ${insertedQuestions.length} questions`);

        //Create the 'mcq_options' table if it doesn't exist
        const createOptionsTable = await sql`
            CREATE TABLE IF NOT EXISTS mcq_options (
                id SERIAL PRIMARY KEY,
                question_id INT REFERENCES mcq_questions(id),
                option_letter CHAR(1) NOT NULL,
                value TEXT NOT NULL,
                is_correct BOOLEAN NOT NULL
            );
        `;
        console.log(`Created 'mcq_options' table`);

        // Insert data into the 'mcq_options' table
        const insertedOptions = await Promise.all(
            mcqs.map(async (mcq) => {
                return Promise.all(
                    mcq.options.map(async (choice) => {
                        return sql`
                            INSERT INTO mcq_options(question_id, option_letter, is_correct)
                            VALUES (${mcq.id}, ${choice.option}, ${choice.value}, ${choice.correct})
                        `;
                    }),
                );
            }),
        );
        console.log(`Seeded ${insertedOptions.flat().length} MCQs options`);

        return {
            createQuestionTable,
            createOptionsTable,
            questions: insertedQuestions,
            options: insertedOptions.flat(),
        };

    }
    catch (error) {
        console.error(`Error seeding MCQ questions and options`, error);
    }
}

// Execute the function to seed data
seedMcqs();