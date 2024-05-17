import { usePaths } from "./PathsContext";
import { PathTitle } from "./editor-blocks";
import PathsTree from "./PathsTree";

export default function PathsEdtior() {
    const paths = usePaths();
    const root = paths["ROOT"];
    const rootChildIDs = root?.childIDs;
    return (
        <>
            <div className="flex justify-center">
                <PathTitle />
            </div>
            <div className="flex justify-center">
                <ul >
                    {rootChildIDs.length > 0 && rootChildIDs.map((id: string) => (
                        <PathsTree
                            key={id}
                            pathID={id}
                            level={1}
                        />
                    ))}
                </ul>
            </div>

        </>
    )
}