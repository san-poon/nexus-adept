import Link from "next/link";
import Logo from "../../components/icons/logo";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative py-16 min-h-screen">
            <div className="container mx-auto text-center">
                <figure className="flex items-center justify-center duration-300 p-2 transition-transform hover:scale-105 rounded-full">
                    {/* Logo */}
                    <Logo className="h-16 w-16" />
                </figure>
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                    Nexus Adept
                </h1>
                <p className="text-xl mb-8 opacity-80">
                    Master the craft, Together. Contribute and Learn...
                </p>

                <div className="my-12 grid grid-rows-3 place-items-center">
                    {/* <Link href="/feature-quiz/mcqs/create" title="Create quizz">
                        <Button className="mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-700">
                            Create Quiz
                        </Button>
                    </Link> */}
                    <Link href="/create/lesson" title="Create Lesson">
                        <Button className=" text-base mt-4 dark:hover:bg-neutral-900">
                            Create Lesson
                        </Button>
                    </Link>
                    <Link href="/create/learning-path" title="Structured Learning Path Editor">
                        <Button className="text-base mt-4 dark:hover:bg-neutral-900">
                            Create Learning Path
                        </Button>
                    </Link>
                    <Link href="/learn/quiz/mcqs/" title="Play Javascript quizzes">
                        <Button className="text-base mt-4 dark:hover:bg-neutral-900">
                            Learn JS through Quizzes
                        </Button>
                    </Link>
                </div>

                <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">
                    Start your journey to Adept.
                </h1>
                <p className="text-lg mb-8 opacity-80">
                    Hone your skills with curated learning path; designed through collaboration.
                </p>
                <Link href="/auth/signin">
                    <Button variant="secondary" className="w-60 h-12">
                        Sign In
                    </Button>
                </Link>
            </div>
        </section>
    );
};

