import { Dispatch, createContext, use } from 'react';
import { useImmerReducer } from 'use-immer';
import { LessonBlock, LessonElements, Path, Paths, PathsAction, QuizData } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';
import { initialLesson, initialPaths } from '../lib/data';
import { findAndAddElement, findAndRemoveElement, getImageUrlFromUser } from '../lib/utils';

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

            // Every block(e.g: quiz's question block, or deep dive) block will have initial block which will have parentID set, which the newBlock will use.
            const newBlock = getNewBlock(elementType, topBlock.id, topBlock.nextBlockID, topBlock.parentID); // Root block for every composed block must be initially defined.
            if (topBlock.nextBlockID) {
                const bottomBlock = lesson[topBlock.nextBlockID];
                bottomBlock.prevBlockID = newBlock.id;
            }
            topBlock.nextBlockID = newBlock.id;

            //Additional data for quiz block.
            if (elementType === 'quiz') {
                // Here, newBlock is the quiz block.
                const quizBlock: QuizData = newBlock;
                const defaultQBlock = getNewBlock('text', null, null, quizBlock.id); // Default question block, parentBlock is newBlock(quiz-block)'s `id`
                const defaultEblock = getNewBlock('text', null, null, quizBlock.id); // Default explanation block
                paths[activePathID].lesson[defaultQBlock.id] = defaultQBlock; // Add block to lesson data. Must be manually deleted if the quiz block is deleted.
                paths[activePathID].lesson[defaultEblock.id] = defaultEblock; // Add default explanation block to lesson data. Must be manually deleted if the quiz block is deleted.
                quizBlock.value.questionIDs.push(defaultQBlock.id);
                quizBlock.value.explanationIDs.push(defaultEblock.id);
            }

            /**
             * If the block that triggered this action (topBlock) has parentID,
             * then it means the parent is of type composite element.
             * So, we need to save the `id` of the new block to the parent block.
             */
            if (topBlock.parentID) {
                // Find the location of topBlock's 'id' in parentBlock, and add the `id` of the new block just right after it.
                // Finding the location differs according to composite types.
                const parentBlock = lesson[topBlock.parentID];
                if (parentBlock.elementType === 'quiz') {
                    const quizBlock: QuizData = parentBlock;
                    const qIDs = quizBlock.value.questionIDs;
                    const eIDs = quizBlock.value.explanationIDs;
                    const allIDs = [qIDs, eIDs];
                    findAndAddElement(allIDs, topBlock.id, newBlock.id)
                }
                //TODO: Logic to add `id` to block of remaining composite elements.
            }
            lesson[newBlock.id] = newBlock;
            return paths;
        }

        case 'deleted_lesson_block': {
            const { activePathID, blockID } = action;
            const lesson = paths[activePathID].lesson;
            const block = lesson[blockID];

            // Don't allow the defaultBlock(`prevBlockID: null`) to be deleted.
            if (block.prevBlockID) {
                const topBlock = lesson[block.prevBlockID];
                if (block.nextBlockID) {
                    const bottomBlock = lesson[block.nextBlockID];
                    topBlock.nextBlockID = block.nextBlockID;
                    bottomBlock.prevBlockID = block.prevBlockID;
                } else {
                    topBlock.nextBlockID = null;
                }

                // Delete all blocks that only the quiz block has reference to. 
                if (block.elementType === 'quiz') {
                    const quizBlock: QuizData = block;
                    const qIDs = quizBlock.value.questionIDs;
                    const eIDs = quizBlock.value.explanationIDs;
                    for (let id of qIDs) {
                        delete lesson[id];
                    }
                    for (let id of eIDs) {
                        delete lesson[id];
                    }
                }

                // Like when adding block we insert the new block's `id`, we delete the `id` of block being deleted.
                if (block.parentID) {
                    const parentBlock = lesson[block.parentID];
                    if (parentBlock.elementType === 'quiz') {
                        const quizBlock: QuizData = parentBlock;
                        const qIDs = quizBlock.value.questionIDs;
                        const eIDs = quizBlock.value.explanationIDs;
                        const options = quizBlock.value.options;
                        const allIDs = [qIDs, eIDs];
                        findAndRemoveElement(allIDs, block.id);
                    }
                    //TODO: implement logic to remove `id` from other composite elements.
                }

                delete lesson[blockID];
                return paths;
            }
            return paths; // In rare cases if user tries to delete the default block, do nothing and return.
        }


        case 'changed_lesson_block': {
            const { activePathID, block } = action;
            paths[activePathID].lesson[block.id] = block;
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
    prevBlockID: LessonBlock['prevBlockID'],
    nextBlockID: LessonBlock['nextBlockID'],
    parentID: string | null,
): LessonBlock {
    switch (element) {
        case 'text': return {
            id: uuidv4(),
            elementType: 'text',
            value: "",
            prevBlockID,
            nextBlockID,
            parentID,
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
                parentID,
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
                    parentID,
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
                    questionIDs: [], // (Default: TextBlock) IDs in lesson blocks: 'text', 'image' & 'code'. ('maths' not supported)
                    options: [
                        { id: uuidv4(), value: '', isCorrect: false, feedbackIDs: '' }, // feedbackIDs represent IDs in lesson blocks.
                        { id: uuidv4(), value: '', isCorrect: false, feedbackIDs: '' },
                        { id: uuidv4(), value: '', isCorrect: false, feedbackIDs: '' },
                        { id: uuidv4(), value: '', isCorrect: false, feedbackIDs: '' },
                    ],
                    explanationIDs: [],
                },
                prevBlockID,
                nextBlockID,
                parentID,
            };
        }
        default: {
            throw new Error('Not a valid element of a lesson ' + element);
        }
    }
}