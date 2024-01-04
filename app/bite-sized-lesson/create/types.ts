export type ContentTypeProps = 'text' | 'image' | 'code' | 'maths' | 'quiz' | 'text/note' | 'text/deep-dive' | 'text/pitfall';

export interface LessonContentBlockProps {
    id: string;
    contentType: ContentTypeProps;
    value: any;
};

export type LessonContentProps = LessonContentBlockProps[];