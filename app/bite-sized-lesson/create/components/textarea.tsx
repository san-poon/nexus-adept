import { useRef, useEffect } from "react";

export default function Textarea({ ...rest }) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

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
            <textarea ref={textareaRef}
                className="appearance-none border-none outline-none resize-none overflow-hidden"
                {...rest}
            />
        </>
    )
}