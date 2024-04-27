
export type RoadmapTreeProps = {
    level: number,
    pathID: string,
    onPathClick: (id: string) => void,
    activePathID: string,
};

export type LessonElements = 'text' | 'image' | 'code' | 'maths' | 'quiz' | 'text/note' | 'text/deep-dive' | 'text/pitfall' | 'title' | 'text/introduction' | 'text/objective';
export interface LessonBlock {
    id: string;
    elementType: LessonElements;
    value: any;
    prevBlockID: string | null; // nullable for the first block
    nextBlockID: string | null; // nullable to indicate the last block
};
export type Lesson = Record<string, LessonBlock>;
export type Lessons = Record<string, Lesson>;

export type Path = {
    id: string,
    title: string,
    childIDs: Array<string>,
    parentIDs: Array<string>,
};
export type Paths = Record<string, Path>;









export type AnOptionProps = {
    id: string,
    value: string,
    isCorrect: boolean
};

export type OptionsProps = AnOptionProps[];
export type QuizProps = {
    question: string,
    options: OptionsProps,
    explanation: string,
};
export type QuizBlockProps = {
    id: string,
    contentType: LessonElements,
    value: QuizProps,
};

export type CodeBlockProps = {
    id: string,
    contentType: LessonElements,
    value: {
        lang: string,
        code: string,
    },
}