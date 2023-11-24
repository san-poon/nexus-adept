/**
 * While seeding, use seperate functions to seed each table. And use batch processing for there will be unstable database connection.
 */

const { sql } = require('@vercel/postgres');
const mcqs = require("../app/lib/data.json");

async function seedMcqQuestions() {
    try {
        // Create the 'mcq_questions' table if it doesn't exist
        const createQuestionTable = await sql`
            CREATE TABLE IF NOT EXISTS mcq_questions (
                id SERIAL PRIMARY KEY,
                quiz_id INT NOT NULL,
                question TEXT NOT NULL,
                code TEXT,
                explanation TEXT NOT NULL
            );
        `;
        console.log(`Created 'mcq_questions' table`);

        // Insert data into the 'mcq_questions' table
        const insertedQuestions = await Promise.all(
            mcqs.map(async (mcq) => {
                // Validate the MCQ data
                validateMcqData(mcq);

                return sql`
                    INSERT INTO mcq_questions (quiz_id, question, code, explanation)
                    VALUES (${mcq.id}, ${mcq.question}, ${mcq.code}, ${mcq.explanation})
                    RETURNING id;
                `;
            }),
        );
        console.log(`Seeded ${insertedQuestions.length} questions.`);

        return {
            createQuestionTable,
            questions: insertedQuestions,
        };
    } catch (error) {
        console.error(`Error seeding MCQ questions`, error);
        // Log more details about the error
        if (error.code === 'UND_ERR_CONNECT_TIMEOUT') {
            console.error('Connection timeout. Check network and database server status.');
        } else if (error.code === '23502') {
            console.error('Duplicate entry. Check for unique constraints.');
        } else {
            console.error('Unknown error. Check database connection details.');
        }
    }
}

async function seedMcqOptions() {
    try {
        // Create the 'mcq_options' table if it doesn't exist
        const createOptionsTable = await sql`
            CREATE TABLE IF NOT EXISTS mcq_options (
                id SERIAL PRIMARY KEY,
                quiz_id INT REFERENCES mcq_questions(id),
                option_letter CHAR(1) NOT NULL,
                value TEXT NOT NULL,
                is_correct BOOLEAN NOT NULL
            );
        `;
        console.log(`Created 'mcq_options' table`);

        // Batch processing for 'mcq_options'
        const batchSize = 50; // Adjust the batch size as needed
        const totalRows = mcqs.length;

        for (let i = 0; i < totalRows; i += batchSize) {
            const batch = mcqs.slice(i, i + batchSize);
            await seedMcqOptionsBatch(batch);
        }

        return {
            createOptionsTable,
        };
    } catch (error) {
        console.error(`Error seeding MCQ options`, error);
        // Log more details about the error
        if (error.code === 'UND_ERR_CONNECT_TIMEOUT') {
            console.error('Connection timeout. Check network and database server status.');
        } else if (error.code === '23502') {
            console.error('Duplicate entry. Check for unique constraints.');
        } else {
            console.error('Unknown error. Check database connection details.');
        }
    }
}

async function seedMcqOptionsBatch(mcqs) {
    const insertedOptions = [];

    for (const mcq of mcqs) {
        const quizId = mcq.id;

        await Promise.all(
            mcq.options.map(async (choice) => {
                // Validate the MCQ option data
                validateMcqOptionData(choice);
                const insertedOption = await sql`
                    INSERT INTO mcq_options (quiz_id, option_letter, value, is_correct)
                    VALUES (${quizId}, ${choice.option}, ${choice.value}, ${choice.correct})
                    RETURNING id;
                `;
                insertedOptions.push(insertedOption);
            }),
        );
    }

    console.log(`Seeded ${insertedOptions.length} MCQ options.`);
}


(async () => {
    await seedMcqQuestions();
    await seedMcqOptions();
})();


async function validateMcqData(mcq) {
    // Check if question is present
    if (!mcq.question) {
        throw new Error('Missing question');
    }
    // Check if code is present
    if (!mcq.options || !mcq.options.length) {
        throw new Error('Missing options');
    }

    // Check if at least one option is marked as correct
    const correctOptionFound = mcq.options.some((option) => option.correct);
    if (!correctOptionFound) {
        throw new Error('No correct option marked');
    }
}

async function validateMcqOptionData(option) {
    // Check if option letter is present
    if (!option.option) {
        throw new Error('Missing option letter');
    }
    // Check if option value is present
    if (!option.value) {
        throw new Error('Missing option value');
    }

    // Check if option correctness is a boolean
    if (typeof option.correct !== 'boolean') {
        throw new Error('Invalid option correctness');
    }
}
