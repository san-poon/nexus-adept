import { Lesson, Paths } from "./types";

export const initialLesson: Lesson = {
    'introduction': {
        id: 'introduction',
        elementType: 'text/introduction',
        value: "",
        prevBlockID: null, // for first node. Lesson title is part of Paths itself
        nextBlockID: 'objective',
        parentID: null,
    },
    'objective': {
        id: 'objective',
        elementType: 'text/objective',
        value: "",
        prevBlockID: 'introduction',
        nextBlockID: null, // for last node
        parentID: null,
    },
}
export const initialPaths: Paths = {
    ['ROOT']: {
        id: 'ROOT',
        title: "",
        childIDs: [],
        parentIDs: [],
        lesson: initialLesson,
    },
};