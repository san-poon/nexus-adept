import { Dispatch, createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Lesson, LessonBlock, LessonElements, Lessons } from '../lib/types';
import { getImageUrlFromUser } from '../lib/utils';

const defaultLesson: Lesson = {
    'title': {
        id: 'title',
        elementType: 'title',
        value: "",
        prevBlockID: null,
        nextBlockID: 'introduction',
    },
    'introduction': {
        id: 'introduction',
        elementType: 'text/introduction',
        value: "",
        prevBlockID: 'title',
        nextBlockID: 'objective',
    },
    'objective': {
        id: 'objective',
        elementType: 'text/objective',
        value: "",
        prevBlockID: 'introduction',
        nextBlockID: null,
    },
}

const initialLessons: Lessons = {
    'ROOT': defaultLesson,
}

// Here initialLessons represent fallback default value.
const LessonsContext = createContext<Lessons>(initialLessons);
const LessonsDispatchContext = createContext((() => { }) as Dispatch<LessonsAction>);

export function LessonsProvider({ children }: { children: React.ReactNode }) {
    const [lessons, dispatch] = useReducer(
        lessonsReducer,
        initialLessons
    );
    return (
        <LessonsContext.Provider value={lessons}>
            <LessonsDispatchContext.Provider value={dispatch}>
                {children}
            </LessonsDispatchContext.Provider>
        </LessonsContext.Provider>
    )
}

type LessonsAction =
    | { type: 'lesson-block-added'; block: LessonBlock; elementType: LessonBlock["elementType"]; }
    | { type: 'lesson-block-deleted'; blockID: LessonBlock["id"]; }
    | { type: 'lesson-text-block-changed' }
    | { type: 'lesson-code-block-changed' }
    | { type: 'lesson-mcqs-block-changed' }

function lessonsReducer(lessons: Lessons, action: LessonsAction): Lessons {
    switch (action.type) {
        case 'lesson-block-added': {
            const { elementType, block } = action;
            const prevBlockID = block.id;
            const nextBlockID = block.nextBlockID; // null if it's the last element
            const newBlock = getNewBlock(elementType, prevBlockID, nextBlockID);
            // Update the `nextBlockID` of the top block
            const updatedTopBlock = {
                ...block,
                nextBlockID: newBlock.id
            }
            // Update the `prevBlockID` of the bottom block (if any)
            if (nextBlockID) {


            }
        }

        case 'lesson-block-deleted': {

        }

        case 'lesson-text-block-changed': {

        }

        case 'lesson-code-block-changed': {

        }

        case 'lesson-mcqs-block-changed': {

        }
        default: {
            throw Error(`Unknown action ${action.type}`)
        }
    }
}

function getNewBlock(
    element: LessonElements,
    prevBlockID: string,
    nextBlockID: string | null
): LessonBlock {
    switch (element) {
        case 'text': return {
            id: uuidv4(),
            elementType: 'text',
            value: "",
            prevBlockID,
            nextBlockID,
        }
        case 'code': {
            return {
                id: uuidv4(),
                elementType: 'code',
                value: {
                    lang: 'javascript',
                    code: '',
                },
                prevBlockID,
                nextBlockID,
            };
        }
        case 'image': {
            try {
                const imageUrl = getImageUrlFromUser();
                return {
                    id: uuidv4(),
                    elementType: 'image',
                    value: imageUrl,
                    prevBlockID,
                    nextBlockID,
                };
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        case 'quiz': {
            return {
                id: uuidv4(),
                elementType: 'quiz',
                value: {
                    question: '',
                    options: [
                        { id: uuidv4(), value: '', isCorrect: false },
                        { id: uuidv4(), value: '', isCorrect: false },
                        { id: uuidv4(), value: '', isCorrect: false },
                    ],
                    explanation: '',
                },
                prevBlockID,
                nextBlockID,
            };
        }
        default: {
            throw new Error('Not a valid element of a lesson ' + element);
        }
    }
}
