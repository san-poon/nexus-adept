'use client';
import { signOut } from "next-auth/react";
import { CircleUserIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function UserMenu({ isUserSignedin }: { isUserSignedin: boolean }) {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon">
                    <CircleUserIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            {isUserSignedin
                ?
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
                :
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => router.push('/auth/signin')}>Sign In</DropdownMenuItem>
                </DropdownMenuContent>
            }
        </DropdownMenu>
    )
}