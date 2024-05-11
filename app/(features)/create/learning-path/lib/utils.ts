export function findAndRemoveElement(arrays: Array<Array<string>>, element: string) {
    for (const array of arrays) {
        const index = array.indexOf(element);
        if (index !== -1) {
            // Mutate the original array
            array.splice(index, 1);
            return;
        }
    }
    // if element not found something is wrong with logic.
}
export function findAndAddElement(arrays: Array<Array<string>>, topBlockID: string, newBlockID: string) {
    for (const array of arrays) {
        const index = array.indexOf(topBlockID);
        if (index !== -1) {
            // Mutate the original array
            return array.splice(index + 1, 0, newBlockID);
        }
    }
    // If topBlockID is not found, something is wrong with this logic
}