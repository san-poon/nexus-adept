import { sql } from '@vercel/postgres';


async function seedUsers() {
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        // Create the users table if it doesn't exist'
        const createTable = await sql`
        CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            first_name varchar(255) NOT NULL,
            last_name varchar(255) NOT NULL,
            email varchar(255) UNIQUE,
            password_hash varchar(255) NOT NULL,
            bio text,
            profile_picture_url varchar(255)
          );
        `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table



        return {
            createTable,
        }

    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedCategories() {
    try {

        const createTable = await sql`
        CREATE TABLE IF NOT EXISTS categories (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            name varchar(255) UNIQUE NOT NULL,
            parent_id uuid REFERENCES Categories(id)
          );
        `;

        console.log(`Created "categories" table`);

        // Insert data into the "categories" table



        return {
            createTable,
        }


    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    }
}

async function seedSkills() {
    try {

        const createTable = await sql`
        CREATE TABLE IF NOT EXISTS skills (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            title varchar(255) UNIQUE NOT NULL,
            description text,
            category_id uuid REFERENCES Categories(id)
        );
        `;

        console.log(`Created "skills" table`);

        // Insert data into the "skills" table



        return {
            createTable,
        }


    } catch (error) {
        console.error('Error seeding skills:', error);
        throw error;
    }
}