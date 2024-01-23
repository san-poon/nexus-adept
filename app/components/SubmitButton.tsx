'use client';

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" aria-disabled={pending}>
            {children}
        </Button>
    )
}