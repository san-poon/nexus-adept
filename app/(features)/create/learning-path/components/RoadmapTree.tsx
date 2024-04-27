import { useState } from "react";
import RoadmapItem from "./RoadmapItem";
import { Button } from "@/components/ui/button";
import { RoadmapTreeProps } from "../lib/types";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddButton, EditContentButton } from "./tootip-buttons";
import { usePaths, usePathsDispatch } from "./PathsContext";

export default function RoadmapTree({ pathID, onPathClick, activePathID, level }: RoadmapTreeProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const paths = usePaths();
    const dispatch = usePathsDispatch();

    const handleHierarchyToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    const path = paths[pathID];

    const childIDs = path.childIDs;

    const isActiveItem = activePathID.includes(pathID);

    return (
        <li className=" ps-1 md:ps-4">
            <div className="flex items-center">
                <div>
                    <div className="flex justify-center">
                        <AddButton
                            className="opacity-30 transition-opacity duration-300 hover:opacity-100"
                            onClick={() => {
                                dispatch({
                                    type: "sibling-path-added",
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
                        <RoadmapItem
                            path={path}
                            level={level}
                            onInputClick={onPathClick}
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
                            pathID={childID}
                            level={nextLevel}
                            onPathClick={onPathClick}
                            activePathID={activePathID}
                        />)
                    })}
                </ul>
            )}
        </li>

    )
}