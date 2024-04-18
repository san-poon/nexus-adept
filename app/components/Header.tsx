import Link from "next/link";

import ThemeToggler from "./theme-toggler";
import Logo from "../../components/icons/logo";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { MenuIcon } from "@/components/icons/icons";
import LoginButton from "./LoginButton";
import Nav from "./Nav";

export default async function Header() {
    return (
        <header className={`w-full z-50 top-0  border-b dark:border-neutral-700 h-16 sticky bg-[#fff] dark:bg-wash-800`}>
            <div className="container flex items-center justify-between mt-2">
                <Link href="/" title="Opinionated Structured Learning Platform ">
                    <div className="flex items-center justify-center duration-300 p-2 transition-transform hover:scale-105 dark:hover:bg-neutral-900 rounded-full">
                        {/* Logo */}
                        <Logo />
                    </div>
                </Link>

                <Nav />

                <div className="flex">
                    <LoginButton>
                        <Button>
                            Sign In
                        </Button>
                    </LoginButton>
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