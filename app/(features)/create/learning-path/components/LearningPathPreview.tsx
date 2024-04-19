'use client';

import { HierarchyTreeData } from "../lib/types";
import RoadmapViewTree from "./RoadmapViewTree";

export default function LearningPathPreview(
    { expandedHierarchies, onExpandedChange, hierarchies }
        : { expandedHierarchies: Array<string>, onExpandedChange: any, hierarchies: HierarchyTreeData }) {

    const root = hierarchies["ROOT"];
    const rootChildIDs = root?.childIDs;
    return (
        <div>
            <h1 className="text-3xl text-center m-4 ">
                {root.title}
            </h1>
            <ul>
                {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                    <RoadmapViewTree
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