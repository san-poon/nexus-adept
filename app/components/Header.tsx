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
        <header className={`w-full z-10 top-0 md:p-4  border-b-2 dark:border-neutral-800`}>
            <div className="container mx-auto flex items-center justify-between my-1">
                <Link href="/" title="Play & learn, Learn & create, Create & learn">
                    <div className="flex items-center justify-center space-x-0 bg-neutral-50 dark:bg-neutral-900 rounded-lg dark:hover:bg-neutral-800 duration-300 p-1 transition-transform hover:scale-105">
                        {/* Logo */}
                        <Logo />
                        <span className="font-bold">
                            Autodidact
                        </span>
                    </div>
                </Link>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="/feature-lesson/create"><Button>Create</Button></Link>
                    <Link href="/feature-quiz/mcqs/play"><Button>Play</Button></Link>
                    <Link href="/feature-portfolio"><Button>Portfolio</Button></Link>
                </nav>

                {/* Theme Toggler */}
                <ThemeToggler />

                {/* Mobile menu button */}
                <div
                    className="md:hidden p-0">
                    <PopoverMenu />
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