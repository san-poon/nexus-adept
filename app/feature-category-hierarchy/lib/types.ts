
export type TypeHierarchy = {
    id: string,
    title: string,
    childIDs: Array<string>,
    parentIDs: Array<string>
};
export type TypeHierarchyTree = Record<string, TypeHierarchy>;

export type HierarchyTreeProps = {
    level: number,
    categoryID: string,
    hierarchies: TypeHierarchyTree,
    onSiblingCategoryInsert: (siblingID: string) => void,
    onChildCategoryInsert: (parentID: string) => void,
    onCategoryDelete: (categoryID: string) => void,
    onTitleUpdate: (id: string, title: string) => void
};