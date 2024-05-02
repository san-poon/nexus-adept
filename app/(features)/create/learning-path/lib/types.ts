
export type RoadmapTreeProps = {
    level: number,
    pathID: string,
    onPathClick: (id: string) => void,
    activePathID: string,
};

//'maths' is not currently supported due the complexity with user input interface.
export type LessonElements =
    | 'text' | 'image' | 'code' | 'quiz' | 'note'
    | 'deep-dive' | 'pitfall' | 'text/introduction' | 'text/objective';


export interface LessonBlock {
    id: string;
    elementType: LessonElements;
    value: any;
    prevBlockID: string | null; // nullable for the first block
    nextBlockID: string | null; // nullable to indicate the last block
    parentID: string | null;
};

export interface QuizData extends LessonBlock {
    value: {
        questionIDs: Array<string>, // (Default: TextBlock) IDs in lesson blocks: 'text', 'image' & 'code'. ('maths' is not supported)
        options: [
            { id: string, value: string, isCorrect: boolean, feedbackIDs: Array<string> }, // feedbackIDs represent IDs in lesson blocks.
            { id: string, value: string, isCorrect: boolean, feedbackIDs: Array<string> },
            { id: string, value: string, isCorrect: boolean, feedbackIDs: Array<string> },
            { id: string, value: string, isCorrect: boolean, feedbackIDs: Array<string> },
        ],
    }
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

    | { type: 'added_lesson_block'; activePathID: string; topBlockID: LessonBlock["id"]; elementType: LessonElements; }
    | { type: 'deleted_lesson_block'; activePathID: string; blockID: LessonBlock["id"]; }
    | { type: 'changed_lesson_block'; activePathID: string, block: LessonBlock | QuizData };


