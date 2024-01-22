import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Category } from "../lib/types";
import { Plus } from 'lucide-react';

export default function CategoryBlock({ category, onInsertCategory, onTitleUpdate }: { category: Category, onInsertCategory: any, onTitleUpdate: any }) {
    return (
        <div className="flex">
            <div className=" flex-grow me-2 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 max-w-screen-md">
                <Input
                    className=" text-base border-none "
                    type="text"
                    placeholder="A branch"
                    value={category.title}
                    onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
                />
            </div>
            <Button type="button" onClick={onInsertCategory}>
                <Plus className="pe-2" />
                Branch
            </Button>
        </div>
    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0