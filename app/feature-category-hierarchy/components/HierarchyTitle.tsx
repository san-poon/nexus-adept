
import { Input } from "@/components/ui/input";
import { HierarchyData } from "../lib/types";
import { AddHierarchyTooltipButton } from "./tootip-buttons";

export default function HierarchyRootTitle({ category, onCategoryInsert, onTitleUpdate }: { category: HierarchyData, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className=" flex-grow max-w-md my-2 md:my-3 flex py-1 rounded-full">
            <Input
                autoFocus
                className=" bg-cyan-200 rounded-full text-base border-none focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 "
                type="text"
                placeholder="Skill Learning Path title (e.g: React.js)"
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