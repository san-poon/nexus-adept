import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code({ code }: { code: string }) {
    if (typeof code !== undefined) {
        return (
            <div
                className={cn(
                    code === undefined || code === "" ? "hidden" : "block"
                )}
                dangerouslySetInnerHTML={{ __html: code }}
            />
        );
    }

}