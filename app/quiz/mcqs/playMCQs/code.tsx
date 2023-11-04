'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-okaidia.css';

export default function Code({ code }) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, [code]);

    return (
        <pre className="bg-slate-900 text-white p-4 text-sm rounded-md">
            <code className="language-typescript">
                {code}
            </code>
        </pre>
    )
}