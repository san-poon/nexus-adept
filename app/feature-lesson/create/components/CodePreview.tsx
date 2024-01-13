import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlockProps } from '../types';

export default function CodePreview({ codeBlock }: { codeBlock: CodeBlockProps }) {
    const codeString = codeBlock.value.code;
    return (
        <SyntaxHighlighter
            language={codeBlock.value.lang}
            style={a11yDark}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}