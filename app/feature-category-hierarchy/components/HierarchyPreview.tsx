'use client';

import { useState } from "react";
import { HierarchyTreeData } from "../lib/types";
import HierarchyTreeView from "./HierarchyTreeView";

export default function HierarchyPreview({ hierarchies }: { hierarchies: HierarchyTreeData }) {
    const [expandedHierarchies, setExpandedHierarchies] = useState(['ROOT']);

    const handleExpandedChange = (categoryID: string) => {
        setExpandedHierarchies((prev: Array<string>) => {
            const isExpanded = expandedHierarchies?.includes(categoryID);
            if (isExpanded) {
                return prev.filter((expandedID) => expandedID !== categoryID)
            }
            return [
                ...prev, categoryID
            ];
        })
    }
    const root = hierarchies["ROOT"];
    const rootChildIDs = root?.childIDs;
    return (
        <div className="">
            <h1 className="text-3xl text-center mb-4 md:mb-12">
                {root.title}
            </h1>
            <ul className=" ">
                {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                    <HierarchyTreeView
                        key={id}
                        categoryID={id}
                        hierarchies={hierarchies}
                        onExpandedChange={handleExpandedChange}
                        expandedHierarchies={expandedHierarchies}
                    />
                ))}
            </ul>
        </div>
    )
}