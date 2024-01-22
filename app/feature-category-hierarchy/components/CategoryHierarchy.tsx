'use client';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../lib/types'

const initialCategory: Category[] = [
    {
        id: uuidv4(),
        title: 'JavaScript',
        childIDs: [],
        parentIDs: [],
    },
]

export default function CategoryHierarchy() {
    const [categories, setCategories] = useState(initialCategory);

    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.title}</li>
                ))}
            </ul>
        </div>
    )
}