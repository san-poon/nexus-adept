'use client';

import { Button } from "@/app/components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const generateUniqueId = () => {
    return uuidv4();
}

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

export const TextModal = ({ onClose, newContent }: any) => {
    const [inputText, setInputText] = useState('');

    const handleTextInputChange = (e: any) => {
        e.preventDefault();
        setInputText(e.target.value);
    }

    const handleSaveClick = () => {
        onClose({ ...newContent, content: inputText });
    }
    return (
        <Modal onClose={handleSaveClick}>
            <textarea onChange={handleTextInputChange} />
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