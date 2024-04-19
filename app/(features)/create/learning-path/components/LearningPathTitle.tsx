
import { Input } from "@/components/ui/input";
import { HierarchyData } from "../lib/types";
import { AddTooltipButton } from "./tootip-buttons";

export default function LearningPathTitle({ category, onCategoryInsert, onTitleUpdate }: { category: HierarchyData, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className=" flex-grow max-w-md my-2 md:my-3 flex py-1 rounded-full">
            <Input
                autoFocus
                type="text"
                placeholder="Learning Path Title"
                value={category.title}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <AddTooltipButton
                onClick={onCategoryInsert}
                className="mx-2"
            >
                <p>Add Path</p>
            </AddTooltipButton>
        </div>
    )
}