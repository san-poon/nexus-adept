'use server';

import { QueryResult, sql } from '@vercel/postgres';
import { HierarchyTreeData } from './types';


export async function storeHierarchyTree(hierarchies: HierarchyTreeData) {
    const rootNode = hierarchies['ROOT'];
    try {
        // Start the insertion from the root node
        await insertNode(hierarchies, rootNode.id);
    }
    catch (error) {
        console.error('Error storing Learning Path data: ', error);
    }
}

// Recursive function to insert a hierarchy
async function insertNode(hierarchies: HierarchyTreeData, categoryID: string, parentID?: string, order_in_parent = 0) {
    const { title, childIDs } = hierarchies[categoryID];
    await sql`
        INSERT INTO learning_path (title, parent_id, order_in_parent)
        VALUES (${title}, ${parentID}, ${order_in_parent})
    `;

    // Retrieve the generated 'id' from the insert operation
    const result: QueryResult<{ id: string }> = await sql`
        SELECT id FROM learning_path WHERE title=${title}
    `;
    const generatedID: string = result.rows[0].id;

    if (childIDs.length > 0) {
        // Insert children recursively
        for (let i = 0; i < childIDs.length; i++) {
            await insertNode(hierarchies, childIDs[i], generatedID, i + 1)
        }
    }
}