import Link from "next/link";
import { auth } from '@/auth';
import ThemeToggler from "./theme-toggler";
import Logo from "../../components/logo";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { MenuIcon } from "@/components/icons";
import UserMenu from './UserMenu';

export default async function Header() {
    const session = await auth();
    const user = session?.user;
    let isUserSignedin: boolean;
    if (user) {
        isUserSignedin = true;
    } else isUserSignedin = false;

    return (
        <header className={`w-full z-50 top-0  border-b dark:border-neutral-700 h-16 sticky bg-[#fff] dark:bg-wash-800`}>
            <div className="container flex items-center justify-between mt-2">
                <Link href="/" title="Master the craft, Together. Contribute and Learn...">
                    <div className="flex items-center justify-center duration-300 p-2 transition-transform hover:scale-105 dark:hover:bg-emerald-800 rounded-full">
                        <Logo />
                    </div>
                </Link>
                <Button variant="link">
                    <Link href="/create/learning-path" title="Create from a part of the lesson to whole new learning-path.">
                        Create
                    </Link>
                </Button>
                <Button variant="link">
                    <Link href="/learn/quiz/mcqs" title="Learn JS through playing quizzes">
                        Learn
                    </Link>
                </Button>
                <div className="flex space-x-2">
                    <UserMenu isUserSignedin={isUserSignedin} />
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