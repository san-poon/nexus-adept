import Image from "next/image";
import profilePic from '@/app/images/sanjib-pp-1178.png';

// Hero Section Component
export default function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-500 p-8 rounded-md shadow-lg">
            <div className="relative h-40 w-40 mb-4 mx-auto overflow-hidden rounded-full">
                <Image
                    src={profilePic}
                    alt="Sanjib Poon's Profile"
                    className="rounded-full"
                />
            </div>
            <h1 className="text-3xl font-bold text-white dark:text-gray-800 mb-2">Sanjib Poon</h1>
            <p className="text-gray-300 dark:text-gray-600">Embarking on a coding odyssey in the town of PlayLearnForge.</p>
        </div>
    );
}
