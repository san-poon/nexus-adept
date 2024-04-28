import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useRef, useEffect } from "react";
import { cn } from '@/lib/utils';
import { TextareaProps } from "@/components/ui/textarea";
import { PathsProvider, usePaths, usePathsDispatch } from "../../learning-path/components/PathsContext";
import { useActivePathID } from "../../learning-path/components/ActivePathContext";
import { Lesson, LessonBlock } from "../../learning-path/lib/types";

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
        <>
            <Textarea ref={textareaRef}
                className={cn(
                    "resize-none overflow-hidden w-full p-4 min-h-16",
                    className
                )}
                maxLength={800}
                minLength={1}
                {...props}
            />
        </>
    )
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

export function TextBlock({ blockData, placeholder }: { blockData: LessonBlock, placeholder: string }) {
    const dispatch = usePathsDispatch();
    return (
        <DynamicTextarea
            rows={1}
            className=""
            placeholder={placeholder}
            name={blockData.id}
            value={blockData.value}
            onChange={() => {
                dispatch({
                    'type': 'changed_lesson_text_block',
                })
            }}
        />
    )
}