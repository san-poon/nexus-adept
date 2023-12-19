'use client';
import { useState } from 'react';
import { TextModalButton, ImageModalButton, QuizModalButton, CodeSandboxModalButton } from './components/modal-buttons';
import { TitleInput } from './components/lesson-title';
import { ImageModal, TextModal } from './content-modal';
import { v4 as uuidv4 } from 'uuid';

const generateUniqueId = () => {
    return uuidv4();
}

const CreatePage = () => {
    const [lessonContent, setLessonContent] = useState([
        {
            id: 0,
            contentType: '',
            content: ''
        }
    ]);

    const [activeModal, setActiveModal] = useState(null);
    const [lessonTitle, setLessonTitle] = useState('');

    // Function to handle button click to set the active modal
    const handleModalButtonClick = (modalType: any) => {
        setActiveModal(modalType);
    }
    // Function to close the active modal and save the user input through new creatio/update
    const closeModal = (updatedContent: any) => {
        // Save user input first
        setLessonContent([
            ...lessonContent,
            updatedContent
        ]);
        // Close the modal
        setActiveModal(null);
    }

    // function to handle changes in lesson title
    const handleTitleChange = (event: any) => {
        event.preventDefault();
        setLessonTitle(event.target.value);
    }

    const newTextContent = {
        id: generateUniqueId(),
        type: 'text',
        content: ''
    };

    return (
        <>
            <div className="md:w-2/3 mx-auto p-4">
                {/* Title Input */}
                <TitleInput title={lessonTitle} onTitleChange={handleTitleChange} />
            </div>
            <div className={`flex flex-col md:flex-row h-screen`}>
                {/* Left Side - Content Buttons */}
                <div className={` flex justify-center items-center w-full md:w-1/3 md:h-3/4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded shadow transition sticky top-0 md:top-4`}>
                    {/* Content Buttons */}
                    <div className="flex md:flex-col  spacek-y-2 md:space-y-6 space-x-2 justify-center items-baseline">
                        <TextModalButton onClick={() => handleModalButtonClick('text')} />
                        <ImageModalButton onClick={() => handleModalButtonClick('image')} />
                        <QuizModalButton />
                        <CodeSandboxModalButton />
                    </div>

                    {activeModal === 'text' && <TextModal onClose={closeModal} content={newTextContent} />}
                    {activeModal === 'image' && <ImageModal onClose={closeModal} />}
                    {activeModal === 'code'}
                    {activeModal === 'quiz'}

                </div>

                {/* Right Side - Live Preview */}
                <div className={`flex-shrink-0 w-full md:w-2/3 px-4 overflow-y-auto`}>
                    {/* Live Preview Goes Here */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow h-full">
                        <LessonPreview title={lessonTitle} lessonContent={lessonContent} />
                    </div>
                </div>
            </div>
        </>
    );
};


const LessonPreview = ({ title, lessonContent }: { title: string, lessonContent: any }) => {
    return (
        <>
            <h1 className="text-2xl md:text-4xl">{title}</h1>
            {lessonContent.map((item: any) => (
                <div key={item.id} onClick={() => <TextModal />}>
                    {item.content}{item.contentType}
                </div>
            ))}
        </>
    )
}




export default CreatePage;
