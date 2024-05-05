import { LessonBlock } from "../lib/types";
import { useActivePathID } from "./ActivePathContext";
import { usePaths } from "./PathsContext";
import { AddBlock, DeleteBlock } from "./editor-tools";
import { Block } from "./editor-blocks";


export default function LessonChain({ block }: { block: LessonBlock }) {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    return (
        <div>
            <div className=" relative group/content md:m-2 border border-neutral-300 dark:border-neutral-600  rounded-2xl focus-within:border-neutral-400 dark:focus-within:border-neutral-400">
                <Block block={block} />
                {block.prevBlockID && (
                    <DeleteBlock blockID={block.id} />
                )}
            </div>
            <div className='flex justify-center items-center opacity-70 md:opacity-25 hover:opacity-100 transition-opacity duration-700'>
                <AddBlock topBlock={block} />
            </div>
            {block?.nextBlockID !== null && (
                <LessonChain block={lesson[block?.nextBlockID]} />
            )}
        </div>
    );
}

