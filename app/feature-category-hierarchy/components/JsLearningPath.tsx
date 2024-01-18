'use client';

import LearningPathNode from "./LearningPathNode";
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'node-1',
        type: "learningPath",
        sourcePosition: 'bottom',
        position: { x: 0, y: 0 },
        data: {
            label: 'JavaScript',
            value: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'
        },
    },
    {
        id: 'node-2',
        type: 'learningPath',
        targetPosition: 'top',
        position: { x: 0, y: 200 },
        data: {
            label: 'Asynchronous JavaScript',
            value: "Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result."
        },
    },
];

const initialEdges = [
    {
        id: 'edge-1',
        source: 'node-1',
        target: 'node-2',
        sourceHandle: 'a',
    }
]

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { learningPath: LearningPathNode };

export default function JsLearningPath() {
    return (
        <div className="h-screen">
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}