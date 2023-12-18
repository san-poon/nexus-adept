import { Button } from "@/app/components/Button";

const Modal = ({ onClose, children }: any) => {
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

export const TextModal = ({ onClose }: any) => {
    return (
        <Modal onClose={onClose}>
            <textarea />
        </Modal>
    )
}

export const ImageModal = ({ onClose }: any) => {
    return (
        <Modal onClose={onClose}>
            <h3>This is where Image input will be implemented</h3>
        </Modal>
    )
}