import Image from "next/image";
import Link from "next/link";
import logo from '@/app/images/logo.png';
import { Button } from "@/app/components/Button";

const HeroComponent = () => {
    return (
        <section className="bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-700 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 text-white py-16">
            <div className="container mx-auto text-center">
                {/* Logo Image */}
                <Image src={logo} alt="Play, Learn & Forge logo" className="mx-auto w-16 h-16 mb-4 rounded-full" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Forge Your Knowledge, Play Your Way!
                </h1>
                <p className="text-lg mb-8">
                    Welcome to the vibrant town square of learning and creation.
                </p>
                <div className="flex flex-col items-center mb-4">
                    <Link href="/quiz/mcqs/create" title="Create quizz">
                        <Button className="hover:text-black dark:hover:text-white dark:hover:bg-neutral-700">
                            Create Quiz
                        </Button>
                    </Link>
                    <Link href="/bite-sized-lesson/create" title="Create course lesson and get paid">
                        <Button className=" mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-700">
                            Create Lesson
                        </Button>
                    </Link>
                    <Link href="/quiz/mcqs/play" title="Play Javascript quizzes">
                        <Button className="mt-4 hover:text-black dark:hover:text-white dark:hover:bg-neutral-700">Play</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;
