'use client';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../lib/types'
import CategoryBlock from "./CategoryBlock";

const initialCategory: Category[] = [
    {
        id: uuidv4(),
        title: 'JavaScript',
        childIDs: [],
        parentIDs: [],
    },
];

export default function CategoryHierarchy() {
    const [categories, setCategories] = useState(initialCategory);

    const handleInsertCategory = (parentID: string, index: number) => {
        const newCategory: Category = {
            id: uuidv4(),
            title: "",
            childIDs: [],
            parentIDs: [parentID],
        };

        const insertAt = index + 1;
        const nextCategories = [
            // Items before the insertion point
            ...categories.slice(0, insertAt),
            // New item
            newCategory,
            // Remaining item
            ...categories.slice(insertAt)
        ]

        // Update the childIDs of the parent of the newly added category
        setCategories(nextCategories.map((category) => {
            if (category.id === parentID) {
                return {
                    ...category, childIDs: [...category.childIDs, newCategory.id]
                }
            } else {
                return category;
            }
        }));
    }

    const handleCategoryTitleUpdate = (id: string, title: string) => {
        const nextCategories = categories.map(category => {
            if (category.id === id) {
                return { ...category, title: title }
            } else {
                return category
            }
        });
        setCategories(nextCategories);
    };

    return (
        <div className="m-2 border-2 dark:border-neutral-800 p-2 rounded-lg h-screen overflow-auto">
            <div>
                {categories.map((category, index) => (
                    <div key={category.id} className="my-4">
                        <CategoryBlock
                            category={category}
                            onInsertCategory={() => { handleInsertCategory(category.id, index) }}
                            onTitleUpdate={handleCategoryTitleUpdate}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}