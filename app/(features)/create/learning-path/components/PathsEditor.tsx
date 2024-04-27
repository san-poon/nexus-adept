'use client';

import { useState } from "react";
import LearningPathTitle from "./LearningPathTitle";
import RoadmapTree from "./RoadmapTree";
import LearningPathTabs from "./LearningPathTabs";
import DetailsEditor from "./DetailsEditor";
import { cn } from "@/lib/utils";
import LessonEditor from "./LessonEditor";
import Menu from "@/components/ui/Menu";
import { usePaths } from "./PathsContext";

export default function LearningPathEditor() {
    const [activeItem, setActiveItem] = useState<string[]>(['ROOT']); // Default active lesson.
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const paths = usePaths();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleRoadmapItemClick = (itemId: string) => {
        if (activeItem.includes(itemId)) return;
        setActiveItem((ai) => {
            const newActiveItems = ai.slice(0, 0);
            return [...newActiveItems, itemId];
        });
    }

    // Root represents the title of the learning path and
    // make sure not to place delete button rendering it.
    const root = paths["ROOT"];
    const rootChildIDs = root?.childIDs;

    return (
        <div className="min-h-[78vh]">
            <LearningPathTabs>
                <div className="flex justify-between lg:justify-end mx-2 md:mx-8">
                    <Menu className="lg:hidden" isOpen={isMenuOpen} onClick={handleMenuToggle} />
                    <DetailsEditor />
                </div>
                <section className="lg:flex lg:border-y border-neutral-200 dark:border-neutral-700 py-2 lg:py-4">
                    <section className={cn("lg:w-1/3 lg:border-e border-neutral-300 dark:border-neutral-600", isMenuOpen ? 'block' : "hidden lg:block")}>
                        <div className="flex justify-center my-4">
                            <LearningPathTitle />
                        </div>
                        <ul >
                            {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                                <RoadmapTree
                                    key={id}
                                    pathID={id}
                                    level={1}
                                    activeRoadmapItem={activeItem}
                                    onItemClick={handleRoadmapItemClick}
                                />
                            ))}
                        </ul>
                    </section>
                    <section className={cn(
                        "mx-2 lg:mx-4", isMenuOpen ? "hidden lg:block" : "block"
                    )}>
                        <p>This is the content editor section.</p>
                    </section>
                </section>
            </LearningPathTabs>
        </div>
    );
}