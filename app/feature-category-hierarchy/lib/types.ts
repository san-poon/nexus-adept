export type Category = {
    id: string;
    title: string;
    childIDs: string[];    // Array of string for child IDs
    parentIDs: string[];   // Array of string for parent IDs
};

export type CategoryTreeProps = {
    level: number,
    categoryID: string,
    categories: Category[],
    onCategoryInsert: (parentID: string, index: number) => void,
    onTitleUpdate: (id: string, title: string) => void
};