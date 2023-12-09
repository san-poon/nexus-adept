'use client';

import { useState } from "react";

interface CategoryInputProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function ShowCategoryInput() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = ["Web Development", 'Mobile Development', 'Desktop Development'];

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    }

    return (
        <div>
            <CategoryInput
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
            />

        </div>
    )
}

const CategoryInput: React.FC<CategoryInputProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div>
            <label htmlFor="category">Category: </label>
            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
            >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}
