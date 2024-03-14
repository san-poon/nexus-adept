import { cn } from '@/lib/utils';

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