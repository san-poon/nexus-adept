import { useState } from "react";
import CategoryBlock from "./CategoryBlock";
import { Button } from "@/components/ui/button";
import { HierarchyTreeProps } from "../lib/types";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
export default function HierarchyTree({ categoryID, hierarchies, onChildCategoryInsert, onTitleUpdate, level }: HierarchyTreeProps) {
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
                            className=""
                            onClick={() => {
                                // Todo: refactor with onSiblingCategoryInsert handler
                                onChildCategoryInsert(category.parentIDs[0])
                            }}
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                    <CategoryBlock
                        category={category}
                        onChildCategoryInsert={() => { onChildCategoryInsert(category.id) }}
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
                            return (<HierarchyTree
                                key={childID}
                                categoryID={childID}
                                hierarchies={hierarchies}
                                onChildCategoryInsert={onChildCategoryInsert}
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