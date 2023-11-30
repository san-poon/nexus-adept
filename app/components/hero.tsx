import Image from "next/image";
import Link from "next/link";
import logo from '@/app/images/logo.png';
import { Button } from '@/app/components/Button'
const HeroComponent = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
            <div className="container mx-auto text-center">
                {/* Logo Image */}
                <Image src={logo} alt="Play, Learn & Forge logo" className="mx-auto w-16 h-16 mb-4" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Forge Your Knowledge, Play Your Way!
                </h1>
                <p className="text-lg mb-8">
                    Welcome to the vibrant town square of learning and creation.
                </p>
                <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition duration-300">
                    Start Your Journey
                </button>
                <div className="flex flex-col m-2 items-center">
                    <Link href="/quiz/mcqs/play" title="Play Javascript quizzes"><Button>Play Quiz</Button></Link>
                    <Link href="/quiz/mcqs/create" title="Create quiz, play and learn">Create Quiz</Link>
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;
