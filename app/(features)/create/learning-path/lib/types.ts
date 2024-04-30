
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
    lesson: Lesson, // Anything either exercise or guide is a lesson, for it teaches us.
};
export type Paths = Record<string, Path>;


export type PathsAction =
    | { type: "added_child_path"; parentID: Path["id"] }
    | { type: "added_sibling_path"; siblingID: Path["id"] }
    | { type: "changed_path_title"; updatedPath: Path }
    | { type: 'deleted_path'; pathID: Path["id"] }

    | { type: 'added_lesson_block'; activePathID: string; topBlockID: LessonBlock["id"]; elementType: LessonElements; }
    | { type: 'deleted_lesson_block'; activePathID: string; blockID: LessonBlock["id"]; }
    | { type: 'changed_lesson_text_block'; activePathID: string, block: LessonBlock }
    | { type: 'changed_lesson_code_block'; activePathID: string }
    | { type: 'changed_lesson_mcqs_block'; activePathID: string };






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