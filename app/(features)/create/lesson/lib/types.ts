export type ContentTypeProps = 'text' | 'image' | 'code' | 'maths' | 'quiz' | 'text/note' | 'text/deep-dive' | 'text/pitfall' | 'title' | 'text/introduction' | 'text/objective';

export interface LessonContentData {
    id: string;
    contentType: ContentTypeProps;
    value: any;
};

export type LessonData = LessonContentData[];

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
    contentType: ContentTypeProps,
    value: QuizProps,
};

export type CodeBlockProps = {
    id: string,
    contentType: ContentTypeProps,
    value: {
        lang: string,
        code: string,
    },
}