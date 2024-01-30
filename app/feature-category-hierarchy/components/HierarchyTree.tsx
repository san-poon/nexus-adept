import { useState } from "react";
import CategoryBlock from "./CategoryBlock";
import { Button } from "@/components/ui/button";
import { HierarchyTreeProps } from "../lib/types";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddSiblingTooltipButton } from "./tootip-buttons";
import { Transition } from '@headlessui/react';

export default function HierarchyTree({ categoryID, hierarchies, onChildCategoryInsert, onSiblingCategoryInsert, onTitleUpdate, onCategoryDelete, level }: HierarchyTreeProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleHierarchyToggle = () => {
        setIsExpanded((prev) => !prev);
    }

    const category = hierarchies[categoryID];

    const childIDs = category.childIDs;

    return (
        <li className="ps-4 md:ps-10 space-y-2">
            <div className="flex items-center">
                <div>
                    <div className="flex justify-center">
                        <AddSiblingTooltipButton
                            className="opacity-30 transition-opacity duration-300 hover:opacity-100"
                            onClick={() => {
                                onSiblingCategoryInsert(category.id)
                            }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <CategoryBlock
                            category={category}
                            onChildCategoryInsert={() => { onChildCategoryInsert(category.id) }}
                            onTitleUpdate={onTitleUpdate}
                            onCategoryDelete={onCategoryDelete}
                            level={level}
                        />
                        <Button
                            onClick={handleHierarchyToggle}
                            className={cn(childIDs.length > 0 ? "opacity-100" : "opacity-0 cursor-default")}>
                            {isExpanded
                                ? <ChevronDown className="w-4" />
                                : <ChevronRight className="w-4" />
                            }
                        </Button>
                    </div>
                </div>

            </div>
            {isExpanded && childIDs.length > 0 && (
                <ul className="border-s dark:border-neutral-700 ms-1 md:ms-2 space-y-1">
                    {childIDs.map((childID: string) => {
                        const nextLevel = level + 1;
                        return (<HierarchyTree
                            key={childID}
                            categoryID={childID}
                            hierarchies={hierarchies}
                            onChildCategoryInsert={onChildCategoryInsert}
                            onSiblingCategoryInsert={onSiblingCategoryInsert}
                            onTitleUpdate={onTitleUpdate}
                            onCategoryDelete={onCategoryDelete}
                            level={nextLevel}
                        />)
                    })}
                </ul>
            )}
        </li>

    )
}