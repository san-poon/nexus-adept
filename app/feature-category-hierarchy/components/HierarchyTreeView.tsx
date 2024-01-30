import { cn } from "@/lib/utils";
import { HierarchyTreeData } from "../lib/types";

export type HierarchyTreeViewProps = {
    categoryID: string,
    hierarchies: HierarchyTreeData
};

export default function HierarchyTreeView({ categoryID, hierarchies }: HierarchyTreeViewProps) {

    const category = hierarchies[categoryID];
    const childIDs = category.childIDs;
    const isChildIDs = childIDs.length > 0;

    return (
        <li>
            <div className="my-2 md:my-4">
                <span className={cn(
                    "p-2 px-4 my-2",
                    isChildIDs ? "border dark:border-amber-900/15 rounded-full" : "border dark:border-emerald-900/50 rounded-full"
                )}>
                    {category.title}
                </span>
            </div>
            {childIDs.length > 0 && (
                <div className="border-s dark:border-neutral-700 border-neutral-300">
                    <ul className="ms-10 ">
                        {childIDs.map((childID) => (
                            <HierarchyTreeView
                                key={childID}
                                categoryID={childID}
                                hierarchies={hierarchies}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
}