import { Dispatch, createContext, use, useReducer } from 'react';
import { Path, Paths } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';

const rootID = "ROOT";
const initialPaths: Paths = {
    [rootID]: {
        id: rootID,
        title: "",
        childIDs: [],
        parentIDs: [],
    },
};

export const PathsContext = createContext<Paths>(initialPaths);
export const PathsDispatchContext = createContext((() => { }) as Dispatch<PathsAction>)

export function PathsProvider({ children }: { children: React.ReactNode }) {
    const [paths, dispatch] = useReducer(
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


type PathsAction =
    | { type: "added_child_path"; parentID: Path["id"] }
    | { type: "added_sibling_path"; siblingID: Path["id"] }
    | { type: "changed_path_title"; updatedPath: Path }
    | { type: 'deleted_path'; pathID: Path["id"] }



function pathsReducer(paths: Paths, action: PathsAction): Paths {
    switch (action.type) {

        case 'added_child_path': {
            const newChildPath: Path = {
                id: uuidv4(),
                title: "",
                childIDs: [],
                parentIDs: [action.parentID],
            }
            // Update the childIDs of the Parent Path
            const updatedParentPath = {
                ...paths[action.parentID],
                childIDs: [...paths[action.parentID].childIDs, newChildPath.id],
            }
            return {
                ...paths,
                [action.parentID]: updatedParentPath,
                [newChildPath.id]: newChildPath,
            }
        }

        case 'added_sibling_path': {
            const newPath: Path = {
                id: uuidv4(),
                title: "",
                childIDs: [],
                parentIDs: [],
            };
            const sibling = paths[action.siblingID];
            const parentID = sibling.parentIDs[0]; // A hierarchy has always one parent
            // Sibling index in the parent's childIDs
            const siblingIndex = paths[parentID].childIDs.indexOf(action.siblingID);

            // Update the sibling's parent's childIDs by inserting 
            // the new sibling's id before the current sibling's id
            const updatedParentPath = {
                ...paths[parentID],
                childIDs: [
                    ...paths[parentID].childIDs.slice(0, siblingIndex),
                    newPath.id, // Add before the sibling
                    ...paths[parentID].childIDs.slice(siblingIndex),
                ],
            };
            // Update the new sibling's parentIDs
            const updatedNewPath = {
                ...newPath,
                parentIDs: [parentID],
            };

            return {
                ...paths,
                [newPath.id]: updatedNewPath,
                [parentID]: updatedParentPath,
            };
        }

        case 'changed_path_title': {
            return {
                ...paths,
                [action.updatedPath.id]: action.updatedPath
            };
        }

        case 'deleted_path': {
            const pathToDelete = paths[action.pathID];
            const parentID = pathToDelete.parentIDs[0]; // A path must have only one parentID

            // Filter out the path to be deleted from the parent's childIDs
            const updatedParentPath = {
                ...paths[parentID],
                childIDs: paths[parentID].childIDs.filter((id) => id !== action.pathID),
            };

            //Create a copy of the previous hierarchies without the deleted category
            const updatedPaths = { ...paths };
            delete updatedPaths[action.pathID];

            return {
                ...updatedPaths,
                [parentID]: updatedParentPath,
            }
        }

        default: {
            //@ts-expect-error
            throw Error(`Unknown action ${action.type}`)
        }
    }
}