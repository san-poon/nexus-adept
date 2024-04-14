import { cn } from "@/lib/utils";
import { HierarchyTreeData } from "../lib/types";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type HierarchyTreeViewProps = {
    categoryID: string,
    hierarchies: HierarchyTreeData,
    expandedHierarchies: Array<string>,
    onExpandedChange: any,
};

export default function HierarchyViewTree({
    categoryID,
    hierarchies,
    expandedHierarchies,
    onExpandedChange }:
    HierarchyTreeViewProps) {
    const category = hierarchies[categoryID];
    const childIDs = category.childIDs;
    const hasChildIDs = childIDs.length > 0;
    const isExpanded = expandedHierarchies?.includes(categoryID);

    return (
        <li className=" ps-4 md:ps-10">
            <div className=" inline-flex items-center mb-6">
                <span className="text-sm md:text-base">
                    {category.title}
                </span>
                {hasChildIDs && (
                    <Button
                        type="button"
                        onClick={() => onExpandedChange(categoryID)}
                        className="ms-2"
                    >
                        <span className={cn(
                            isExpanded ? 'rotate-90 transition-transform duration-200' : "")}>
                            <ChevronRight className="w-4" />
                        </span>
                    </Button>
                )}
            </div>
            {isExpanded && hasChildIDs && (
                <ul className={cn("border-s border-neutral-300 dark:border-neutral-600 ms-1 md:ms-2 ",
                )}>
                    {childIDs.map((childID) => (
                        <HierarchyViewTree
                            key={childID}
                            categoryID={childID}
                            hierarchies={hierarchies}
                            expandedHierarchies={expandedHierarchies}
                            onExpandedChange={onExpandedChange}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}