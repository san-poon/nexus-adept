import { Textarea } from "@/components/ui/textarea";
import { useRef, useEffect } from "react";
import { cn } from '@/lib/utils';
import { TextareaProps } from "@/components/ui/textarea";
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
                    "appearance-none border-none outline-none focus:outline-none hover:outline-none resize-none overflow-hidden",
                    className
                )}
                maxLength={700}
                minLength={1}
                {...props}
            />
        </>
    )
}


export function TitleInput({ content, onTitleChange }: any) {
    return (
        <>
            {/* Lesson Title input */}
            <input
                type="text"
                placeholder="Lesson Title"
                value={content.value}
                className="w-full p-4 my-4 outline-none rounded-lg border-2 dark:border-neutral-700 border-neutral-200 bg-inherit"
                onChange={(e) => onTitleChange({ ...content, value: e.target.value })}
            />
        </>
    );
}