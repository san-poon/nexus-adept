'use client';
import { useState } from 'react';
import { TextBlockButton, ImageBlockButton, CodeBlockButton, QuizBlockButton, DeleteButton, CreateButton, ContentTypeButton } from './components/tooltip-buttons';
import Image from 'next/image';
import { DynamicTextarea, TitleInputBlock } from './components/content-blocks';
import { v4 as uuidv4 } from 'uuid';
import { AddContentCombobox, CodeCombobox, TextCombobox } from './components/combobox';
import { getImageUrlFromUser } from './utils';
import { LessonContentBlockProps, LessonContentProps, AnOptionProps, CodeBlockProps } from './types';
import QuizInputBlock from './components/QuizInputBlock';
import { cn } from '@/lib/utils';
import LessonTabs from './components/LessonTabs';

const initialContent: LessonContentProps = [
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
    const [lessonContent, setLessonContent] = useState<LessonContentProps>(initialContent);

    // Handle insertion of text field
    const handleInsertContentBlock = async (index: number, contentType: string) => {
        try {
            // based on content type, content value must be different
            const newContent = async (): Promise<LessonContentBlockProps> => {
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
                                lang: 'js',
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
            const nextLessonContent: LessonContentProps = [
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

    const handleUpdateTextContent = (contentBlock: LessonContentBlockProps) => {
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
        <main className='dark:bg-neutral-900 dark:text-neutral-100'>
            <LessonTabs lessonContent={lessonContent}>
                <div className={`flex flex-col md:flex-row my-10`}>
                    {/* Left Side - Content Buttons */}
                    <div className={` flex justify-center items-center w-full md:w-1/12 lg:w-1/3 md:h-full p-4 rounded shadow transition sticky top-10 md:top-44 z-50 bg-emerald-50 dark:bg-emerald-950 md:dark:bg-inherit mb-2 md:mb-0`}>
                        {/* Content Buttons */}
                        <div className="flex md:flex-col md:space-y-6 justify-center">
                            <TextBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, "text")} />
                            <ImageBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, 'image')} />
                            <QuizBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, 'quiz')} />
                            <CodeBlockButton onClick={() => handleInsertContentBlock(lessonContent.length, 'code')} />
                        </div>

                    </div>

                    {/* Right Side - Input Fields/Forms */}
                    <div className={`flex-shrink-0 w-full md:w-11/12 lg:w-2/3 px-4`}>
                        <div className="bg-white dark:bg-neutral-900 md:p-2 rounded shadow border-2 dark:border-neutral-800">
                            <TitleInputBlock content={titleBlock} onTitleChange={handleUpdateTextContent} />
                            <div className='border-2 dark:border-neutral-700 m-2 mb-4 rounded p-2'>
                                <DynamicTextarea
                                    // autoFocus={true} // gets weird with lesson-tab switching
                                    rows={2}
                                    className=" w-full appearance-none resize-none border-none focus:outline-none dark:bg-neutral-900"
                                    placeholder='Captivating Introduction...'
                                    name={introductionBlock?.contentType}
                                    value={introductionBlock?.value}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateTextContent({ ...introductionBlock as LessonContentBlockProps, value: e.target.value })}
                                />
                            </div>
                            <div className='border-2 dark:border-neutral-700 m-2 mb-4 rounded p-2'>
                                <DynamicTextarea
                                    // autoFocus={true} // gets weird with lesson-tab switching
                                    rows={2}
                                    className=" w-full appearance-none resize-none border-none focus:outline-none dark:bg-neutral-900"
                                    placeholder='Concise Objective...'
                                    name={objectiveBlock?.contentType}
                                    value={objectiveBlock?.value}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateTextContent({ ...objectiveBlock as LessonContentBlockProps, value: e.target.value })}
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
                                    <div className=" relative group/content md:m-2 dark:bg-neutral-900 rounded border-2 dark:border-neutral-700">
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
                                                            className=" w-full px-2 appearance-none resize-none border-none focus:outline-none dark:bg-neutral-900"
                                                            placeholder='Your paragraph or... Choose from dropdown menu'
                                                            name={item.contentType}
                                                            value={item.value}
                                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateTextContent({ ...item, value: e.target.value })}
                                                        />
                                                    </div>
                                                )
                                            }
                                            {item.contentType === 'image' && (
                                                <div className='flex items-center justify-center'>
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
                                                            className=" w-full px-2 appearance-none resize-none border-none focus:outline-none dark:bg-neutral-900"
                                                            placeholder='Paste your code here...'
                                                            name={item.contentType}
                                                            value={item.value.code}
                                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUpdateCodeContent({ ...item, value: { lang: "js", code: e.target.value } })}
                                                        />
                                                    </div>
                                                )
                                            }
                                            <div className='relative group/toolbar my-3'>
                                                <DeleteButton className='absolute bottom-0 right-0 opacity-0 transition-opacity duration-300 group-hover/content:opacity-100 text-sm h-6 px-2 py-2 m-1'
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
        </main>
    );
};


export default CreateLessonPage;
