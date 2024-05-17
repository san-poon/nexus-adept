import { useState } from "react";
import { cn } from "@/lib/utils";
import LessonEditor from "./LessonEditor";
import Menu from "@/components/ui/Menu";
import LessonPreview from "./LessonPreview";
import PathsEditor from "./PathsEditor";

export default function Editor() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div>
            <div className="">
                <Menu isOpen={isMenuOpen} onClick={handleMenuToggle} />
            </div>
            {isMenuOpen ? (
                <section className="">
                    <PathsEditor />
                </section>
            ) : (
                <section className="flex space-x-4 justify-evenly">
                    <div className="mx-2 w-1/2">
                        <LessonEditor />
                    </div>
                    <div className="mx-2 w-1/2">
                        <LessonPreview />
                    </div>
                </section>
            )}
        </div>
    );
}