
export type RoadmapTreeProps = {
    level: number,
    pathID: string,
};

//'maths' is not currently supported due the complexity with user input interface.
export type elements = 'text' | 'image' | 'code';
export type compositeElements = 'quiz' | 'note' | 'deep-dive' | 'pitfall' | 'recap' | 'challenges';
export type LessonElements = elements | compositeElements;


export interface LessonBlock {
    id: string;
    elementType: LessonElements;
    value: any;
    prevBlockID: string | null; // nullable for the first block
    nextBlockID: string | null; // nullable to indicate the last block
    parentBlockID: string | null;
};

export interface QuizData extends LessonBlock {
    value: {
        questionIDs: Array<string>, // (Default: TextBlock) IDs in lesson blocks: 'text', 'image' & 'code'. ('maths' is not supported)
        options: [
            { id: string, value: string, isCorrect: boolean, feedback: string }, // feedbackIDs represent IDs in lesson blocks.
            { id: string, value: string, isCorrect: boolean, feedback: string },
            { id: string, value: string, isCorrect: boolean, feedback: string },
            { id: string, value: string, isCorrect: boolean, feedback: string },
        ],
        explanationIDs: Array<string>,
    }
}
export interface CompositeBlock extends LessonBlock {
    value: Array<LessonBlock['id']>
}
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

    | { type: 'added_lesson_block'; activePathID: string; topBlockID: LessonBlock["id"]; elementType: LessonElements; imageSrc?: string }
    | { type: 'deleted_lesson_block'; activePathID: string; blockID: LessonBlock["id"]; }
    | { type: 'changed_lesson_block'; activePathID: string, block: LessonBlock | QuizData };


