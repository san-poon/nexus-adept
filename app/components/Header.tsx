import Link from "next/link";

import { auth } from '@/auth';

import ThemeToggler from "./theme-toggler";
import Logo from "../../components/icons/logo";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { MenuIcon } from "@/components/icons/icons";
import SigninButton from "./SigninButton";
import Nav from "./Nav";
import UserMenu from './UserMenu';

export default async function Header() {
    const session = await auth();
    const isUserSignedin = session?.user;

    return (
        <header className={`w-full z-50 top-0  border-b dark:border-neutral-700 h-16 sticky bg-[#fff] dark:bg-wash-800`}>
            <div className="container flex items-center justify-between mt-2">
                <Link href="/" title="Master the craft, Together. Contribute and Learn...">
                    <div className="flex items-center justify-center duration-300 p-2 transition-transform hover:scale-105 dark:hover:bg-neutral-900 rounded-full">
                        <Logo />
                    </div>
                </Link>
                <Nav />
                <div className="space-x-2">
                    {!isUserSignedin ? (
                        <SigninButton>
                            Sign In
                        </SigninButton>
                    ) : (
                        <UserMenu />
                    )}
                    <ThemeToggler />
                </div>
            </div>
        </header >
    )
}

function MobileMenu() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>
                    <MenuIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit text-sm leading-loose rounded-xl">
                <div className="flex flex-col">
                    <Link href="/create/lesson" className="">
                        Create a Lesson
                    </Link>
                    <Link href="/learn/quiz/mcqs">
                        Play Js Quiz
                    </Link>
                    <Link href="/create/category-hierarchy">
                        Create Learning Path
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}