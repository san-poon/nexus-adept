
export type Hierarchy = {
    id: string,
    title: string,
    childIDs: string[],
    parentIDs: string[]
};

export type HierarchyTreeProps = {
    level: number,
    categoryID: string,
    hierarchies: Record<string, Hierarchy>,
    onSiblingCategoryInsert: (siblingID: string) => void,
    onChildCategoryInsert: (parentID: string) => void,
    onTitleUpdate: (id: string, title: string) => void
};