export type contentTypeProps = 'text' | 'image' | 'code' | 'maths' | 'quiz' | 'text/note' | 'text/deep-dive' | 'text/pitfall';

export interface LessonContentBlockProps {
    id: string;
    contentType: contentTypeProps;
    value: any;
};

export type LessonContentProps = LessonContentBlockProps[];