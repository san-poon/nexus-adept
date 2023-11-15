import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 shadow-md dark:shadow-neutral-950 shadow-neutral-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="font-bold">
                    Autodidact
                </div>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="#" className="">Home</Link>
                    <Link href="#" className="">Categories</Link>
                    <Link href="#" className="">About</Link>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">

                </div>

            </div>
        </header>
    )
}