import { LessonBlock } from "../lib/types";
import { useActivePathID } from "./ActivePathContext";
import { usePaths } from "./PathsContext";
import { AddBlock, CodeLangSelector, DeleteBlock } from "./editor-tools";
import { TextBlock } from "./lesson-blocks";


export default function LessonChain({ block }: { block: LessonBlock }) {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    return (
        <div>
            <div className=" relative group/content md:m-2 border border-neutral-300 dark:border-neutral-600  rounded-2xl focus-within:border-neutral-400 dark:focus-within:border-neutral-500">
                <Block block={block} />
                <DeleteBlock blockID={block.id} />
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

function Block({ block }: { block: LessonBlock }) {
    switch (block.elementType) {

        case 'text': {
            return (
                <TextBlock blockData={block} placeholder="A paragraph..." className="w-full px-2 border-none focus:outline-0 focus-visible:outline-0 dark:focus-visible:outline-0" />
            );
        }
        case 'code': {
            return (
                <div>
                    <div className='text-xs flex items-center justify-end opacity-0 transition-opacity duration-300 group-hover/content:opacity-100 my-0'>
                        <CodeLangSelector blockData={block} />
                    </div>
                    <TextBlock blockData={block} placeholder="Paste your code here..." className="w-full px-2 border-none focus:outline-0 focus-visible:outline-0 dark:focus-visible:outline-0" />
                </div>
            );
        }


        default: {
            return null;
        }
    }
}