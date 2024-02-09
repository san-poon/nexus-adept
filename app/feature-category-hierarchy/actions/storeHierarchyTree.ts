'use server';

import { sql } from '@vercel/postgres';
import { HierarchyTreeData } from '../lib/types';

export async function storeHierarchyTree(hierarchies: HierarchyTreeData) {
    const rootNode = hierarchies['ROOT'];
    try {
        // Start the insertion from the root node
        await insertNode(hierarchies, rootNode.id);
    }
    catch (error) {
        console.error('Erro storing Learning Path data: ', error);
    }
}

// Recursive function to insert a hierarchy
async function insertNode(hierarchies: HierarchyTreeData, categoryID: string, parentID?: string, order_in_parent = 0) {
    const { id, title, childIDs } = hierarchies[categoryID];
    await sql`
        INSERT INTO learning_path (title, parent_id, order_in_parent)
        VALUES (${id}, ${title}, ${parentID}, ${order_in_parent})
    `;

    if (childIDs.length > 0) {
        // Insert children recursively
        for (let i = 0; i < childIDs.length; i++) {
            await insertNode(hierarchies, childIDs[i], id, i + 1)
        }
    }
}