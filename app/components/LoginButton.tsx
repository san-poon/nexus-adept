"use client";

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
};

export default function LoginButton({ children, mode = "redirect", asChild }: LoginButtonProps) {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/auth/signin");
    };

    if (mode === 'modal') {
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }
    return (
        <span onClick={handleLoginClick} className=" cursor-pointer">
            {children}
        </span>
    )
}