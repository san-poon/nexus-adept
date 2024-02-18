const { sql } = require('@vercel/postgres');
const bcrypt = require('bcryptjs');

const { users } = require('../lib/placeholder-data.js');
const learningPathData = require('../lib/hieararchy-tree-sample-data.json');

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

        // **Handle potential undefined `users` data:**
        if (!users || !Array.isArray(users)) {
            console.warn("Warning: Placeholder data for users is either undefined or not an array. No users will be seeded.");
            return; // Exit early if no users
        }

        // **Handle empty array gracefully:**
        if (users.length === 0) {
            console.log("No users found in placeholder data. Skipping seeding users.");
            return; // Exit early if no users to seed
        }


        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hashSync(user.password, 8);
                return sql`
                    INSERT INTO users (first_name, last_name, email, password_hash, bio, profile_picture_url)
                    VALUES (${user.firstName}, ${user.lastName}, ${user.email}, ${hashedPassword}, ${user.bio}, ${user.profile_picture_url})
                `;
            })
        );

        console.log(`Seeded ${insertedUsers.length} users`)
        return {
            createTable,
            users: insertedUsers
        }

    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedCategories() {
    try {

        const createCategoriesTable = await sql`
            CREATE TABLE IF NOT EXISTS categories (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                name varchar(255) UNIQUE NOT NULL
            );
        `;

        console.log(`Created "categories" table.\n`);

        // Many to many relationships: a category can have many children, and the category can belong to more than one parent
        const createCategoryHierarchyTable = await sql`
            CREATE TABLE IF NOT EXISTS category_hierarchy (
                category_id uuid REFERENCES categories(id),
                parent_id uuid REFERENCES categories(id) NOT NULL,
                PRIMARY KEY (category_id, parent_id)
            );
        `;
        console.log(`Created "category_hierarchy" table.\n`)


        // Insert data into the "categories" table



        return {
            createCategoriesTable,
            createCategoryHierarchyTable,
        }


    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    }
}

async function seedLearningPath() {
    try {

        await sql`
            CREATE TABLE IF NOT EXISTS skills (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                title varchar(255) UNIQUE NOT NULL,
                description text,
                category_id uuid REFERENCES categories(id) NOT NULL
            );
        `;
        console.log(`Created "skills" table.`)

        await sql`
            CREATE TABLE IF NOT EXISTS learning_path (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                skill_id uuid REFERENCES skills(id) NOT NULL,
                version integer NOT NULL,
                created_by_id uuid REFERENCES users(id) NOT NULL,
                created_at timestamp DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
                is_current boolean NOT NULL DEFAULT true,
                is_official boolean NOT NULL DEFAULT false
            );
        `;
        console.log(`Created "learning_path" table`)

        await sql`
            CREATE TABLE IF NOT EXISTS learning_path_nodes (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                learning_path_id uuid REFERENCES learning_path(id) NOT NULL,
                parent_id uuid REFERENCES learning_path_nodes(id),
                title varchar(255) NOT NULL,
                description text,
                order_in_parent smallint NOT NULL
            );
        `;

        console.log(`Created "learning_path_nodes" table`);

        // Insert data into tables



    } catch (error) {
        console.error(`Error seeding 'skills' or 'learning_path' or 'learning_path_nodes':`, error);
        throw error;
    }
}

async function seedContributions() {
    try {

        const createTable = await sql`
            CREATE TABLE contributions (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                learning_path_id uuid REFERENCES learning_path(id) NOT NULL,
                user_id uuid REFERENCES users(id) NOT NULL,
                content jsonb NOT NULL,
                status enum('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
                submitted_at timestamp DEFAULT CURRENT_TIMESTAMP
            );
        `;

        console.log(`Created "contributions" table`);

        // Insert data into the "categories" table



        return {
            createTable,
        }


    } catch (error) {
        console.error('Error seeding contributions:', error);
        throw error;
    }
}

async function seedVotes() {
    try {

        const createTable = await sql`
            CREATE TABLE votes (
                id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
                skill_verified_user_id uuid REFERENCES users(id) NOT NULL,
                contribution_id uuid REFERENCES contributions(id) NOT NULL,
                vote enum('approve', 'reject') NOT NULL,
                UNIQUE (skill_verified_user_id, contribution_id)
            );
          
        `;

        console.log(`Created "votes" table`);

        // Insert data into the "categories" table



        return {
            createTable,
        }


    } catch (error) {
        console.error('Error seeding votes:', error);
        throw error;
    }
}



(async () => {
    await seedUsers();
    await seedCategories();
    await seedLearningPath();
})();