import { useState } from "react";
import { PathTitle } from "./editor-blocks";
import PathsTree from "./PathsTree";
import LearningPathTabs from "./EditorTabs";
import { DetailsEditor } from "./editor-tools";
import { cn } from "@/lib/utils";
import LessonEditor from "./LessonEditor";
import Menu from "@/components/ui/Menu";
import { usePaths } from "./PathsContext";

export default function Editor() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const paths = usePaths();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const root = paths["ROOT"];
    const rootChildIDs = root?.childIDs;

    return (
        <div>
            <div className="flex justify-between lg:justify-end mx-2 md:mx-8">
                <Menu className="lg:hidden" isOpen={isMenuOpen} onClick={handleMenuToggle} />
                <DetailsEditor />
            </div>
            <section className=" min-h-[60vh] lg:flex">
                <section className={cn("lg:w-1/3", isMenuOpen ? 'block' : "hidden lg:block")}>
                    <div className="flex justify-center my-4">
                        <PathTitle />
                    </div>
                    <ul >
                        {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                            <PathsTree
                                key={id}
                                pathID={id}
                                level={1}
                            />
                        ))}
                    </ul>
                </section>
                <section className={cn(
                    " mx-1 md:mx-12 lg:mx-24 lg:w-2/3", isMenuOpen ? "hidden lg:block" : "block"
                )}>
                    <LessonEditor />
                </section>
            </section>
        </div>
    );
}