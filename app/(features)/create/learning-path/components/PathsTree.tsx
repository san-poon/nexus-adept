import { useState } from "react";
import { Path } from "./editor-blocks";
import { Button } from "@/components/ui/button";
import { RoadmapTreeProps } from "../lib/types";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddButton } from "./tootip-buttons";
import { usePaths, usePathsDispatch } from "./PathsContext";

export default function PathsTree({ pathID, level }: RoadmapTreeProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const paths = usePaths();
    const dispatch = usePathsDispatch();

    const handleHierarchyToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    const path = paths[pathID];
    const childIDs = path.childIDs;

    return (
        <li>
            <div className="flex items-center">
                <div>
                    <div className="flex justify-center">
                        <AddButton
                            className="opacity-30 transition-opacity duration-300 hover:opacity-100"
                            onClick={() => {
                                dispatch({
                                    type: 'added_sibling_path',
                                    siblingID: pathID,
                                });
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
                        <Path
                            path={path}
                            level={level}
                        />
                    </div>
                </div>
            </div>

            {isExpanded && childIDs.length > 0 && (
                <ul className="border-s dark:border-neutral-700 ms-4">
                    {childIDs.map((childID: string) => {
                        const nextLevel = level + 1;
                        return (<PathsTree
                            key={childID}
                            pathID={childID}
                            level={nextLevel}
                        />)
                    })}
                </ul>
            )}
        </li>
    );
}