import { useState } from "react";
import RoadmapItem from "./RoadmapItem";
import { Button } from "@/components/ui/button";
import { HierarchyTreeProps } from "../lib/types";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddButton, EditContentButton } from "./tootip-buttons";

export default function RoadmapTree({ categoryID, hierarchies, onChildCategoryInsert, onSiblingCategoryInsert, onTitleUpdate, onCategoryDelete, onItemClick, activeRoadmapItem, level }: HierarchyTreeProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleHierarchyToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    const category = hierarchies[categoryID];

    const childIDs = category.childIDs;

    const isActiveItem = activeRoadmapItem.includes(categoryID);

    return (
        <li className=" ps-1 md:ps-4">
            <div className="flex items-center">
                <div>
                    <div className="flex justify-center">
                        <AddButton
                            className="opacity-30 transition-opacity duration-300 hover:opacity-100"
                            onClick={() => {
                                onSiblingCategoryInsert(category.id)
                            }}
                        >
                            <p>Add Sibling</p>
                        </AddButton>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            size="icon"
                            onClick={handleHierarchyToggle}
                            className={cn(childIDs.length > 0 ? "opacity-100" : "opacity-0 cursor-default")}>
                            <span className={cn(
                                isExpanded ? 'rotate-90 transition-transform duration-200' : "")}>
                                <ChevronRight className="w-4" />
                            </span>
                        </Button>
                        <RoadmapItem
                            category={category}
                            onChildCategoryInsert={() => { onChildCategoryInsert(category.id) }}
                            onTitleUpdate={onTitleUpdate}
                            onCategoryDelete={onCategoryDelete}
                            level={level}
                            onInputClick={onItemClick}
                        />
                        <div className="w-6 md:w-10 rounded-full">
                            {isActiveItem && (
                                <EditContentButton className="" onClick={() => { }}>
                                    <p>Edit Lesson</p>
                                </EditContentButton>
                            )}
                        </div>

                    </div>
                </div>

            </div>
            {isExpanded && childIDs.length > 0 && (
                <ul className="border-s dark:border-neutral-700 ms-5 space-y-1">
                    {childIDs.map((childID: string) => {
                        const nextLevel = level + 1;
                        return (<RoadmapTree
                            key={childID}
                            categoryID={childID}
                            hierarchies={hierarchies}
                            onChildCategoryInsert={onChildCategoryInsert}
                            onSiblingCategoryInsert={onSiblingCategoryInsert}
                            onTitleUpdate={onTitleUpdate}
                            onCategoryDelete={onCategoryDelete}
                            level={nextLevel}
                            onItemClick={onItemClick}
                            activeRoadmapItem={activeRoadmapItem}
                        />)
                    })}
                </ul>
            )}
        </li>

    )
}