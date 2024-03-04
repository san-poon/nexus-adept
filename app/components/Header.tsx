import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { MenuIcon } from "../icons";

export default function Header() {
    return (
        <header className={`w-full z-10 top-0  border-b dark:border-neutral-700 h-16 bg-cyan-50 dark:bg-cyan-800/35`}>
            <div className="container flex items-center justify-between mt-2">
                <Link href="/" title="Opinionated Structured Learning Platform ">
                    <div className="flex items-center justify-center duration-300 p-2 transition-transform hover:scale-105 dark:hover:bg-neutral-900 rounded-full">
                        {/* Logo */}
                        <Logo />
                        <span className=" text-lg">
                            Autodidact
                        </span>
                    </div>
                </Link>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="/feature-category-hierarchy/create"><Button className="dark:hover:bg-neutral-900">Create</Button></Link>
                    <Link href="/feature-quiz/mcqs/play"><Button className="dark:hover:bg-neutral-900">Play</Button></Link>
                    <Link href="/feature-portfolio"><Button className="dark:hover:bg-neutral-900">Portfolio</Button></Link>
                </nav>

                <div className="flex">
                    <ThemeToggler />
                    {/* Mobile menu */}
                    <div
                        className="md:hidden p-0">
                        <PopoverMenu />
                    </div>
                </div>
            </div>
        </header >
    )
}

function PopoverMenu() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>
                    <MenuIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit text-sm leading-loose rounded-xl">
                <div className="flex flex-col">
                    <Link href="/feature-lesson/create" className="active:bg-neutral-500 active:dark:bg-neutral-500 hover:bg-neutral-100 hover:dark:bg-neutral-800 rounded px-2">Create</Link>
                    <Link href="/feature-quiz/mcqs/play" className="active:bg-neutral-500 active:dark:bg-neutral-500 hover:bg-neutral-100 hover:dark:bg-neutral-800 rounded px-2">Play</Link>
                    <Link href="/feature-portfolio" className="active:bg-neutral-500 active:dark:bg-neutral-500 hover:bg-neutral-100 hover:dark:bg-neutral-800 rounded px-2">Portfolio</Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}