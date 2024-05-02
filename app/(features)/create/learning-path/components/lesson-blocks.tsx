import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useRef, useEffect } from "react";
import { cn } from '@/lib/utils';
import { TextareaProps } from "@/components/ui/textarea";
import { usePaths, usePathsDispatch } from "../../learning-path/components/PathsContext";
import { useActivePathID } from "../../learning-path/components/ActivePathContext";
import { LessonBlock, QuizData } from "../../learning-path/lib/types";
import { AddBlock, CodeLangSelector } from "./editor-tools";
import { Checkbox } from "@/components/ui/checkbox";
import LessonChain from "./LessonChain";

export function Block({ block }: { block: LessonBlock }) {
    switch (block.elementType) {

        case 'text': {
            return (
                <TextBlock blockData={block} placeholder="Text here..." className="w-full px-2 border-none focus:outline-0 focus-visible:outline-0 dark:focus-visible:outline-0" />
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

        case 'quiz': {
            return (
                <div className="m-1 md:m-2 p-1  md:p-4">
                    <QuizBlock block={block} />
                </div>
            )
        }


        default: {
            return null;
        }
    }
}

export function DynamicTextarea({ className, ...props }: TextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Automatically increase the height with content
    useEffect(() => {
        const adjustHeight = () => {
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
            }
        }
        const currentTextarea = textareaRef.current; // Capture the current value

        currentTextarea?.addEventListener('input', adjustHeight);

        //Initial adjustment
        adjustHeight();
        return () => {
            currentTextarea?.removeEventListener('input', adjustHeight); // Use the captured value
        };
    }, []);

    return (
        <Textarea ref={textareaRef}
            className={cn(
                "resize-none overflow-hidden w-full p-4 min-h-16",
                className
            )}
            maxLength={800}
            minLength={1}
            {...props}
        />
    );
}


// A path's `title` data is the Lesson's title.
export function TitleBlock() {
    const dispatch = usePathsDispatch();
    const paths = usePaths();
    const activePathID = useActivePathID();
    return (
        <Input
            autoFocus
            type="text"
            placeholder="Lesson Title"
            value={paths[activePathID].title}
            onChange={(e) => {
                dispatch({
                    type: 'changed_path_title',
                    updatedPath: {
                        ...paths[activePathID],
                        title: e.target.value,
                    }
                });
            }}
        />
    );
}

export function TextBlock({ blockData, placeholder, className }: { blockData: LessonBlock, placeholder: string, className?: string }) {
    const dispatch = usePathsDispatch();
    const activePathID = useActivePathID();
    return (
        <DynamicTextarea
            rows={1}
            className={className}
            placeholder={placeholder}
            name={blockData.id}
            value={blockData.value}
            onChange={(e) => {
                dispatch({
                    'type': 'changed_lesson_block',
                    'activePathID': activePathID,
                    'block': {
                        ...blockData,
                        value: e.target.value,
                    }
                })
            }}
        />
    );
}

/*
* A question can contain text and/or code. // Probably 'maths' in the future
* An option's value can only contain text (for now). 
* An option's feedback can contain 'text' block's `IDs` (for now)
*/
export function QuizBlock({ block }: { block: QuizData }) {
    const activePathID = useActivePathID();
    const paths = usePaths();
    const dispatch = usePathsDispatch();
    const questionIDs = block.value.questionIDs;
    const options = block.value.options;
    return (
        <section>
            <label>Question</label>
            {questionIDs.length > 0 && (
                <LessonChain block={paths[activePathID].lesson[questionIDs[0]]} /> // Loop through the first id.
            )}

            <label>Options</label>
            {options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2 space-y-2">
                    <Checkbox
                        checked={option.isCorrect}
                        onCheckedChange={(checked) => {
                            const updatedOptions = block.value.options.map((choice) => {
                                if (choice.id === option.id) {
                                    return {
                                        ...choice,
                                        isCorrect: checked,
                                    }
                                } else return choice;
                            });
                            dispatch({
                                "type": "changed_lesson_block",
                                "activePathID": activePathID,
                                "block": {
                                    ...block,
                                    value: {
                                        ...block.value,
                                        options: [
                                            ...updatedOptions, // Haha, don't forget to spread
                                        ]
                                    }
                                }
                            });

                        }}
                    />
                    <Input
                        className="w-full md:w-1/2"
                        type="text"
                        placeholder="option..."
                        value={option.value}
                        onChange={(e) => {
                            const updatedOptions = options.map((choice) => {
                                if (choice.id === option.id) {
                                    return {
                                        ...choice,
                                        value: e.target.value
                                    }
                                } else return choice;
                            });
                            dispatch({
                                "type": "changed_lesson_block",
                                "activePathID": activePathID,
                                "block": {
                                    ...block,
                                    value: {
                                        ...block.value,
                                        options: [
                                            ...updatedOptions // Haha.Dont' forget to spread. 
                                        ]
                                    }
                                }
                            });
                        }}
                    />
                </div>
            ))}


        </section>
    );
}