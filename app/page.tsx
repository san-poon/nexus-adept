import Link from 'next/link';
export default function Home() {
  return (
    <main className="">
      <div className="grid gap-0 h-screen w-screen lg:grid-cols-5 grid-cols-1">
        <div className="p-4 text-center hidden lg:block">
          Column 1 (Hidden on medium & small screens)
        </div>
        <div className="p-4 text-center lg:col-span-3">
          <div className="flex flex-col m-2">
            <div className="rounded-md my-4 py-4"><Link href="/quiz/mcqs/playMCQs" title="Play Javascript quizzes">Play Quiz</Link></div>
            <div className="rounded-md my-4 py-4"><Link href="/quiz/mcqs/createMCQs title" title="Create quiz, play and learn">Create Quiz</Link></div>
          </div>
        </div>
        <div className="p-4 text-center hidden lg:block">
          Column 3 (Hidden on medium & small screens)
        </div>
      </div>
    </main >
  );
}
