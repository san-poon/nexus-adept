import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Category } from "../lib/types";
import { Plus } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function CategoryBlock({ category, onCategoryInsert, onTitleUpdate, level }: { category: Category, onCategoryInsert: any, onTitleUpdate: any, level: number }) {
    const maxDepth = 5;
    const canAddChildren = level < maxDepth;
    return (
        <div className={cn(
            "my-1 md:my-2 flex rounded-lg border-2 border-neutral-300 dark:border-neutral-700 flex-grow",
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
                onClick={onCategoryInsert}
                className={`${canAddChildren ? "block" : "hidden"}`}
            >
                <Plus className="w-4" />
            </Button>
        </div>

    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0