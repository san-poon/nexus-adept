import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={cn("h-8 w-8", className)}
        >
            {/* <!-- Play button icon --> */}
            <path
                d="M5 3l14 9-14 9V3z"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
            />
            {/* <!-- Book icon --> */}
            <path
                d="M8 5.999V18a2 2 0 002 2h6a2 2 0 002-2V5.999M8 5.999h0a2 2 0 012-2h6a2 2 0 012 2h0M8 5.999h0a2 2 0 012-2h6a2 2 0 012 2h0"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
            />
            {/* Paintbrush icon */}
            <path
                d="M21 17a2 2 0 01-2 2h-3.879a2 2 0 01-1.414-.586l-4.586-4.586a1 1 0 00-1.414 0l-2.586 2.586a1 1 0 01-1.414 0l-4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
            />
        </svg>
    )
}

// Play icon component
export const PlayIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8"
    >
        <path
            d="M5 3l14 9-14 9V3z"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
        />
    </svg>
);

// Book icon component
export const BookIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8"
    >
        <path
            d="M8 5.999V18a2 2 0 002 2h6a2 2 0 002-2V5.999M8 5.999h0a2 2 0 012-2h6a2 2 0 012 2h0M8 5.999h0a2 2 0 012-2h6a2 2 0 012 2h0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
        />
    </svg>
);

// Paintbrush icon component
export const PaintbrushIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8"
    >
        <path
            d="M21 17a2 2 0 01-2 2h-3.879a2 2 0 01-1.414-.586l-4.586-4.586a1 1 0 00-1.414 0l-2.586 2.586a1 1 0 01-1.414 0l-4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-500"
        />
    </svg>
);