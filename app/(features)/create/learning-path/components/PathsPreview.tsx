import { cn } from "@/lib/utils";
import { Path } from "../lib/types";
import { useActivePathID } from "./ActivePathContext";
import { usePaths } from "./PathsContext";

export default function PathsPreview() {
    const paths = usePaths();
    const root = paths["ROOT"];
    const rootChildIDs = root?.childIDs;

    return (
        <div>
            <h1 className="flex justify-center text-xl">{root.title}</h1>

            {rootChildIDs.length > 0 && (
                <ul>
                    {rootChildIDs.map((id) => (
                        <PathsTree key={id} pathID={id} />
                    ))}
                </ul>
            )}
        </div>
    );
}

function PathsTree({ pathID }: { pathID: Path['id'] }) {
    const activePathID = useActivePathID();
    const paths = usePaths();
    const path = paths[pathID];
    return (
        <li className="m-4">
            <p className={cn(activePathID === pathID && "font-medium text-emerald-500")}>{path.title}</p>
            {path.childIDs.length > 0 && (
                <ul className="border-s dark:border-neutral-700 ps-5">
                    {path.childIDs.map((id) => (
                        <PathsTree key={id} pathID={id} />
                    ))}
                </ul>
            )}
        </li>
    )
}