import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddButton, DeleteButton } from "./tootip-buttons";
import { usePathsDispatch } from "./PathsContext";

export default function RoadmapItem({ path, level, onInputClick }: any) {
    const dispatch = usePathsDispatch();
    const maxDepth = 2;
    const canAddChildren = level < maxDepth;
    return (
        <div className={cn(
            "flex rounded-full border border-neutral-300 dark:border-neutral-700",
        )}>
            <DeleteButton
                onClick={() => {
                    dispatch({
                        type: 'deleted_path',
                        pathID: path.id,
                    })
                }}
                className="opacity-30 transition-opacity duration-300 hover:opacity-100"
            />
            <Input
                className=""
                type="text"
                placeholder={`Level ${level}`}
                value={path.title}
                onClick={() => { onInputClick(path.id) }}
                onChange={(e) => {
                    dispatch({
                        type: 'changed_path_title',
                        updatedPath: {
                            ...path,
                            title: e.target.value
                        }
                    });
                }}
            />
            <AddButton
                onClick={() => {
                    dispatch({
                        'type': 'added_child_path',
                        'parentID': path.id,
                    });
                }}
                className={`${canAddChildren ? "block" : "hidden"}`}
            >
                {/* Level 1 is learning-paths, Level 2 can be either lesson or paths within learning-paths. Level 3 must be a lesson */}
                {level === 1 ? <p>Add subchapter or lesson</p> : <p>Add lesson</p>}
            </AddButton>
        </div>

    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0