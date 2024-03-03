import Image from "next/image";
import Link from "next/link";
import logo from '@/app/images/logo.png';
import { Button } from "@/components/ui/button";

const HeroComponent = () => {
    return (
        <section className="relative dark:text-white py-16 h-screen">
            <div className="container mx-auto text-center">
                {/* Logo Image */}
                <Image src={logo} alt="Play, Learn & Forge logo" className="mx-auto w-16 h-16 mb-4 rounded-full" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Forge Your Knowledge, Play Your Way!
                </h1>
                <p className="text-lg mb-8 opacity-80">
                    Welcome to the vibrant town square of learning and creation.
                </p>
                <div className=" mt-4 md:mt-24 grid grid-rows-3 place-items-center">
                    {/* <Link href="/feature-quiz/mcqs/create" title="Create quizz">
                        <Button className="mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-700">
                            Create Quiz
                        </Button>
                    </Link> */}
                    <Link href="/feature-lesson/create" title="Choose a learning path, create lesson">
                        <Button className="text-lg mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-900">
                            Create Lesson
                        </Button>
                    </Link>
                    <Link href="/feature-category-hierarchy/create" title="Structured Learning Path Editor">
                        <Button className="text-lg mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-900">
                            Create Learning Path
                        </Button>
                    </Link>
                    <Link href="/feature-quiz/mcqs/play" title="Play Javascript quizzes">
                        <Button className="text-lg mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-900">
                            Play JavaScript Quizzes
                        </Button>
                    </Link>
                </div>
            </div>
            <p className="text-xs absolute bottom-2 left-1/2 transform -translate-x-1/2">
                NB: This app is a work in progress.
            </p>
        </section>
    );
};

export default HeroComponent;
