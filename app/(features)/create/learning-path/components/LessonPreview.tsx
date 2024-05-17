import Markdown, { Components } from 'react-markdown';
import { useActivePathID } from "./ActivePathContext";
import { usePaths } from "./PathsContext";
import { LessonBlock, QuizData } from '../lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { QuizBlockIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';


export default function LessonPreview() {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    const lessonTitle = paths[activePathID].title;
    const introduction = lesson['INTRODUCTION'];
    const objective = lesson['OBJECTIVE'];
    return (
        <section>
            <h2 className='text-xl text-center'>{lessonTitle}</h2>
            <Markdown components={Introuduction}>
                {introduction.value}
            </Markdown>
            <div className=" bg-wash-50 dark:bg-wash-780 rounded-3xl ps-4 md:ps-10 py-10 mx-1 md:mx-4 my-10 mb-20">
                <h3 className={`text-2xl`}>We will Learn</h3>
                <Markdown components={Objective} className="mt-4">
                    {objective.value}
                </Markdown>
            </div>
            {objective.nextBlockID && (
                <LessonChain block={lesson[objective.nextBlockID]} />
            )}
        </section>
    );
}

function LessonChain({ block }: { block: LessonBlock }) {
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    return (
        <div>
            <Block key={block.id} block={block} />
            {block.nextBlockID && (
                <LessonChain block={lesson[block.nextBlockID]} />
            )}
        </div>
    );
}

function Block({ block }: { block: LessonBlock }) {
    switch (block.elementType) {
        case "text": {
            return (
                <Markdown
                    components={Text}
                >
                    {block.value}
                </Markdown>
            );
        }
        case "image": {
            return (
                <div className='flex justify-center'>
                    <img src={block.value} className=' max-h-[60vh] w-auto' />
                </div>
            );
        }
        // case "code": {

        // }
        case "quiz": {
            return <Quiz block={block} />
        }

        default: {
            return null;
        }
    }
}

function Quiz({ block }: { block: LessonBlock }) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const paths = usePaths();
    const activePathID = useActivePathID();
    const lesson = paths[activePathID].lesson;
    const quiz: QuizData = block;
    const questionIDs = quiz.value.questionIDs;
    const options = quiz.value.options;
    const explanationIDs = quiz.value.explanationIDs;

    const handleOptionClick = (id: string) => {
        setHasSubmitted(false);
        const updatedOptions = selectedOptions?.includes(id)
            ? selectedOptions.filter((optionID) => optionID !== id)
            : [...selectedOptions, id];
        setSelectedOptions(updatedOptions);
    };

    // Check correctness based on 'isCorrect' flag
    const isPlayerCorrect = selectedOptions.every(
        (optionId) => options.find((option) => option.id === optionId)?.isCorrect
    );

    return (
        <Card className=" bg-wash-80 dark:bg-wash-770 rounded-2xl">
            <CardHeader>
                <CardTitle className='flex justify-center'>
                    <span className='pe-2'>Reflect With</span>
                    <QuizBlockIcon />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    {questionIDs.length > 0 && (
                        <LessonChain block={lesson[questionIDs[0]]} />
                    )}
                </div>
                <div className='flex justify-center'>
                    <ul>
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className={cn(
                                    'm-2 md:m-4 md:mx-16 md:w-96 text-center p-2 md:p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer',
                                    selectedOptions.includes(option.id) && "bg-emerald-200 dark:bg-emerald-800"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleOptionClick(option.id)
                                }}
                            >
                                {option.value}
                            </li>
                        ))}
                    </ul>
                </div>
                <CardFooter className='flex-col'>
                    <div className="flex justify-between items-center w-full mt-12">
                        <span className='me-4'>
                            {hasSubmitted && (
                                isPlayerCorrect
                                    ? "Correct!"
                                    : "Try Again!"
                            )}
                        </span>
                        <Button
                            variant="secondary"
                            onClick={() => setHasSubmitted(true)}
                            disabled={selectedOptions.length === 0}
                        >Submit</Button>

                    </div>
                    <Accordion type="single" collapsible className='w-full'>
                        <AccordionItem value="explanation">
                            <AccordionTrigger className=''>
                                Explanation
                            </AccordionTrigger>
                            <AccordionContent>
                                {explanationIDs.length > 0 && (
                                    <LessonChain block={lesson[explanationIDs[0]]} />
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardFooter>
            </CardContent>
        </Card>
    )
}

const Text: Components = {
    h2(props) {
        const { node, ...rest } = props;
        return <h2 className="my-4 text-3xl" {...rest} />
    },
    a(props) {
        const { node, ...rest } = props;
        return <a className=" text-sky-600 dark:text-sky-400 hover:underline decoration-1 decoration hover:underline-offset-4" {...rest} />
    },
    p(props) {
        const { node, ...rest } = props;
        return <p className="my-3" {...rest} />
    },
    ul(props) {
        const { node, ...rest } = props;
        return <ul className=" list-disc px-4" {...rest} />
    },
    ol(props) {
        const { node, ...rest } = props;
        return <ol className=" list-decimal px-4" {...rest} />
    },
    code(props) {
        const { node, ...rest } = props;
        return <code className="dark:bg-neutral-800 bg-neutral-100 p-1 rounded-lg" {...rest} />
    },
}

const Introuduction: Components = {
    ...Text,
    p(props) {
        const { node, ...rest } = props;
        return <p className="mt-3 text-xl" {...rest} />
    }
}

const Objective: Components = {
    ...Text,
    ul(props) {
        const { node, ...rest } = props;
        return <ul className=" list-disc px-4 ms-4" {...rest} />
    }
}
