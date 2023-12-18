import { Button } from "@/app/components/Button";
import Image from "next/image";

const ContentModal = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex">
                <div className="relative p-4 mx-auto my-8 w-11/12 lg:w-8/12 bg-white dark:bg-neutral-900 rounded-md">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                        <h2 className="text-xl font-semibold">Create a Lesson</h2>
                        <Button onClick={onClose}>
                            x
                        </Button>
                    </div>

                    {/* Content */}
                    <div>
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="absolute bottom-4 right-4">
                        <Button>Save</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const TextModal = ({ isOpen, onClose, onTextareaChange }: any) => {
    return (
        <>
            <ContentModal onClose={onClose} isOpen={isOpen}>
                <textarea onChange={onTextareaChange}>This is a textarea that is going to be lit</textarea>
            </ContentModal>
        </>
    )
}

export const ImageModal = ({ isOpen, onClose, onImageUpload, selectedImage }: any) => {

    return (
        <ContentModal onClose={onClose} isOpen={isOpen}>
            {/* Image Upload Form */}
            <div className="flex flex-col items-center space-y-4">
                {/* Image Preview */}
                {selectedImage && (
                    <Image src={selectedImage} alt="Preview" className="max-w-full max-h-64 object-contain" width={500} height={300} />
                )}

                {/* Image Input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={onImageUpload}
                    className="border p-2"
                />

                {/* Image Size Recommendations */}
                <p className="text-sm text-gray-500">Recommended sizes: Thumbnail, Medium, Large</p>

                {/* Upload Button */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Upload
                </button>
            </div>
        </ContentModal>
    )
}

export default ContentModal;