'use client';

import mcqs from '@/app/quiz/mcqs/playMCQs/data.json';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-okaidia.css';

import { useEffect } from 'react';
export default function Page() {
    const aQuiz = mcqs[0];
    const question = aQuiz.question;
    const code = aQuiz.code;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, []);
    return (
        <div>
            <p>{question}</p>
            <pre className="bg-slate-900 text-white p-4 text-sm overflow-x-auto rounded-md"><code className="language-typescript">{code}</code></pre>
            <ul>
                {aQuiz.options.map((option, index) => (
                    <li key={index}>{option.value}</li>
                ))}
            </ul>
        </div >
    );
}