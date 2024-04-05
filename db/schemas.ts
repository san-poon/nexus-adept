import {
    pgTable,
    uuid,
    timestamp,
    varchar
} from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

export const UsersTable = pgTable(
    'users',
    {
        id: uuid('id').primaryKey(),
        firstName: varchar('first_name').notNull(),
        lastName: varchar('last_name').notNull(),
        email: varchar('email').notNull(),
        passwordHash: varchar('password_hash').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    }
)