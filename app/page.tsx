import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <div className="grid gap-0 h-screen w-screen lg:grid-cols-5 grid-cols-1">
        <div className="bg-neutral-800 p-4 text-center hidden lg:block">
          Column 1 (Hidden on medium & small screens)
        </div>
        <div className="bg-neutral-700 p-4 text-center lg:col-span-3">
          <div className="flex flex-col m-2">
            <div className="rounded bg-violet-800 text-white my-4 py-4"><Link href="/quiz/mcqs/playMCQs">Play Quiz</Link></div>
            <div className="rounded bg-blue-800 text-white my-4 py-4"><Link href="/quiz/mcqs/createMCQs">Create Quiz</Link></div>
          </div>
        </div>
        <div className="bg-neutral-800 p-4 text-center hidden lg:block">
          Column 3 (Hidden on medium & small screens)
        </div>
      </div>
    </main >
  );
}
