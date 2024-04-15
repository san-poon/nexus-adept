import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="">
            <div className="container text-center border-t dark:border-neutral-700 py-16">
                <p className="text-xs">
                    &copy; 2023 Nexus Adept.
                </p>
                {/* <p className="text-xs mb-2">Play, Learn, Create</p> */}
                {/* Contact Information */}
                <div className="flex justify-center space-x-8 mt-4">
                    <div className="hover:dark:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-full">
                        <a href="mailto:sanjibpoon123@gmail.com">
                            Email
                        </a>
                    </div>
                    <div className="hover:dark:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-full">
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
                    <p className='mt-8 text-xs'> My&nbsp;
                        <Link href="/portfolio" className=" hover:underline">
                            portfolio here.
                        </Link>
                    </p>
                </div>
            </div>

            <p className="text-xs text-right m-2">
                NB: This app is a work in progress.
            </p>
        </footer >
    )
}