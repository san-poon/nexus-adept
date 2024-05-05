import { Input } from "@/components/ui/input";
import { AddButton } from "./tootip-buttons";
import { usePaths, usePathsDispatch } from "./PathsContext";

export default function LearningPathTitle() {
    const paths = usePaths();
    const dispatch = usePathsDispatch();
    const root = paths['ROOT'];
    return (
        <div className="flex items-center">
            <Input
                type="text"
                placeholder="Learning Path Title"
                value={root.title}
                onChange={(e) => {
                    dispatch({
                        type: "changed_path_title",
                        updatedPath: {
                            ...root,
                            title: e.target.value
                        }
                    });
                }}
            />
            <AddButton
                onClick={() => {
                    dispatch({
                        type: 'added_child_path',
                        parentID: root.id,
                    });
                    console.log(paths);
                }}
            >
                <p>Add Chapter or Lesson</p>
            </AddButton>
        </div>
    )
}