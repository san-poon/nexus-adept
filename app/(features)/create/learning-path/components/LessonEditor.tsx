import { TextBlock, TitleBlock } from './lesson-blocks';

import { useActivePathID } from './ActivePathContext';
import { usePaths } from './PathsContext';
import LessonChain from './LessonChain';
import { AddBlock } from './editor-tools';

export default function LessonEditor() {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    const introductionBlock = lesson['introduction'];
    const objectiveBlock = lesson['objective'];
    return (
        <section>
            <div className=' flex items-center justify-center mx-2'>
                <TitleBlock />
            </div>
            <div className='my-8'>
                <div>
                    <TextBlock blockData={introductionBlock} placeholder='Captivating Introduction...' />
                    <TextBlock blockData={objectiveBlock} placeholder='Concise Objectives...' />
                    <div className='flex justify-center items-center opacity-70 md:opacity-25 hover:opacity-100 transition-opacity duration-700'>
                        <AddBlock topBlock={objectiveBlock} />
                    </div>
                </div>
                {objectiveBlock.nextBlockID !== null && (
                    <LessonChain block={lesson[objectiveBlock.nextBlockID]} />
                )}
            </div>
        </section>
    );
};