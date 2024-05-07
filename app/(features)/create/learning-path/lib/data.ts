import { Lesson, Paths } from "./types";

export const initialLesson: Lesson = {
    'INTRODUCTION': {
        id: 'INTRODUCTION',
        elementType: 'text',
        value: "",
        prevBlockID: null, // for first node. Lesson title is part of Paths itself
        nextBlockID: 'OBJECTIVE',
        parentBlockID: null,
    },
    'OBJECTIVE': {
        id: 'OBJECTIVE',
        elementType: 'text',
        value: "",
        prevBlockID: 'INTRODUCTION',
        nextBlockID: null, // for last node
        parentBlockID: null,
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