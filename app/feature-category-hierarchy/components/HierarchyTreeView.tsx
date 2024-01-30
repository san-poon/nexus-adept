import { cn } from "@/lib/utils";
import { HierarchyTreeData } from "../lib/types";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type HierarchyTreeViewProps = {
    categoryID: string,
    hierarchies: HierarchyTreeData,
    expandedHierarchies: Array<string>,
    onExpandedChange: any,
};

export default function HierarchyTreeView({ categoryID, hierarchies, expandedHierarchies, onExpandedChange }: HierarchyTreeViewProps) {
    const category = hierarchies[categoryID];
    const childIDs = category.childIDs;
    const hasChildIDs = childIDs.length > 0;
    const isExpanded = expandedHierarchies?.includes(categoryID);
    return (
        <li className="flex flex-col ps-4 md:ps-10 leading-loose transition-all  duration-500 ease-in-out motion-reduce:transition-none">
            <div className="my-2 md:my-4">
                <Button
                    type="button"
                    onClick={() => onExpandedChange(categoryID)}
                    className={cn(
                        "p-2 px-4 my-2 ",
                        hasChildIDs ? "border dark:border-neutral-600 rounded-full " : "border dark:border-neutral-600 rounded-full"
                    )}
                >
                    {category.title}
                    <span className={cn("ms-4", childIDs.length > 0 ? "opacity-100" : "opacity-0 cursor-default")}>
                        {isExpanded
                            ? <ChevronDown className="w-4" />
                            : <ChevronRight className="w-4" />
                        }
                    </span>
                </Button>

            </div>
            {hasChildIDs && (
                <ul className={cn("border-s border-neutral-300 dark:border-neutral-600 ms-1 md:ms-2 transition-all  duration-300 ease-in-out motion-reduce:transition-none",
                    isExpanded ? "h-auto opacity-100" : "opacity-0 h-0")}>
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