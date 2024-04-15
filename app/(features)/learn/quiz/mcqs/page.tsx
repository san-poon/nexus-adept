import { getShikiHighlighter } from '@/lib/utils';
import Play from '../components/Play';
import mcqs from '@/lib/js-quizzes.json';
import getTransformedQuizzes from '../lib/getTransformedQuizzes';
export default async function Page() {
    getShikiHighlighter(); // Cache the highlighter
    getTransformedQuizzes(mcqs.slice(0, 20)); // Cache the already transformed quizzes.
    const transformedQuizzes: any = await getTransformedQuizzes(mcqs.slice(0, 20));
    return (
        <div className='flex justify-center py-4 min-h-screen'>
            <div className="bg-wash-50 dark:bg-wash-770 rounded-3xl shadow-2xl dark:shadow-none overflow-auto w-full max-w-xl min-h-[94vh]">
                <Play mcqs={transformedQuizzes} />
            </div>
        </div>
    );
}
