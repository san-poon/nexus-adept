export type Category = {
    id: string;
    title: string;
    childIDs: string[];    // Array of string for child IDs
    parentIDs: string[];   // Array of string for parent IDs
};
