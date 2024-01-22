'use client';

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../lib/types'
import { Button } from "@/components/ui/button";

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
                    <li key={category.id}>
                        <input type="text" placeholder={category.title} />
                        <Button>Add Branch</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}