import Link from 'next/link';
export default function Home() {
  return (
    <main className="mt-16">
      <div className="grid gap-0 h-screen w-screen lg:grid-cols-5 grid-cols-1">
        <div className="dark:bg-slate-600 p-4 text-center hidden lg:block">
          Column 1 (Hidden on medium & small screens)
        </div>
        <div className="dark:bg-slate-700 p-4 text-center lg:col-span-3">
          <div className="flex flex-col m-2">
            <div className="rounded-md bg-slate-800 text-white my-4 py-4"><Link href="/quiz/mcqs/playMCQs">Play Quiz</Link></div>
            <div className="rounded-md bg-slate-800 text-white my-4 py-4"><Link href="/quiz/mcqs/createMCQs">Create Quiz</Link></div>
          </div>
        </div>
        <div className="dark:bg-slate-600 p-4 text-center hidden lg:block">
          Column 3 (Hidden on medium & small screens)
        </div>
      </div>
    </main >
  );
}
