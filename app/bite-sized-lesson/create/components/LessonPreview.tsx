import { LessonContentProps } from "../types";
import Markdown, { Components } from 'react-markdown';

const markdownComponents: Components = {
    h1(props) {
        const { node, ...rest } = props;
        return <h1 className="mt-4 text-4xl" {...rest} />
    },
    h2(props) {
        const { node, ...rest } = props;
        return <h2 className="mt-4 text-3xl" {...rest} />
    },
    a(props) {
        const { node, ...rest } = props;
        return <a className="dark:bg-slate-200 p-1 rounded-md dark:text-cyan-950" {...rest} />
    },
    p(props) {
        const { node, ...rest } = props;
        return <p className="mt-3" {...rest} />
    }
}

const defaultLessonContent: LessonContentProps = [
    {
        contentType: "title",
        id: "2e445063-57dc-431e-88ba-8aa78d3bc640",
        value: "Thinking in React",
    },
    {
        id: '7a56ad37-3774-462f-a8f6-cbf0c73b568d',
        contentType: 'text',
        value: "React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called *components*. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React."
    },
    {
        id: '10c41289-3a35-44dc-aff1-90f335ce4fc1',
        contentType: 'text',
        value: "# Heading \n\n This is `code programming with js`.This is a link [CommonMark](https://commonmark.org)\n\n And another text"
    },
];

export default function LessonPreview({ content }: { content: LessonContentProps }) {
    return (
        <div>
            {
                content.map((contentBlock) => (
                    <div key={contentBlock.id}>
                        {contentBlock.contentType === 'title' && (
                            <h1 className="text-4xl">{contentBlock.value}</h1>
                        )}
                        {contentBlock.contentType === 'text' && (
                            <Markdown
                                components={markdownComponents}
                            >
                                {contentBlock.value}
                            </Markdown>
                        )}
                    </div>
                ))
            }
        </div>
    )
}