'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import ModeToggle from "./theme-toggler";
import Logo from "./logo";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`w-full z-10 top-0 transition-all ease-in-out duration-300 ${isScrolled ? '-translate-y-full opacity-0' : "translate-y-0 opacity-100"} p-4 shadow-md dark:shadow-neutral-950 shadow-neutral-50`}>
            <div className="container mx-auto flex items-center justify-between my-1">
                <Link href="/" title="Play & learn, Learn & create, Create & learn">
                    <div className="flex items-center justify-center space-x-0 bg-neutral-50 dark:bg-neutral-900 rounded-lg dark:hover:bg-neutral-800 transition duration-300 p-1">
                        {/* Logo */}
                        <Logo />
                        <span className="font-bold">
                            Autodidact
                        </span>
                    </div>
                </Link>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="#" className="">Categories</Link>
                    <Link href="#" className="">About</Link>
                </nav>

                {/* Theme Toggler */}
                <ModeToggle />

                {/* Mobile menu button */}
                <div className="md:hidden text-teal-500 hover:text-teal-300 cursor-pointer" onClick={() => { console.log('Mobile menu clicked') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>

            </div>
        </header>
    )
}