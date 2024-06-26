import { LessonData } from "../lib/types";
import Markdown, { Components } from 'react-markdown';
import QuizPreview from "./QuizPreview";
import { Label } from "@/components/ui/label";
import { NoteIcon, PitfallIcon } from "@/components/icons";
// import CodePreview from "./CodePreview";

const markdownComponents: Components = {
    h2(props) {
        const { node, ...rest } = props;
        return <h2 className="my-4 text-3xl" {...rest} />
    },
    a(props) {
        const { node, ...rest } = props;
        return <a className=" text-sky-600 dark:text-sky-400 hover:underline decoration-1 decoration hover:underline-offset-4" {...rest} />
    },
    p(props) {
        const { node, ...rest } = props;
        return <p className="my-3" {...rest} />
    },
    ul(props) {
        const { node, ...rest } = props;
        return <ul className=" list-disc px-4" {...rest} />
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
    ...markdownComponents,
    p(props) {
        const { node, ...rest } = props;
        return <p className="mt-3 text-xl" {...rest} />
    }
}

const markdownObjectiveComponents: Components = {
    ...markdownComponents,
    ul(props) {
        const { node, ...rest } = props;
        return <ul className=" list-disc px-4 ms-4" {...rest} />
    }
}

const markdownNoteComponents: Components = {
    ...markdownComponents,
    code(props) {
        const { node, ...rest } = props;
        return <code className="dark:bg-emerald-900/50 bg-emerald-200 p-1 rounded-lg" {...rest} />
    },
}
const markdownPitfallComponents: Components = {
    ...markdownComponents,
    code(props) {
        const { node, ...rest } = props;
        return <code className="dark:bg-amber-900/50 bg-amber-200 p-1 rounded-lg" {...rest} />
    },

}

export default function LessonPreview({ content }: { content: LessonData }) {
    return (
        <div className={` flex justify-center leading-loose dark:text-neutral-100`}>
            <div className=" w-screen lg:w-3/5 m-2 my-10 p-4 overflow-y-auto">
                {
                    content.map((contentBlock) => (
                        <div key={contentBlock.id}>
                            {contentBlock.contentType === 'title' && (
                                <h1 className={` text-4xl text-center`}>{contentBlock.value}</h1>
                            )}
                            {contentBlock.contentType === 'text/introduction' && (
                                <div className="my-10">
                                    <Markdown components={markdownIntroductionComponents}>
                                        {contentBlock.value}
                                    </Markdown>
                                </div>
                            )}
                            {contentBlock.contentType === 'text/objective' && (
                                <div className=" bg-teal-50 dark:bg-teal-800/50 shadow-2xl rounded-3xl ps-4 md:ps-10 py-10 mx-1 md:mx-4 my-10 text-neutral-800 dark:text-neutral-200 mb-20">
                                    <Label className={`text-2xl`}>We will Learn</Label>
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
                                    <div className="flex items-center">
                                        <NoteIcon />
                                        <Label className="text-2xl ms-4">Note</Label>
                                    </div>
                                    <div className="mt-4">
                                        <Markdown components={markdownNoteComponents}>
                                            {contentBlock.value}
                                        </Markdown>
                                    </div>
                                </div>
                            )}
                            {contentBlock.contentType === 'text/pitfall' && (
                                <div className="dark:bg-amber-950/75 bg-amber-100 rounded-3xl py-10 px-4 md:mx-4 my-10">
                                    <div className="flex items-center">
                                        <PitfallIcon />
                                        <Label className="text-2xl ms-4">Pitfall</Label>
                                    </div>
                                    <div className="mt-4">
                                        <Markdown components={markdownPitfallComponents}>
                                            {contentBlock.value}
                                        </Markdown>
                                    </div>
                                </div>
                            )}
                            {contentBlock.contentType === 'quiz' && (
                                <QuizPreview quiz={contentBlock.value} />
                            )}
                            {/* {contentBlock.contentType === 'code' && (
                                <CodePreview codeBlock={contentBlock} />
                            )} */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}