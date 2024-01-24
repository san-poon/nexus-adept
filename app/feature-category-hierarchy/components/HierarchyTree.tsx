import { useState } from "react";
import CategoryBlock from "./CategoryBlock";
import { Button } from "@/components/ui/button";
import { HierarchyTreeProps } from "../lib/types";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
export default function HierarchyTree({ categoryID, hierarchies, onChildCategoryInsert, onSiblingCategoryInsert, onTitleUpdate, level }: HierarchyTreeProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleHierarchyToggle = () => {
        setIsExpanded((prev) => !prev);
    }

    const category = hierarchies[categoryID];

    const childIDs = category.childIDs;

    return (
        <li>
            <div className="flex items-center">
                <div>
                    <div className="flex justify-center">
                        <Button
                            type="button"
                            onClick={() => {
                                onSiblingCategoryInsert(category.id)
                            }}
                        >
                            <Plus className="w-3 h-3" />
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <CategoryBlock
                            category={category}
                            onChildCategoryInsert={() => { onChildCategoryInsert(category.id) }}
                            onTitleUpdate={onTitleUpdate}
                            level={level}
                        />
                        {childIDs.length > 0 && (
                            <Button onClick={handleHierarchyToggle}>
                                {isExpanded
                                    ? <ChevronDown className="w-4" />
                                    : <ChevronRight className="w-4" />
                                }
                            </Button>
                        )}
                    </div>
                </div>

            </div>
            {isExpanded && childIDs.length > 0 && (
                <div className=" border-s dark:border-neutral-700 border-neutral-300">
                    <ul className=" ml-10 overflow-y-auto">
                        {childIDs.map((childID: string) => {
                            const nextLevel = level + 1;
                            return (<HierarchyTree
                                key={childID}
                                categoryID={childID}
                                hierarchies={hierarchies}
                                onChildCategoryInsert={onChildCategoryInsert}
                                onSiblingCategoryInsert={onSiblingCategoryInsert}
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