
export type HierarchyData = {
    id: string,
    title: string,
    childIDs: Array<string>,
    parentIDs: Array<string>
};
export type HierarchyTreeData = Record<string, HierarchyData>;

export type HierarchyTreeProps = {
    level: number,
    categoryID: string,
    hierarchies: HierarchyTreeData,
    onSiblingCategoryInsert: (siblingID: string) => void,
    onChildCategoryInsert: (parentID: string) => void,
    onCategoryDelete: (categoryID: string) => void,
    onTitleUpdate: (id: string, title: string) => void
};