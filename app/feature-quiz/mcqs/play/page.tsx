import { initializeHighlighter } from '@/lib/utils';
import Play from './components/Play';
import mcqs from '@/lib/js-quizzes.json';
import getTransformedQuizzes from './lib/getTransformedQuizzes';
export default async function Page() {
    initializeHighlighter();
    getTransformedQuizzes(mcqs.slice(0, 10));
    const transformedQuizzes: any = await getTransformedQuizzes(mcqs.slice(0, 10));
    return (
        <div className='flex justify-center py-4 min-h-screen'>
            <div className="bg-teal-50 dark:bg-cyan-300/10 rounded-3xl shadow-2xl dark:shadow-none overflow-auto w-full max-w-xl min-h-[94vh]">
                <Play mcqs={transformedQuizzes} />
            </div>
        </div>
    );
}
