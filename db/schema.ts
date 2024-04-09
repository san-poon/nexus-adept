import { pgTable, uuid, varchar, primaryKey } from "drizzle-orm/pg-core"


export const categories = pgTable('categories', {
    id: uuid('id').primaryKey().notNull(),
    name: varchar('name').notNull(),
});

export const categoryHierarchy = pgTable('category_hierarchy', {
    categoryID: uuid('category_id').references(() => categories.id),
    parentID: uuid('parent_id').references(() => categories.id),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.categoryID, table.parentID] })
    }
});