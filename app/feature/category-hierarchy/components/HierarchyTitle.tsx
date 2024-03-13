
import { Input } from "@/components/ui/input";
import { HierarchyData } from "../lib/types";
import { AddTooltipButton } from "./tootip-buttons";

export default function HierarchyRootTitle({ category, onCategoryInsert, onTitleUpdate }: { category: HierarchyData, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className=" flex-grow max-w-md my-2 md:my-3 flex py-1 rounded-full">
            <Input
                autoFocus
                className="bg-cyan-100 rounded-full text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder="Skill Title (React:The library for Web User Interfaces)"
                value={category.title}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <AddTooltipButton
                onClick={onCategoryInsert}
                className="mx-2"
            >
                <p>Add Learning Path</p>
            </AddTooltipButton>
        </div>
    )
}