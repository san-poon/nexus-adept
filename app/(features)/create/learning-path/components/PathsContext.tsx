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
            // // Update the childIDs of the Parent Path
            // const updatedParentPath = {
            //     ...paths[action.parentID],
            //     childIDs: [...paths[action.parentID].childIDs, newChildPath.id],
            // }
            // return {
            //     ...paths,
            //     [action.parentID]: updatedParentPath,
            //     [newChildPath.id]: newChildPath,
            // }
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

            // // Update the sibling's parent's `childIDs` by inserting 
            // // the new sibling's id before the current sibling's id
            // const updatedParentPath = {
            //     ...paths[parentID],
            //     childIDs: [
            //         ...paths[parentID].childIDs.slice(0, siblingIndex),
            //         newPath.id, // Add before the sibling
            //         ...paths[parentID].childIDs.slice(siblingIndex),
            //     ],
            // };

            // return {
            //     ...paths,
            //     [newPath.id]: newPath,
            //     [parentID]: updatedParentPath,
            // };
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
            // // Filter out the path to be deleted from the parent's childIDs
            // const updatedParentPath = {
            //     ...paths[parentID],
            //     childIDs: paths[parentID].childIDs.filter((id) => id !== pathID),
            // };

            // //Create a copy of the previous hierarchies without the deleted category
            // const updatedPaths = { ...paths };
            // delete updatedPaths[pathID];

            // return {
            //     ...updatedPaths,
            //     [parentID]: updatedParentPath,
            // }
        }


        case "added_lesson_block": {
            const { activePathID, elementType, topBlock } = action;
            const newBlock = getNewBlock(elementType, topBlock.id, topBlock.nextBlockID);
            // Update the `nextBlockID` of the top block (the block that triggered this action)
            topBlock.nextBlockID = newBlock.id;
            if (topBlock.nextBlockID) {
                const bottomBlock = paths[activePathID].lesson[topBlock.nextBlockID];
                bottomBlock.prevBlockID = newBlock.id;
                return paths;
            } return paths;
            //     // Update the `nextBlockID` of the top block (the block that triggered this action)
            //     const newTopBlock = {
            //         ...topBlock,
            //         nextBlockID: newBlock.id
            //     };
            //     if (topBlock.nextBlockID) { // Make sure it's not the last block
            //         const bottomBlock = paths[activePathID].lesson[topBlock.nextBlockID];
            //         // Update the `prevBlockID` of the bottom block
            //         const newBottomBlock = {
            //             ...bottomBlock,
            //             prevBlockID: newBlock.id
            //         }
            //         return {
            //             ...paths,
            //             [activePathID]: {
            //                 ...paths[activePathID],
            //                 lesson: {
            //                     ...paths[activePathID].lesson,
            //                     [topBlock.id]: newTopBlock,
            //                     [newBlock.id]: newBlock,
            //                     [bottomBlock.id]: newBottomBlock,
            //                 }
            //             }
            //         }
            //     }
            //     else {
            //         return {
            //             ...paths,
            //             [activePathID]: {
            //                 ...paths[activePathID],
            //                 lesson: {
            //                     ...paths[activePathID].lesson,
            //                     [topBlock.id]: newTopBlock,
            //                     [newBlock.id]: newBlock,
            //                 }
            //             }
            //         }
            //     }
        }

        case 'deleted_lesson_block': {
            return paths;
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