'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

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
                    <div className="flex items-center justify-center space-x-0 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition duration-300 p-1">
                        {/* Logo */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-8 w-8"
                        >
                            {/* <!-- Play button icon --> */}
                            <path
                                d="M5 3l14 9-14 9V3z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-500"
                            />
                            {/* <!-- Book icon --> */}
                            <path
                                d="M8 5.999V18a2 2 0 002 2h6a2 2 0 002-2V5.999M8 5.999h0a2 2 0 012-2h6a2 2 0 012 2h0M8 5.999h0a2 2 0 012-2h6a2 2 0 012 2h0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-500"
                            />
                            {/* Paintbrush icon */}
                            <path
                                d="M21 17a2 2 0 01-2 2h-3.879a2 2 0 01-1.414-.586l-4.586-4.586a1 1 0 00-1.414 0l-2.586 2.586a1 1 0 01-1.414 0l-4-4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-purple-500"
                            />
                        </svg>
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