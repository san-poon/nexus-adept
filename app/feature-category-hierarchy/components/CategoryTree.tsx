import { useState } from "react";
import CategoryBlock from "./CategoryBlock";
import { Button } from "@/components/ui/button";
import { CategoryTreeProps } from "../lib/types";
import { ChevronDown, ChevronRight } from "lucide-react";
export default function CategoryTree({ categoryID, categories, onCategoryInsert, onTitleUpdate, level }: CategoryTreeProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleHierarchyToggle = () => {
        setIsExpanded((prev) => !prev);
    }

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
            <div className="flex items-center">
                <div>
                    <CategoryBlock
                        category={category}
                        onCategoryInsert={() => { onCategoryInsert(category.id, index) }}
                        onTitleUpdate={onTitleUpdate}
                        level={level}
                    />
                </div>
                {childIDs.length > 0 && (
                    <Button onClick={handleHierarchyToggle}>
                        {isExpanded
                            ? <ChevronDown className="w-4" />
                            : <ChevronRight className="w-4" />
                        }
                    </Button>
                )}
            </div>
            {isExpanded && childIDs.length > 0 && (
                <div className=" border-s dark:border-neutral-700 border-neutral-300">
                    <ul className=" ml-10 my-2 overflow-y-auto">
                        {childIDs.map((childID: string) => {
                            const nextLevel = level + 1;
                            return (<CategoryTree
                                key={childID}
                                categoryID={childID}
                                categories={categories}
                                onCategoryInsert={onCategoryInsert}
                                onTitleUpdate={onTitleUpdate}
                                level={nextLevel}
                            />)
                        })}
                    </ul>
                </div>
            )}
        </li>

    )
}