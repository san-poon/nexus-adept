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

export function LessonPreviewButton() {

}

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