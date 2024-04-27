export type HierarchyData = {
    id: string,
    title: string,
    childIDs: Array<string>,
    parentIDs: Array<string>,
    content: Lesson,
};
export type HierarchyTreeData = Record<string, HierarchyData>;

export type HierarchyTreeProps = {
    level: number,
    pathID: string,
    hierarchies?: HierarchyTreeData,
    onSiblingCategoryInsert?: (siblingID: string) => void,
    onChildCategoryInsert?: (parentID: string) => void,
    onCategoryDelete?: (categoryID: string) => void,
    onTitleUpdate?: (id: string, title: string) => void,
    onItemClick: (id: string) => void,
    activeRoadmapItem: string[],
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