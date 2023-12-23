'use client';
import { useState, useRef } from 'react';
import { TextBlockButton, ImageBlockButton, CodeBlockButton, QuizBlockButton } from './components/button-with-logo';
import { Button } from '@/app/components/Button';
import Image from 'next/image';
import Textarea from './components/textarea';

interface lessonContentItem {
    id: number;
    contentType: 'text' | 'quiz' | 'image' | 'code';
    value: any;
}

const CreatePage = () => {
    const [lessonTitle, setLessonTitle] = useState('');
    const [lessonContent, setLessonContent] = useState<lessonContentItem[]>([{
        id: 1,
        contentType: 'text',
        value: 'Introduce...Why this lesson exist.'
    }]);

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
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setLessonTitle(event.target.value);
    }

    // Handle update in lessonContent
    const handleAddContentField = () => {
        const newField: lessonContentItem = {
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

    return (
        <>
            <div className="md:w-2/3 mx-auto p-4">
                {/* Title Input */}
                <TitleInput title={lessonTitle} onTitleChange={handleTitleChange} />
            </div>
            <div className={`flex flex-col md:flex-row`}>
                {/* Left Side - Content Buttons */}
                <div className={` flex justify-center items-center w-full md:w-1/3 md:h-3/4 p-4 bg-neutral-100 dark:bg-neutral-900 rounded shadow transition sticky top-0 md:top-4 z-50`}>
                    {/* Content Buttons */}
                    <div className="flex md:flex-col  spacek-y-2 md:space-y-6 space-x-2 justify-center items-baseline">
                        <TextBlockButton onClick={handleAddContentField} />
                        <ImageBlockButton onClick={handleImageUpload} />
                        <input
                            type='file'
                            accept='image/*'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className=" hidden" />
                        <QuizBlockButton />
                        <CodeBlockButton />
                    </div>

                </div>

                {/* Right Side - Input Fields/Forms */}
                <div className={`flex-shrink-0 w-full md:w-2/3 px-4 overflow-y-auto`}>
                    {/* Live Preview Goes Here */}
                    <div className="bg-white dark:bg-neutral-900 md:p-2 rounded shadow border-2 dark:border-neutral-800">
                        <TitlePreview title={lessonTitle} />
                        {lessonContent.map((item) => (
                            <div key={item.id} className=" relative group/content md:m-2 dark:bg-neutral-900 rounded border-2 dark:border-neutral-700">
                                {item.contentType === 'text' && (
                                    <Textarea
                                        rows={5}
                                        className="rounded w-full p-1 md:p-2 appearance-none resize-none border-none focus:outline-none dark:bg-neutral-900"
                                        placeholder='Your paragraph or... Choose from menu'
                                        name={item.contentType}
                                        value={item.value}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdateContent(item.id, e.target.value)}
                                    />
                                )}
                                {item.contentType === 'image' && (
                                    <Image src={item.value} width={350} height={350} alt='image' />
                                )}
                                <div className='relative group/toolbar'>
                                    <Button className='absolute bottom-0 right-0 opacity-0 transition-opacity duration-300 group-hover/content:opacity-100 text-sm h-6 px-2 py-2 m-1'
                                        onClick={() => handleDeleteContent(item.id)}>
                                        x
                                    </Button>
                                    <div className='opacity-0 text-xs rounded-md p-1 absolute -bottom-6 -right-6 transform -translate-x-1/2 transition duration-300 ease-in-out group-hover/toolbar:opacity-100 z-10'>
                                        Delete
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


const TitlePreview = ({ title }: any) => {
    return (
        <>
            <h1 className=" text-2xl lg:text-4xl">{title}</h1>
        </>
    )
}

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


export default CreatePage;
