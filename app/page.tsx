'use client';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <div className="grid gap-0 lg:grid-cols-5 grid-cols-1">
        <div className="p-4 text-center hidden lg:block">
          Column 1 (Hidden on medium & small screens)
        </div>
        <div className="p-4 text-center lg:col-span-3">
          <div className="flex flex-col m-2">
            <div className="rounded-md my-4 py-4"><Link href="/quiz/mcqs/play" title="Play Javascript quizzes">Play Quiz</Link></div>
            <div className="rounded-md my-4 py-4"><Link href="/quiz/mcqs/create" title="Create quiz, play and learn">Create Quiz</Link>
              <br /><br /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est natus repellat reprehenderit mollitia voluptatem cumque minima eligendi expedita laudantium porro dolore, quasi voluptatum amet sit sapiente quam ipsam. Aut.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum laudantium sit nihil perferendis voluptates quae nemo exercitationem nulla, architecto veritatis obcaecati aliquam, expedita iste itaque, velit non corrupti beatae.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam officiis illum nesciunt tenetur dolore cumque ea numquam dolores ullam eveniet reprehenderit labore facere quis. Recusandae tempora accusamus quasi tempore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quidem ullam porro illo minima, eum numquam veniam repellat nihil nesciunt ex dicta tempore odit. Repellat quasi atque nihil nobis animi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit deserunt, nostrum eaque dignissimos id praesentium placeat odio dolores sequi, dolor possimus obcaecati quasi, consequuntur quae ipsa voluptates earum nesciunt?s</p>
              <br /><br /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est natus repellat reprehenderit mollitia voluptatem cumque minima eligendi expedita laudantium porro dolore, quasi voluptatum amet sit sapiente quam ipsam. Aut.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum laudantium sit nihil perferendis voluptates quae nemo exercitationem nulla, architecto veritatis obcaecati aliquam, expedita iste itaque, velit non corrupti beatae.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam officiis illum nesciunt tenetur dolore cumque ea numquam dolores ullam eveniet reprehenderit labore facere quis. Recusandae tempora accusamus quasi tempore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quidem ullam porro illo minima, eum numquam veniam repellat nihil nesciunt ex dicta tempore odit. Repellat quasi atque nihil nobis animi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit deserunt, nostrum eaque dignissimos id praesentium placeat odio dolores sequi, dolor possimus obcaecati quasi, consequuntur quae ipsa voluptates earum nesciunt?s</p>
              <br /><br /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est natus repellat reprehenderit mollitia voluptatem cumque minima eligendi expedita laudantium porro dolore, quasi voluptatum amet sit sapiente quam ipsam. Aut.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum laudantium sit nihil perferendis voluptates quae nemo exercitationem nulla, architecto veritatis obcaecati aliquam, expedita iste itaque, velit non corrupti beatae.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam officiis illum nesciunt tenetur dolore cumque ea numquam dolores ullam eveniet reprehenderit labore facere quis. Recusandae tempora accusamus quasi tempore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quidem ullam porro illo minima, eum numquam veniam repellat nihil nesciunt ex dicta tempore odit. Repellat quasi atque nihil nobis animi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit deserunt, nostrum eaque dignissimos id praesentium placeat odio dolores sequi, dolor possimus obcaecati quasi, consequuntur quae ipsa voluptates earum nesciunt?s</p>
            </div>
          </div>
        </div>
        <div className="p-4 text-center hidden lg:block">
          Column 3 (Hidden on medium & small screens)
        </div>
      </div>
    </main>
  );
}
