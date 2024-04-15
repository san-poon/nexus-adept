import Image from "next/image";
import profilePic from '@/public/sanjib-pp-1178.png';

// Hero Section Component
export default function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-wash-800 to-wash-600 dark:from-wash-600 dark:to-wash-800 p-8 shadow-lg">
            <div className="relative h-40 w-40 mb-4 mx-auto overflow-hidden rounded-full">
                <Image
                    src={profilePic}
                    alt="Sanjib Poon's Profile"
                    className="rounded-full"
                />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-neutral-200">Sanjib Poon</h1>
            <p className="text-gray-300 dark:text-neutral-300">Embarking on a coding odyssey in the town of PlayLearnForge.</p>
        </div>
    );
}
