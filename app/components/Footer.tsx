

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="container mx-auto text-center dark:bg-neutral-800 rounded-md p-4 z-50">
                <p className="text-xs">
                    &copy; 2023 PlayLearnForge.
                </p>
                {/* <p className="text-xs mb-2">Play, Learn, Create</p> */}
                {/* Contact Information */}
                <div className="flex justify-center space-x-8 mt-4">
                    <div className="hover:dark:bg-neutral-700 hover:bg-neutral-200 px-1 rounded">
                        <a href="mailto:sanjibpoon123@gmail.com" className="">
                            Email
                        </a>
                    </div>
                    <div className="hover:dark:bg-neutral-700 hover:bg-neutral-200 px-1 rounded">
                        <a
                            href="https://twitter.com/san_poon_2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            Twitter
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                {/* <div className="mt-4 shadow-md">
                    <Link href="/" className="mr-4 hover:text-blue-500 transition duration-300 ease-in-ou">Home</Link>
                    <Link href="#" className="mr-4 hover:text-green-500 transition duration-300 ease-in-ou">Play</Link>
                    <Link href="#" className="mr-4  hover:text-pink-500 transition duration-300 ease-in-ou">Contribute</Link>
                </div> */}

                {/* Legal Information */}
                {/* <div className="mt-4">
                    <Link href="#" className="mr-4 hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                </div> */}

                {/* Acknowledgments */}
                <div className="mt-4">
                    <p className="text-xs">
                        Proudly created by Sanjib(sanjibpoon123@gmail.com), the Autodidact.
                    </p>
                </div>
            </div>
        </footer >
    )
}