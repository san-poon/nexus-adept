import mcqs from '@/app/lib/data.json';
import PlayMcq from './components/playMcq';
import { fetchMcqs } from '@/app/lib/data';

export default async function Page() {
    const quizzes = await fetchMcqs();
    return (
        <div className='flex justify-center items-center pt-4'>
            <div className="bg-neutral-900 mx-2 my-8 p-6 shadow-lg rounded-lg overflow-auto w-full sm:w-9/12 md:w-9/12">
                <h3 className="text-center my-2">JavaScript Quizzes</h3>
                <PlayMcq mcqs={quizzes} />
            </div>
        </div>
    );
}
