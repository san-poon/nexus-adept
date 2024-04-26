export type HierarchyData = {
    id: string,
    title: string,
    childIDs: Array<string>,
    parentIDs: Array<string>,
    content: LessonContents,
};
export type HierarchyTreeData = Record<string, HierarchyData>;

export type HierarchyTreeProps = {
    level: number,
    categoryID: string,
    hierarchies: HierarchyTreeData,
    onSiblingCategoryInsert: (siblingID: string) => void,
    onChildCategoryInsert: (parentID: string) => void,
    onCategoryDelete: (categoryID: string) => void,
    onTitleUpdate: (id: string, title: string) => void,
    onItemClick: (id: string) => void,
    activeRoadmapItem: string[],
};

export type ContentItems = 'text' | 'image' | 'code' | 'maths' | 'quiz' | 'text/note' | 'text/deep-dive' | 'text/pitfall' | 'title' | 'text/introduction' | 'text/objective';

export interface LessonData {
    id: string;
    contentType: ContentItems;
    value: any;
};

export type LessonContents = LessonData[];

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
    contentType: ContentItems,
    value: QuizProps,
};

export type CodeBlockProps = {
    id: string,
    contentType: ContentItems,
    value: {
        lang: string,
        code: string,
    },
}