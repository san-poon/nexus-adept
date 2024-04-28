import { LessonBlock } from "../lib/types";
import { useActivePathID } from "./ActivePathContext";
import { usePaths } from "./PathsContext";
import { TextBlock } from "./lesson-blocks";


export default function LessonChain({ block }: { block: LessonBlock }) {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    return (
        <div>
            <Block block={block} />
            {block?.nextBlockID !== null && (
                <LessonChain block={lesson[block?.nextBlockID]} />
            )}
        </div>
    );
}

function Block({ block }: { block: LessonBlock }) {
    switch (block.elementType) {
        case 'text': {
            return (
                <TextBlock blockData={block} placeholder="A paragraph..." />
            );
        }
        default: {
            return null;
        }
    }
}