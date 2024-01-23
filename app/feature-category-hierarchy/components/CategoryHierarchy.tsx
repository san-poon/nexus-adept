'use client';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Category, CategoryTreeProps } from '../lib/types'
import CategoryBlock from "./CategoryBlock";
import HierarchyTitle from "./HierarchyTitle";

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
    const learningPathIDs = root.childIDs;

    return (
        <div className="m-4 flex-col">
            <div className="flex item-center justify-center">
                <HierarchyTitle
                    category={root}
                    onCategoryInsert={() => { handleCategoryInsert(root.id, 0) }}
                    onTitleUpdate={handleCategoryTitleUpdate}
                />
            </div>
            <ul>
                {learningPathIDs.map((id: string) => (
                    <CategoryTree
                        key={id}
                        categoryID={id}
                        categories={categories}
                        onCategoryInsert={handleCategoryInsert}
                        onTitleUpdate={handleCategoryTitleUpdate}
                    />
                ))}
            </ul>
        </div>
    );
}

function CategoryTree({ categoryID, categories, onCategoryInsert, onTitleUpdate }: CategoryTreeProps) {
    //@ts-ignore
    const { index, category } = categories.reduce(
        (result, current, currentIndex) => {
            if (current.id === categoryID) {
                return {
                    index: currentIndex,
                    category: current
                }
            }
            return result;
        },
        {}
    );
    const childIDs = category.childIDs;

    return (
        <li>
            <CategoryBlock
                category={category}
                onCategoryInsert={() => { onCategoryInsert(category.id, index) }}
                onTitleUpdate={onTitleUpdate}
            />
            {childIDs.length > 0 && (
                <div className=" border-s dark:border-neutral-700 border-neutral-300">
                    <ul className=" ms-10 my-2">
                        {childIDs.map((childID: string) => (
                            <CategoryTree
                                key={childID}
                                categoryID={childID}
                                categories={categories}
                                onCategoryInsert={onCategoryInsert}
                                onTitleUpdate={onTitleUpdate}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </li>

    )
}