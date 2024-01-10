
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeInputBlock() {
    const codeString = ' (num) => num + 1';
    return (
        <SyntaxHighlighter language="javascript" style={a11yDark}>
            {codeString}
        </SyntaxHighlighter>
    );
}