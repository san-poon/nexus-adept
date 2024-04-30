import { Dispatch, createContext, use, useReducer } from 'react';
import { useImmerReducer } from 'use-immer';
import { Lesson, LessonBlock, LessonElements, Path, Paths, PathsAction } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';
import { initialLesson, initialPaths } from '../lib/data';
import { getImageUrlFromUser } from '../lib/utils';

export const PathsContext = createContext<Paths>(initialPaths);
export const PathsDispatchContext = createContext((() => { }) as Dispatch<PathsAction>)

export function PathsProvider({ children }: { children: React.ReactNode }) {
    const [paths, dispatch] = useImmerReducer(
        pathsReducer, initialPaths
    );

    return (
        <PathsContext.Provider value={paths}>
            <PathsDispatchContext.Provider value={dispatch}>
                {children}
            </PathsDispatchContext.Provider>
        </PathsContext.Provider>
    );
}

export function usePaths() {
    return use(PathsContext);
}
export function usePathsDispatch() {
    return use(PathsDispatchContext);
}


/**
 * 
 * @param paths state draft
 * @param action what happened?
 * @returns updated state
 */
function pathsReducer(paths: Paths, action: PathsAction): Paths {
    switch (action.type) {

        case 'added_child_path': {
            const newChildPath: Path = {
                id: uuidv4(),
                title: "",
                childIDs: [],
                parentIDs: [action.parentID],
                lesson: initialLesson,
            }
            paths[action.parentID].childIDs.push(newChildPath.id); // Update the childIDs of the Parent Path
            paths[newChildPath.id] = newChildPath; // Add new path
            return paths;
        }

        case 'added_sibling_path': {
            const { siblingID } = action;
            const sibling = paths[siblingID];
            const parentID = sibling.parentIDs[0]; // A hierarchy has always one parent
            const newPath: Path = {
                id: uuidv4(),
                title: "",
                childIDs: [],
                parentIDs: [parentID],
                lesson: initialLesson,
            };
            // Sibling index in the parent's childIDs
            const siblingIndex = paths[parentID].childIDs.indexOf(action.siblingID);

            paths[parentID].childIDs.splice(siblingIndex, 0, newPath.id);
            paths[newPath.id] = newPath;
            return paths;
        }

        case 'changed_path_title': {
            const { updatedPath } = action;
            paths[updatedPath.id] = updatedPath;
            return paths;
        }

        case 'deleted_path': {
            const { pathID } = action;
            const parentID = paths[pathID].parentIDs[0]; // A path must have only one parentID
            const parentPath = paths[parentID];
            const index = parentPath.childIDs.indexOf(pathID);
            parentPath.childIDs.splice(index, 1); // Delete the pathID from parent's `childIDs`
            delete paths[pathID];
            return paths;
        }


        case "added_lesson_block": {
            const { activePathID, elementType, topBlockID } = action;
            const lesson = paths[activePathID].lesson;
            const topBlock = lesson[topBlockID];
            const newBlock = getNewBlock(elementType, topBlock.id, topBlock.nextBlockID);
            if (topBlock.nextBlockID) {
                const bottomBlock = lesson[topBlock.nextBlockID];
                bottomBlock.prevBlockID = newBlock.id;
            }
            topBlock.nextBlockID = newBlock.id;
            lesson[newBlock.id] = newBlock;
            return paths;

        }

        case 'deleted_lesson_block': {
            const {activePathID, blockID} = action;
            const lesson = paths[activePathID].lesson;
            const block = lesson[blockID];

            // `prevBlockID` is never `null` except for the 'introduction' block which user must not be able to delete
            if(block.prevBlockID) { 
                const topBlock = lesson[block.prevBlockID];
                if(block.nextBlockID) {
                    const bottomBlock = lesson[block.nextBlockID];
                    topBlock.nextBlockID = block.nextBlockID;
                    bottomBlock.prevBlockID = block.prevBlockID;
                } else {
                    topBlock.nextBlockID = null;
                }
                delete lesson[blockID];
                return paths; 
            }
            return paths; // If user delete the root block ('introduction'), do nothing and return.
        }
        case 'changed_lesson_code_block': {
            return paths;
        }
        case 'changed_lesson_text_block': {
            return paths;
        }
        case 'changed_lesson_mcqs_block': {
            return paths;
        }

        default: {
            //@ts-expect-error
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