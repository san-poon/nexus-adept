import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Hierarchy } from "../lib/types";
import { Plus } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function CategoryBlock({ category, onChildCategoryInsert, onTitleUpdate, level }: { category: Hierarchy, onChildCategoryInsert: any, onTitleUpdate: any, level: number }) {
    const maxDepth = 5;
    const canAddChildren = level < maxDepth;
    return (
        <div className={cn(
            "flex rounded-lg border-2 border-neutral-300 dark:border-neutral-700",
        )}>
            <Input
                autoFocus
                className="text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder={`Level ${level}`}
                value={category.title}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <Button type="button"
                onClick={onChildCategoryInsert}
                className={`${canAddChildren ? "block" : "hidden"}`}
            >
                <Plus className="w-4" />
            </Button>
        </div>

    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0