import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddButton, DeleteButton } from "./tootip-buttons";
import { usePaths, usePathsDispatch } from "./PathsContext";
import { useActivePathDispatch } from "./ActivePathContext";

export default function Path({ path, level }: any) {
    const paths = usePaths();
    const pathsDispatch = usePathsDispatch();
    const activePathDispatch = useActivePathDispatch();
    const maxDepth = 2;
    const canAddChildren = level < maxDepth;
    return (
        <div className={cn(
            "flex items-center rounded-full border border-neutral-300 dark:border-neutral-700",
        )}>
            <DeleteButton
                onClick={() => {
                    activePathDispatch({ // We need to change the active path user deletes the path that is currently active.
                        type: "changed_active_path",
                        nextActivePathID: paths['ROOT'].id,
                    });
                    pathsDispatch({
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
                onClick={() => {
                    activePathDispatch({
                        type: "changed_active_path",
                        nextActivePathID: path.id,
                    });
                }}
                onChange={(e) => {
                    pathsDispatch({
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
                    pathsDispatch({
                        'type': 'added_child_path',
                        'parentID': path.id,
                    });
                }}
                className={cn(canAddChildren ? "block" : "hidden",)}
            >
                <p>Add lesson</p>
            </AddButton>
        </div>

    )
}







// To override the fucked up input defaults
// focus-visible:ring-offset-0 ring-offset-0 dark:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0