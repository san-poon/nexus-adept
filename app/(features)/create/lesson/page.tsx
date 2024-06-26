'use client';
import { useState } from 'react';
import { TextBlockButton, ImageBlockButton, CodeBlockButton, QuizBlockButton, DeleteButton } from './components/tooltip-buttons';
import Image from 'next/image';
import { DynamicTextarea, TitleInputBlock } from './components/content-blocks';
import { v4 as uuidv4 } from 'uuid';
import { AddContentCombobox, CodeCombobox, TextCombobox } from './components/combobox';
import { getImageUrlFromUser } from './lib/utils';
import { LessonContentData, LessonData, AnOptionProps, CodeBlockProps } from './lib/types';
import QuizInputBlock from './components/QuizInputBlock';
import { cn } from '@/lib/utils';
import LessonTabs from './components/LessonTabs';

const initialContent: LessonData = [
    {
        id: uuidv4(),
        contentType: 'title',
        value: ''
    },
    {
        id: uuidv4(),
        contentType: 'text/introduction',
        value: '',
    },
    {
        id: uuidv4(),
        contentType: 'text/objective',
        value: '',
    },
];

const CreateLessonPage = () => {
    const [lessonContent, setLessonContent] = useState<LessonData>(initialContent);

    // Handle insertion of text field
    const handleInsertContentBlock = async (index: number, contentType: string) => {
        try {
            // based on content type, content value must be different
            const newContent = async (): Promise<LessonContentData> => {
                switch (contentType) {
                    case 'text': {
                        return {
                            id: uuidv4(),
                            contentType: 'text',
                            value: ""
                        };
                    }
                    case 'code': {
                        return {
                            id: uuidv4(),
                            contentType: 'code',
                            value: {
                                lang: 'javascript',
                                code: '',
                            },
                        };
                    }
                    case 'image': {
                        try {
                            const imageUrl = await getImageUrlFromUser();
                            return {
                                id: uuidv4(),
                                contentType: 'image',
                                value: imageUrl,
                            };
                        } catch (error) {
                            console.log(`Error: ${error}`);
                        }
                    }
                    case 'quiz': {
                        return {
                            id: uuidv4(),
                            contentType: 'quiz',
                            value: {
                                question: '',
                                options: [
                                    { id: uuidv4(), value: '', isCorrect: false },
                                    { id: uuidv4(), value: '', isCorrect: false },
                                    { id: uuidv4(), value: '', isCorrect: false },
                                ],
                                explanation: '',
                            },
                        };
                    }
                    default: {
                        throw new Error('Not a valid content-type: ' + contentType);
                    }
                };
            }

            const insertAt = index + 1;
            const nextLessonContent: LessonData = [
                // Items before the insertion point:
                ...lessonContent.slice(0, insertAt),
                // New item:
                await newContent(),
                ...lessonContent.slice(insertAt)
            ];
            setLessonContent(nextLessonContent);
        }
        catch (error) {
            console.log(`Error in handleInsertContentBlock handler: ${error}`);
            // Handle the error as needed
        }
    };

    const handleUpdateTextContent = (contentBlock: LessonContentData) => {
        // Doesn't matter what user is updating: 'contentType' or 'value'
        const nextLessonContent = lessonContent.map((contentItem) => {
            if (contentItem.id === contentBlock.id) {
                return { ...contentItem, contentType: contentBlock.contentType, value: contentBlock.value }
            } else return contentItem;
        });
        setLessonContent(nextLessonContent);
    }

    const handleDeleteContentBlock = (id: string) => {
        setLessonContent((prevContent) => prevContent.filter((item) => item.id !== id));
    }

    // Code handlers
    const handleUpdateCodeContent = (codeContentBlock: CodeBlockProps) => {
        const nextLessonContent = lessonContent.map((content) => {
            if (content.id === codeContentBlock.id) {
                return {
                    ...content,
                    value: {
                        lang: codeContentBlock.value.lang,
                        code: codeContentBlock.value.code,
                    }
                }
            }
            else return content;
        });
        setLessonContent(nextLessonContent);
    }

    // Quiz handlers
    const handleCheckedChange = (contentId: string, optionId: string, isChecked: boolean) => {
        const nextLessonContent = lessonContent.map((content) => {
            if (content.id === contentId) {
                return {
                    ...content,
                    value: {
                        ...content.value,
                        options: content.value.options.map((option: AnOptionProps) => {
                            if (option.id === optionId) {
                                return {
                                    ...option,
                                    isCorrect: isChecked,
                                }
                            } else return option;
                        })
                    }
                }
            } else return content;
        });
        setLessonContent(nextLessonContent);
    }

    const handleQuestionChange = (contentId: string, questionValue: string) => {
        const nextLessonContent = lessonContent.map((content) => {
            if (content.id === contentId) {
                return {
                    ...content,
                    value: {
                        ...content.value,
                        question: questionValue,
                    }
                };
            }
            else return content;
        })
        setLessonContent(nextLessonContent);
    };

    const handleOptionValueChange = (contentId: string, optionId: string, optionValue: string) => {
        const nextLessonContent = lessonContent.map((content) => {
            if (content.id === contentId) {
                return {
                    ...content,
                    value: {
                        ...content.value,
                        options: content.value.options.map((option: AnOptionProps) => {
                            if (option.id === optionId) {
                                return {
                                    ...option,
                                    value: optionValue
                                }
                            } else return option
                        })
                    }
                }
            } else return content;
        });
        setLessonContent(nextLessonContent);
    };

    const handleExplanationChange = (contentId: string, explanationValue: string) => {
        const nextLessonContent = lessonContent.map((content) => {
            if (content.id === contentId) {
                return {
                    ...content,
                    value: {
                        ...content.value,
                        explanation: explanationValue,
                    }
                }
            }
            else return content;
        });
        setLessonContent(nextLessonContent);
    };

    const titleBlock = lessonContent.find((content) => content.contentType === 'title');
    const introductionBlock = lessonContent.find((content) => content.contentType === 'text/introduction');
    const objectiveBlock = lessonContent.find((content) => content.contentType === 'text/objective');

    return (
        <div className=' min-h-screen dark:text-neutral-200'>
            <LessonTabs lessonContent={lessonContent}>
                <div className=' flex items-center justify-center mx-2 md:mx-32 lg:mx-96 lg:my-8'>
                    <TitleInputBlock content={titleBlock} onTitleChange={handleUpdateTextContent} />
                </div>
                <div className={`flex flex-col md:flex-row my-4`}>

                    {/* Left Side - Content Buttons */}
                    <div className={` flex justify-center items-center w-full md:w-1/12 lg:w-1/3 md:h-full p-4 sticky top-24 z-10 bg-emerald-50 md:bg-inherit dark:bg-wash-750 md:dark:bg-inherit mb-2 md:mb-0`}>
                        {/* Content Buttons */}
                        <div className="flex md:flex-col md:space-y-6 justify-center">
                            <TextBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, "text")} />
                            <ImageBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, 'image')} />
                            <QuizBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, 'quiz')} />
                            <CodeBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, 'code')} />
                        </div>
                    </div>

                    {/* Right Side - Input Fields/Forms */}
                    <div className={`w-full md:w-11/12 lg:w-2/3 px-4`}>

                        <div className="md:p-2">

                            <div className='mt-2'>
                                <DynamicTextarea
                                    // autoFocus={true} // gets weird with lesson-tab switching
                                    rows={1}
                                    className=" w-full p-4"
                                    placeholder='Captivating Introduction...'
                                    name={introductionBlock?.contentType}
                                    value={introductionBlock?.value}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateTextContent({ ...introductionBlock as LessonContentData, value: e.target.value })}
                                />
                            </div>
                            <div>
                                <DynamicTextarea
                                    // autoFocus={true} // gets weird with lesson-tab switching
                                    rows={1}
                                    className=" w-full p-4"
                                    placeholder='Concise Objective...'
                                    name={objectiveBlock?.contentType}
                                    value={objectiveBlock?.value}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateTextContent({ ...objectiveBlock as LessonContentData, value: e.target.value })}
                                />
                            </div>

                            {lessonContent.map((item, index) => (
                                <div key={item.id} className={cn(
                                    item.contentType === 'title'
                                        || item.contentType === 'text/introduction'
                                        || item.contentType === 'text/objective'
                                        ? 'hidden' : 'block'
                                )}>
                                    {/* ContentType Combobox */}
                                    <div className='flex justify-center items-center opacity-70 md:opacity-25 hover:opacity-100 transition-opacity duration-700'>
                                        <AddContentCombobox index={index} onInsertContentField={handleInsertContentBlock} />
                                    </div>
                                    <div className=" relative group/content md:m-2 border border-neutral-300 dark:border-neutral-600  rounded-2xl focus-within:border-neutral-400 dark:focus-within:border-neutral-500">
                                        <div>
                                            {/* Conditionally render based on 'contentType' */}
                                            {
                                                (
                                                    item.contentType === 'text'
                                                    || item.contentType === 'text/note'
                                                    || item.contentType === 'text/pitfall'
                                                )
                                                && (
                                                    <div>
                                                        <div className='flex items-center justify-end opacity-0 transition-opacity duration-300 group-hover/content:opacity-100 my-0'>
                                                            <TextCombobox contentBlock={item} onTextContentTypeChange={handleUpdateTextContent} />
                                                        </div>
                                                        <DynamicTextarea
                                                            // autoFocus={true} // gets weird with lesson-tab switching
                                                            rows={1}
                                                            className=" w-full px-2 border-none focus:outline-0 focus-visible:outline-0 dark:focus-visible:outline-0"
                                                            placeholder='Your paragraph or... Choose from dropdown menu'
                                                            name={item.contentType}
                                                            value={item.value}
                                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateTextContent({ ...item, value: e.target.value })}
                                                        />
                                                    </div>
                                                )
                                            }
                                            {item.contentType === 'image' && (
                                                <div className='flex items-center justify-center p-2'>
                                                    <Image src={item.value} width={300} height={300} alt='image' />
                                                </div>
                                            )}
                                            {
                                                item.contentType === 'quiz' && (
                                                    <div>
                                                        <QuizInputBlock
                                                            quiz={item}
                                                            onCheckedChange={handleCheckedChange}
                                                            onQuestionChange={handleQuestionChange}
                                                            onExplanationChange={handleExplanationChange}
                                                            onOptionsChange={handleOptionValueChange}
                                                        />
                                                    </div>
                                                )
                                            }
                                            {
                                                item.contentType === 'code' && (
                                                    <div className=''>
                                                        <div className='text-xs flex items-center justify-end opacity-0 transition-opacity duration-300 group-hover/content:opacity-100 my-0'>
                                                            <CodeCombobox codeBlock={item} onCodeLangUpdate={handleUpdateCodeContent} />
                                                        </div>
                                                        <DynamicTextarea
                                                            // autoFocus={true} // gets weird with lesson-tab switching
                                                            rows={1}
                                                            className=" w-full px-2 border-none bg-inherit focus:outline-0 focus-visible:outline-0 dark:focus-visible:outline-0"
                                                            placeholder='Paste your code here...'
                                                            name={item.contentType}
                                                            value={item.value.code}
                                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateCodeContent({ ...item, value: { lang: "js", code: e.target.value } })}
                                                        />
                                                    </div>
                                                )
                                            }
                                            <div className='relative group/toolbar my-3'>
                                                <DeleteButton className='absolute bottom-0 right-0 opacity-0 transition-opacity duration-300 group-hover/content:opacity-100 text-sm h-6 px-4 py-2 m-1'
                                                    onClick={() => handleDeleteContentBlock(item.id)} />
                                                <div className='opacity-0 text-xs p-1 absolute -bottom-6 -right-0 transition duration-300 ease-in-out group-hover/toolbar:opacity-100 z-10 bg-neutral-200 dark:bg-neutral-800 rounded'>
                                                    Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </LessonTabs>
        </div>
    );
};


export default CreateLessonPage;
