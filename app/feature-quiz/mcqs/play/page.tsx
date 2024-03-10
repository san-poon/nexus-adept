import mcqs from '@/app/lib/data.json';
import Play from './components/Play';

import { codeToHtml } from '@/lib/utils';
// import { fetchMcqs } from '@/app/lib/data';

// import { QuizData } from '@/app/lib/definitions';

export default async function Page() {
    // const quizzes = await fetchMcqs();

    const transformedQuizzes = await Promise.all(
        mcqs.map(async (quiz) => ({
            ...quiz,
            code: await codeToHtml({ code: quiz.code, lang: 'js' })
        }))
    );

    return (
        <div className='flex justify-center py-4 min-h-screen'>
            <div className="bg-teal-50 dark:bg-cyan-300/10 rounded-3xl shadow-2xl dark:shadow-none overflow-auto w-full max-w-xl min-h-[94vh]">
                <Play mcqs={transformedQuizzes} />
            </div>
        </div>
    );
}
