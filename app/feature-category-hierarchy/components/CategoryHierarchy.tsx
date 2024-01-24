'use client';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Hierarchy } from '../lib/types'
import HierarchyTitle from "./HierarchyTitle";
import HierarchyTree from "./HierarchyTree";

const initialID = uuidv4();
const initialHierarchy: Record<string, Hierarchy> = {
    [initialID]: {
        id: initialID,
        title: "",
        childIDs: [],
        parentIDs: [],
    }
};

export default function CategoryHierarchy() {
    const [hierarchies, setHierarchies] = useState<Record<string, Hierarchy>>(initialHierarchy);

    const handleChildCategoryInsert = (parentID: string) => {
        const newCategory: Hierarchy = {
            id: uuidv4(),
            title: "",
            childIDs: [],
            parentIDs: [parentID],
        }
        setHierarchies((prevHierarchies) => {
            // Updat the childIDs of the parent category
            const updatedParentCategory = {
                ...prevHierarchies[parentID],
                childIDs: [...prevHierarchies[parentID].childIDs, newCategory.id],
            }
            return {
                ...prevHierarchies,
                [parentID]: updatedParentCategory,
                [newCategory.id]: newCategory,
            }
        })
    }

    const handleCategoryTitleUpdate = (categoryID: string, newTitle: string) => {
        const nextHierarchies: Record<string, Hierarchy> = {
            ...hierarchies,
            [categoryID]: {
                ...hierarchies[categoryID],
                title: newTitle
            }
        }
        setHierarchies(nextHierarchies);
    };

    // Root represents the title of the learning path and
    // make sure not to place delete button rendering it.
    const root = hierarchies[initialID];
    const rootChildIDs = root.childIDs;

    return (
        <div className="m-4 min-h-screen">
            <div className="flex item-center justify-center">
                <HierarchyTitle
                    category={root}
                    onCategoryInsert={() => { handleChildCategoryInsert(root.id) }}
                    onTitleUpdate={handleCategoryTitleUpdate}
                />
            </div>
            <ul className="md:ms-10">
                {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                    <HierarchyTree
                        key={id}
                        categoryID={id}
                        hierarchies={hierarchies}
                        onChildCategoryInsert={handleChildCategoryInsert}
                        onTitleUpdate={handleCategoryTitleUpdate}
                        level={1}
                    />
                ))}
            </ul>
        </div>
    );
}