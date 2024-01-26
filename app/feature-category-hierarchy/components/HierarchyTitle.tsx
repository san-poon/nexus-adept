
import { Input } from "@/components/ui/input";
import { HierarchyData } from "../lib/types";
import { AddHierarchyTooltipButton } from "./tootip-buttons";

export default function HierarchyRootTitle({ category, onCategoryInsert, onTitleUpdate }: { category: HierarchyData, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className=" flex-grow max-w-md my-2 md:my-3 flex py-1 rounded-lg border-b-2 border-neutral-300 dark:border-neutral-700">
            <Input
                className=" text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder="Learning Path Title(Full-stack with Next.js)"
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