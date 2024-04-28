import { TextBlock, TitleBlock } from './lesson-blocks';

import { useActivePathID } from './ActivePathContext';
import { usePaths } from './PathsContext';
import LessonChain from './LessonChain';

export default function LessonEditor() {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    const introductionBlock = paths[activePathID].lesson['introduction'];
    const objectiveBlock = paths[activePathID].lesson['objective'];
    return (
        <section>
            <div className=' flex items-center justify-center mx-2'>
                <TitleBlock />
            </div>
            <div className='my-8'>
                <div>
                    <TextBlock blockData={introductionBlock} placeholder='Captivating Introduction...' />
                </div>
                <div>
                    <TextBlock blockData={objectiveBlock} placeholder='Concise Objectives...' />
                </div>
                {objectiveBlock.nextBlockID !== null && (
                    <LessonChain block={lesson[objectiveBlock?.nextBlockID]} />
                )}
            </div>
        </section>
    );
};