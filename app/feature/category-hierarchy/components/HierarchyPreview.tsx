'use client';

import { HierarchyTreeData } from "../lib/types";
import HierarchyViewTree from "./HierarchyViewTree";

export default function HierarchyPreview(
    { expandedHierarchies, onExpandedChange, hierarchies }
        : { expandedHierarchies: Array<string>, onExpandedChange: any, hierarchies: HierarchyTreeData }) {

    const root = hierarchies["ROOT"];
    const rootChildIDs = root?.childIDs;
    return (
        <div>
            <h1 className="text-3xl text-center mb-4 md:mb-12">
                {root.title}
            </h1>
            <ul>
                {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                    <HierarchyViewTree
                        key={id}
                        categoryID={id}
                        hierarchies={hierarchies}
                        onExpandedChange={onExpandedChange}
                        expandedHierarchies={expandedHierarchies}
                    />
                ))}
            </ul>
        </div>
    )
}