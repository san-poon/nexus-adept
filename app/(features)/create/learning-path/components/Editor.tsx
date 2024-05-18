import { useState } from "react";
import { cn } from "@/lib/utils";
import LessonEditor from "./LessonEditor";
import Menu from "@/components/ui/Menu";
import LessonPreview from "./LessonPreview";
import PathsEditor from "./PathsEditor";
import { SavePaths } from "./editor-tools";

export default function Editor() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div>
            {isMenuOpen ? (
                <section className="sticky h-[86vh] overflow-y-scroll scrollbar-hidden overscroll-contain">
                    <PathsEditor />
                </section>
            ) : (
                <section className="flex space-x-4 justify-evenly">
                    <div className="mx-2 p-2 w-1/2 sticky h-[86vh] overflow-y-scroll scrollbar-hidden overscroll-contain">
                        <LessonEditor />
                    </div>
                    <div className="mx-2 p-2 w-1/2 sticky h-[86vh] overflow-y-scroll scrollbar-hidden overscroll-contain">
                        <LessonPreview />
                    </div>
                </section>
            )}

            <div className="p-2">
                <Menu isOpen={isMenuOpen} onClick={handleMenuToggle} />
                <span className="flex-1 items-center justify-center">
                    <SavePaths />
                </span>
            </div>
        </div>
    );
}