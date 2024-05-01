export const getImageUrlFromUser = async (): Promise<string> => {
    return new Promise((resolve: (value: string) => void, reject: (reason: string) => void) => {
        const inputElement = document.createElement('input');
        inputElement.type = 'file';
        inputElement.accept = 'image/*';
        inputElement.style.display = "none";
        document.body.appendChild(inputElement);

        inputElement.addEventListener('change', () => {
            const file = inputElement.files?.[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                resolve(imageUrl);
            } else {
                reject('No image selected');
            }
            document.body.removeChild(inputElement);
        });
        inputElement.click();
    });
};

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
    // If topBlockID is not found, something is wrong with the logic
}