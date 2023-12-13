'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import ModeToggle from "./theme-toggler";
import Logo from "./logo";
import { Button } from "./Button";

export default function Header() {
    return (
        <header className={`w-full z-10 top-0 p-4`}>
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
                    <Link href="/quiz/mcqs/create" className="text-neutral-700 dark:text-neutral-300 hover:text-teal-500 dark:hover:text-teal-300 transition duration-300"><Button>Create</Button></Link>
                    <Link href="/quiz/mcqs/play" className="text-neutral-700 dark:text-neutral-300 hover:text-teal-500 dark:hover:text-teal-300 transition duration-300"><Button>Play</Button></Link>
                    <Link href="/portfolio" className="text-neutral-700 dark:text-neutral-300 hover:text-teal-500 dark:hover:text-teal-300 transition duration-300"><Button>Portfolio</Button></Link>
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
        </header >
    )
}