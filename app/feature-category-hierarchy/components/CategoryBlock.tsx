import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Category } from "../lib/types";
import { Plus } from 'lucide-react';

export default function CategoryBlock({ category, onCategoryInsert, onTitleUpdate }: { category: Category, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div>
            <div className=" my-2 md:my-3 flex py-1 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 max-w-lg">
                <Input
                    className=" text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                    type="text"
                    placeholder="Title of the Branch"
                    value={category.title}
                    onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
                />
                <Button type="button"
                    onClick={onCategoryInsert}
                    className="mx-2"
                >
                    <Plus className="w-4" />
                </Button>
            </div>

        </div>
    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0