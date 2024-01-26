import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddHierarchyTooltipButton, DeleteTooltipButton } from "./tootip-buttons";



export default function CategoryBlock({ category, onChildCategoryInsert, onTitleUpdate, onCategoryDelete, level }: any) {
    const maxDepth = 5;
    const canAddChildren = level < maxDepth;
    return (
        <div className={cn(
            "flex rounded-lg border-2 border-neutral-300 dark:border-neutral-700",
        )}>
            <DeleteTooltipButton
                onClick={() => onCategoryDelete(category.id)}
                className="opacity-30 transition-opacity duration-300 hover:opacity-100"
            />
            <Input
                autoFocus
                className="text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder={`Level ${level}`}
                value={category.title}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <AddHierarchyTooltipButton
                onClick={onChildCategoryInsert}
                className={`${canAddChildren ? "block" : "hidden"}`}
            />
        </div>

    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0