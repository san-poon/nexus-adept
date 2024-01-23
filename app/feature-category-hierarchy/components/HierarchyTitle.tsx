
import { Category } from "../lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function HierarchyTitle({ category, onCategoryInsert, onTitleUpdate }: { category: Category, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className=" flex-grow max-w-md my-2 md:my-3 flex py-1 rounded-lg border-b-2 border-neutral-300 dark:border-neutral-700">
            <Input
                className=" text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder="Learning Path Title"
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
    )
}