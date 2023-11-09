const { sql } = require('@vercel/postgres');
const { mcqs } = require('../app/quiz/mcqs/playMCQs/data.json')

async function seedMCQs() {
    try {
        // Create the "mcqs" table if it doesn't exits
        const createTable = await sql`
        CREATE TABLE IF NOT EXISTS mcqs (
            id SERIAL PRIMARY KEY,
            question TEXT NOT NULL,
            code TEXT NOT NULL
        );
        `;
        console.log('Created "mcqs" table');

        // Create the 'mcq_options' table if it doesn't exist
        const createOptionsTable = await sql`
        CREATE TABLE IF NOT EXISTS mcq_options (
            id SERIAL PRIMARY KEY
            mcq_id INT NOT NULL REFERENCES mcqs(id),
            option_text TEXT NOT NULL,
            value TEXT NOT NULL,
            correct BOOLEAN NOT NULL
        );
        `;
        console.log(`Created "mcq_options" table`);

        // Create the "mcq_explanations" table if it doesn't exist
        const createExplanationsTable = await sql`
          CREATE TABLE IF NOT EXISTS mcq_explanations (
            id SERIAL PRIMARY KEY,
            mcq_id INT NOT NULL REFERENCES mcqs(id),
            explanation TEXT NOT NULL
          );
        `;

        console.log(`Created "mcq_explanations" table`);

        // Insert MCQ data into table
        for (const mcq of mcqs) {
            const insertQuestionQuery = `INSERT INTO mcqs (question, code) VALUES ($1, $2)`
            await client.sql(insertQuestionQuery, [mcq.question, mcq.code]);
            const mcqId = await client.query(`SELECT id FROM mcqs ORDER BY id DESC LIMIT 1`);

            for (const option of mcq.options) {
                const insertOptionQuery = `INSERT INTO mcq_options (mcq_id, option_text, value, correct) VALUES ($1, $2, $3, $4)`;
                await client.sql(insertOptionQuery, [mcqId.rows[0].id, option.option, option.value, option.correct]);
            }

            const insertExplanationQuery = `INSERT INTO mcq_explanations (mcq_id, explanation) VALUES ($1, $2)`;
            await client.sql(insertExplanationQuery, [mcqId.rows[0].id, mcq.explanation]);
        }
        console.log(`Seeded ${mcqs.length} MCQs`);

    }
    catch (error) {
        console.error(`Error seeding MCQs: `, error);
        throw error;
    }
}

seedMCQs();