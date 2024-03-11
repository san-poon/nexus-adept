import mcqs from '@/lib/js-quizzes.json';
import Play from './components/Play';

export default async function Page() {
    return (
        <div className='flex justify-center py-4 min-h-screen'>
            <div className="bg-teal-50 dark:bg-cyan-300/10 rounded-3xl shadow-2xl dark:shadow-none overflow-auto w-full max-w-xl min-h-[94vh]">
                <Play mcqs={mcqs} />
            </div>
        </div>
    );
}
