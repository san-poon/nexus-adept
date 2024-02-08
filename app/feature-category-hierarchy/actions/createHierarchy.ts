'use server';

import { sql } from '@vercel/postgres';
import { HierarchyData, HierarchyTreeData } from '../lib/types';

export async function createHierarchy(hierarchies: HierarchyTreeData) {
    const rootNode = hierarchies['ROOT'];
    const hasChildIDs = rootNode.childIDs.length > 0;
    try {
        await sql`
        INSERT INTO learning_path (title, parent_id, order_in_parent)
        VALUES (${rootNode.title}, ${null}, ${0})
        RETURNING id
    `;
    }
    catch (error) {
        console.error('Error when trying to save hierarchy root', error);
        throw error;
    }

    if (hasChildIDs) {
        for (const childID of rootNode.childIDs) {

        }
    }
}

function processNode(node: HierarchyData, parentID?: string) {
    const query = `INSERT INTO learning_path (title, parent_id, position)`
}