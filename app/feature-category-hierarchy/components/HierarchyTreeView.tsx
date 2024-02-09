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

export default function HierarchyTreeView({
    categoryID,
    hierarchies,
    expandedHierarchies,
    onExpandedChange}: 
    HierarchyTreeViewProps) {
    const category = hierarchies[categoryID];
    const childIDs = category.childIDs;
    const hasChildIDs = childIDs.length > 0;
    const isExpanded = expandedHierarchies?.includes(categoryID);

    return (
        <li className="flex flex-col ps-4 md:ps-10">
            <div className="my-1 md:my-2">
                <Button
                    type="button"
                    onClick={() => onExpandedChange(categoryID)}
                    className={cn(
                        "p-2 px-4 my-2 border dark:border-neutral-600 rounded-full bg-neutral-900 ",
                    )}
                >
                    {category.title}
                    <span className={cn("ms-4",
                        hasChildIDs ? "block" : " hidden",
                        isExpanded ? 'rotate-90 transition-transform duration-200' : "")}>
                        <ChevronRight className="w-4" />
                    </span>
                </Button>

            </div>
            {isExpanded && hasChildIDs && (
                <ul className={cn("border-s border-neutral-300 dark:border-neutral-600 ms-1 md:ms-2 ",
                )}>
                    {childIDs.map((childID) => (
                        <HierarchyTreeView
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