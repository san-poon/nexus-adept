import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="container mx-auto text-center dark:bg-neutral-800 rounded-md p-4">
                <p className="text-sm">
                    &copy; 2023 Autodidact Co. All rights reserved.
                </p>
                <p className="text-xs mb-2">Play, Learn, Create</p>
                {/* Contact Information */}
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:underline">
                        Email Us
                    </a>
                    <a
                        href="twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Twitter
                    </a>
                </div>

                {/* Quick Links */}
                <div className="mt-4 shadow-md">
                    <Link href="/" className="mr-4 hover:text-blue-500 transition duration-300 ease-in-ou">Home</Link>
                    <Link href="#" className="mr-4 hover:text-green-500 transition duration-300 ease-in-ou">Play</Link>
                    <Link href="#" className="mr-4  hover:text-pink-500 transition duration-300 ease-in-ou">Contribute</Link>
                </div>

                {/* Legal Information */}
                <div className="mt-4">
                    <Link href="#" className="mr-4 hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                </div>

                {/* Acknowledgments */}
                <div className="mt-4">
                    <p className="text-xs">
                        Proudly built by Autodidact community. Thanks to our contributors!
                    </p>
                </div>
            </div>
        </footer >
    )
}