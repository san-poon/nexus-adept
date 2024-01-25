
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Hierarchy } from "../lib/types";
import { AddHierarchyTooltipButton } from "./tootip-buttons";

export default function HierarchyTitle({ category, onCategoryInsert, onTitleUpdate }: { category: Hierarchy, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className=" flex-grow max-w-md my-2 md:my-3 flex py-1 rounded-lg border-b-2 border-neutral-300 dark:border-neutral-700">
            <Input
                className=" text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder="Learning Path Title"
                value={category.title}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <AddHierarchyTooltipButton
                onClick={onCategoryInsert}
                className="mx-2"
            />

        </div>
    )
}