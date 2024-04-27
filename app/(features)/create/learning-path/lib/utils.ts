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