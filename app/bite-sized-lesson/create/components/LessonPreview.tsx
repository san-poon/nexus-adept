import { LessonContentProps } from "../types";
import Markdown, { Components } from 'react-markdown';
import QuizPreview from "./QuizPreview";
import { Label } from "@/components/ui/label";

const markdownComponents: Components = {
    h2(props) {
        const { node, ...rest } = props;
        return <h2 className="my-4 text-3xl" {...rest} />
    },
    a(props) {
        const { node, ...rest } = props;
        return <a className="dark:bg-slate-200 p-1 rounded-md dark:text-cyan-950" {...rest} />
    },
    p(props) {
        const { node, ...rest } = props;
        return <p className="my-3" {...rest} />
    },
    ol(props) {
        const { node, ...rest } = props;
        return <ol className=" list-decimal px-4" {...rest} />
    },
    code(props) {
        const { node, ...rest } = props;
        return <code className="dark:bg-neutral-800 bg-neutral-100 p-1 rounded-lg" {...rest} />
    },
}

const markdownIntroductionComponents: Components = {
    p(props) {
        const { node, ...rest } = props;
        return <p className="mt-3 text-lg" {...rest} />
    }
}

const markdownObjectiveComponents: Components = {
    ul(props) {
        const { node, ...rest } = props;
        return <ul className=" list-disc px-4" {...rest} />
    }
}

const markdownNoteComponents: Components = {
    ...markdownComponents,
    code(props) {
        const { node, ...rest } = props;
        return <code className="dark:bg-emerald-900/50 bg-emerald-200 p-1 rounded-lg" {...rest} />
    },
}

export default function LessonPreview({ content }: { content: LessonContentProps }) {
    return (
        <div className="flex justify-center leading-loose dark:text-neutral-200">
            <div className=" w-screen lg:w-3/5 m-2 my-10 p-4 rounded border-2 dark:border-neutral-800 overflow-y-auto">
                {
                    content.map((contentBlock) => (
                        <div key={contentBlock.id}>
                            {contentBlock.contentType === 'title' && (
                                <h1 className=" text-4xl font-bold">{contentBlock.value}</h1>
                            )}
                            {contentBlock.contentType === 'text/introduction' && (
                                <div className="my-10">
                                    <Markdown components={markdownIntroductionComponents}>
                                        {contentBlock.value}
                                    </Markdown>
                                </div>
                            )}
                            {contentBlock.contentType === 'text/objective' && (
                                <div className="border-2 dark:border-neutral-800 shadow-md dark:shadow-neutral-800 rounded-3xl ps-10 py-10 mx-1 md:mx-4 my-10 text-neutral-800 dark:text-neutral-200">
                                    <Label className="text-2xl">We will Learn</Label>
                                    <div className="mt-4">
                                        <Markdown components={markdownObjectiveComponents}>
                                            {contentBlock.value}
                                        </Markdown>
                                    </div>
                                </div>
                            )}
                            {contentBlock.contentType === 'text' && (
                                <div className=" my-10 p-4">
                                    <Markdown
                                        components={markdownComponents}
                                    >
                                        {contentBlock.value}
                                    </Markdown>
                                </div>
                            )}
                            {contentBlock.contentType === 'text/note' && (
                                <div className="dark:bg-emerald-950 bg-emerald-100 rounded-3xl py-10 px-4 md:mx-4 my-10">
                                    <Label className="text-2xl">Note</Label>
                                    <div className="mt-4">
                                        <Markdown components={markdownNoteComponents}>
                                            {contentBlock.value}
                                        </Markdown>
                                    </div>
                                </div>
                            )}
                            {contentBlock.contentType === 'quiz' && (
                                <QuizPreview quiz={contentBlock.value} />
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}