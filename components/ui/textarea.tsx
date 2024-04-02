import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full border border-neutral-300 dark:border-neutral-600 rounded-2xl dark:bg-wash-800 placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 focus-visible:outline-wash-150 dark:focus-visible:outline-none dark:focus-visible:outline-1 dark:focus-visible:outline-offset-0 dark:focus-visible:outline-wash-600",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
