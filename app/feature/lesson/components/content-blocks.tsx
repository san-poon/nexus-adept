import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
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
                    "border-2 dark:border-wash-900 rounded-2xl appearance-none outline-none focus:outline-none hover:outline-none resize-none overflow-hidden dark:bg-inherit",
                    className
                )}
                maxLength={800}
                minLength={1}
                {...props}
            />
        </>
    )
}


export function TitleInputBlock({ content, onTitleChange }: any) {
    return (
        <>
            {/* Lesson Title input */}
            <Input
                autoFocus
                type="text"
                placeholder="Lesson Title"
                value={content.value}
                className="dark:bg-wash-900 border-2 dark:border-none rounded-full text-base focus-visible:ring-offset-0 dark:focus-visible:ring-0 focus-visible:ring-0 p-2 ps-4"
                onChange={(e) => onTitleChange({ ...content, value: e.target.value })}
            />
        </>
    );
}