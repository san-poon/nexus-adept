import { HierarchyTreeData } from "../lib/types";
import HierarchyTreeView from "./HierarchyTreeView";


export default function HierarchyPreview({ hierarchies }: { hierarchies: HierarchyTreeData }) {

    const root = hierarchies["ROOT"];
    const rootChildIDs = root?.childIDs;
    return (
        <div className="">
            <h1 className="text-3xl text-center mb-4 md:mb-12">
                {root.title}
            </h1>
            <div className="flex items-center justify-center">
                <ul>
                    {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                        <HierarchyTreeView
                            key={id}
                            categoryID={id}
                            hierarchies={hierarchies}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}