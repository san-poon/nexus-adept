import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddButton, DeleteButton } from "./tootip-buttons";

export default function RoadmapItem({ category, onChildCategoryInsert, onTitleUpdate, onCategoryDelete, level, onInputClick }: any) {

    const maxDepth = 3;
    const canAddChildren = level < maxDepth;
    return (
        <div className={cn(
            "flex rounded-full border border-neutral-300 dark:border-neutral-700",
        )}>
            <DeleteButton
                onClick={() => onCategoryDelete(category.id)}
                className="opacity-30 transition-opacity duration-300 hover:opacity-100"
            />
            <Input
                className="md:min-w-72"
                type="text"
                placeholder={`Level ${level}`}
                value={category.title}
                onClick={() => { onInputClick(category.id) }}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <AddButton
                onClick={onChildCategoryInsert}
                className={`${canAddChildren ? "block" : "hidden"}`}
            >
                {/* Level 1 is learning-paths, Level 2 can be either lesson or paths within learning-paths. Level 3 must be a lesson */}
                {level === 1 ? <p>Add subchapter or lesson</p> : <p>Add lesson</p>}
            </AddButton>
        </div>

    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0