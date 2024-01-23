'use client';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../lib/types'
import HierarchyTitle from "./HierarchyTitle";
import CategoryTree from "./CategoryTree";

const initialCategory: Category[] = [
    {
        id: uuidv4(),
        title: '',
        childIDs: [],
        parentIDs: [],
    },
];

export default function CategoryHierarchy() {
    const [categories, setCategories] = useState(initialCategory);

    const handleCategoryInsert = (parentID: string, index: number) => {
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

    // Root represents the title of the learning path and
    // cannot be deleted
    const root = categories[0];
    const rootChildIDs = root.childIDs;

    return (
        <div className="m-4 min-h-screen">
            <div className="flex item-center justify-center">
                <HierarchyTitle
                    category={root}
                    onCategoryInsert={() => { handleCategoryInsert(root.id, 0) }}
                    onTitleUpdate={handleCategoryTitleUpdate}
                />
            </div>
            <ul className="md:ms-10 lg:ms-96">
                {rootChildIDs.map((id: string) => (
                    <CategoryTree
                        key={id}
                        categoryID={id}
                        categories={categories}
                        onCategoryInsert={handleCategoryInsert}
                        onTitleUpdate={handleCategoryTitleUpdate}
                        level={1}
                    />
                ))}
            </ul>
        </div>
    );
}