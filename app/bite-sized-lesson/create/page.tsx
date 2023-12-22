'use client';
<<<<<<< HEAD
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
=======
import { useState, useRef } from 'react';
import { TextBlockButton, ImageBlockButton, CodeSandboxBlockButton, QuizBlockButton } from './components/button-with-logo';
import { Button } from '@/app/components/Button';
import Image from 'next/image';

interface lessonContentItem {
    id: number;
    contentType: 'text' | 'quiz' | 'image' | 'code';
    value: string | object | any[];
}

const CreatePage = () => {
    const [lessonTitle, setLessonTitle] = useState('');
    const [lessonContent, setLessonContent] = useState<lessonContentItem[]>([]);

    // Image handlers
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            let id = lessonContent.length + 1;
            setLessonContent([
                ...lessonContent,
                { id: id, contentType: 'image', value: imageUrl }
            ]);
        }
    };

    // Handle changes in lesson title input
>>>>>>> feature/create-lesson-ui-interactive
    const handleTitleChange = (event: any) => {
        event.preventDefault();
        setLessonTitle(event.target.value);
    }

<<<<<<< HEAD
    const newTextContent = {
        id: generateUniqueId(),
        type: 'text',
        content: ''
    };
=======
    // Handle update in lessonContent
    const handleAddContentField = () => {
        const newField = {
            id: lessonContent.length + 1,
            contentType: 'text',
            value: ''
        }

        setLessonContent([...lessonContent, newField]);
    }

    const handleUpdateContent = (id: number, value: any) => {
        setLessonContent((prevContent) =>
            prevContent.map((field) =>
                field.id === id ? { ...field, value } : field
            )
        )
    }

    const handleDeleteContent = (id: number) => {
        setLessonContent((prevContent) => prevContent.filter((item) => item.id !== id));
    }
>>>>>>> feature/create-lesson-ui-interactive

    return (
        <>
            <div className="md:w-2/3 mx-auto p-4">
                {/* Title Input */}
                <TitleInput title={lessonTitle} onTitleChange={handleTitleChange} />
            </div>
            <div className={`flex flex-col md:flex-row h-screen`}>
                {/* Left Side - Content Buttons */}
                <div className={` flex justify-center items-center w-full md:w-1/3 md:h-3/4 p-4 bg-neutral-100 dark:bg-neutral-900 rounded shadow transition sticky top-0 md:top-4`}>
                    {/* Content Buttons */}
                    <div className="flex md:flex-col  spacek-y-2 md:space-y-6 space-x-2 justify-center items-baseline">
<<<<<<< HEAD
                        <TextModalButton onClick={() => handleModalButtonClick('text')} />
                        <ImageModalButton onClick={() => handleModalButtonClick('image')} />
                        <QuizModalButton />
                        <CodeSandboxModalButton />
=======
                        <TextBlockButton onClick={handleAddContentField} />
                        <ImageBlockButton onClick={handleImageUpload} />
                        <input
                            type='file'
                            accept='image/*'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className=" hidden" />
                        <QuizBlockButton />
                        <CodeSandboxBlockButton />
>>>>>>> feature/create-lesson-ui-interactive
                    </div>

                    {activeModal === 'text' && <TextModal onClose={closeModal} content={newTextContent} />}
                    {activeModal === 'image' && <ImageModal onClose={closeModal} />}
                    {activeModal === 'code'}
                    {activeModal === 'quiz'}

                </div>

                {/* Right Side - Live Preview */}
                <div className={`flex-shrink-0 w-full md:w-2/3 px-4 overflow-y-auto`}>
                    {/* Live Preview Goes Here */}
<<<<<<< HEAD
                    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow h-full">
                        <LessonPreview title={lessonTitle} lessonContent={lessonContent} />
=======
                    <div className="bg-white dark:bg-neutral-800 p-4 rounded shadow h-full">
                        <TitlePreview title={lessonTitle} />
                        {lessonContent.map((item) => (
                            <div key={item.id} className=" relative group m-2">
                                {item.contentType === 'text' && (
                                    <textarea
                                        className=" max-h-32 h-24 rounded w-full p-2"
                                        id={item.contentType}
                                        placeholder='Write here'
                                        name={item.contentType}
                                        value={item.value}
                                        onChange={(e) => handleUpdateContent(item.id, e.target.value)}
                                    />
                                )}
                                {item.contentType === 'image' && (
                                    <Image src={item.value} width={350} height={350} alt='image' />
                                )}
                                <Button className='absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                    onClick={() => handleDeleteContent(item.id)}>
                                    x
                                </Button>
                            </div>
                        ))}
>>>>>>> feature/create-lesson-ui-interactive
                    </div>
                </div>
            </div>
        </>
    );
};


<<<<<<< HEAD
const LessonPreview = ({ title, lessonContent }: { title: string, lessonContent: any }) => {
    return (
        <>
            <h1 className="text-2xl md:text-4xl">{title}</h1>
            {lessonContent.map((item: any) => (
                <div key={item.id} onClick={() => <TextModal />}>
                    {item.content}{item.contentType}
                </div>
            ))}
=======
const TitlePreview = ({ title }: any) => {
    return (
        <>
            <h1 className=" text-2xl lg:text-4xl">{title}</h1>
>>>>>>> feature/create-lesson-ui-interactive
        </>
    )
}

<<<<<<< HEAD

=======
const TitleInput = ({ title, onTitleChange }: any) => {
    return (
        <>
            {/* Lesson Title input */}
            <input
                type="text"
                placeholder="Lesson Title"
                value={title}
                className="w-full p-2 mb-4 border-b-2 border-blue-500 outline-none rounded shadow"

                onChange={onTitleChange}
            />
        </>
    );
}
>>>>>>> feature/create-lesson-ui-interactive


export default CreatePage;
