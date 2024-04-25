
import { Input } from "@/components/ui/input";
import { HierarchyData } from "../lib/types";
import { AddButton } from "./tootip-buttons";

export default function LearningPathTitle({ category, onCategoryInsert, onTitleUpdate }: { category: HierarchyData, onCategoryInsert: any, onTitleUpdate: any }) {
    return (
        <div className="flex">
            <Input
                className="md:min-w-80"
                autoFocus
                type="text"
                placeholder="Learning Path Title"
                value={category.title}
                onChange={(e) => { onTitleUpdate(category.id, e.target.value) }}
            />
            <AddButton
                onClick={onCategoryInsert}
                className="mx-2"
            >
                <p>Add Chapter or Lesson</p>
            </AddButton>
        </div>
    )
}