'use client';

import ReactFlow, {
    Controls,
    Node,
    Edge,
    Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { findBoundingBox } from "../lib/utils";
import LearningPathNode from "./LearningPathNode";

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { learningPath: LearningPathNode };

export default function HierarchyPreview() {

    const boundingBox = findBoundingBox(nodes);

    return (
        <div className=" h-[90vh]">
            <ReactFlow
                proOptions={{ hideAttribution: true }}
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                panOnScroll
                onlyRenderVisibleElements
                translateExtent={boundingBox}
                fitView
                fitViewOptions={{ maxZoom: 1.2 }}
            >
                <Controls />
            </ReactFlow>
        </div>
    )
}

const nodes: Node[] = [
    {
        id: 'ROOT',
        type: "learningPath",
        position: { x: 0, y: 0 },
        data: {
            label: 'Full-stack with Next.js',
            introduction: ''
        },
    },
    {
        id: '1',
        type: 'learningPath',
        position: { x: 0, y: 100 },
        data: {
            label: 'HTML, CSS & JS',
            introduction: ""
        },
    },
    {
        id: '2',
        type: "learningPath",
        position: { x: 0, y: 200 },
        data: {
            label: 'React',
            introduction: ""
        },
    },
    {
        id: '3',
        type: "learningPath",
        position: { x: 0, y: 300 },
        targetPosition: Position.Left,
        data: {
            label: 'Next.js',
            introduction: ""
        },
    },
    {
        id: '4',
        type: "learningPath",
        position: { x: 300, y: 100 },
        data: {
            label: 'HTML',
            introduction: ""
        },
    },
    {
        id: '5',
        type: "learningPath",
        position: { x: 300, y: 200 },
        data: {
            label: 'CSS',
            introduction: ""
        },
    },
    {
        id: '6',
        type: "learningPath",
        position: { x: 300, y: 300 },
        data: {
            label: 'JS',
            introduction: ""
        },
    },
    {
        id: '7',
        type: "learningPath",
        position: { x: 500, y: 100 },
        data: {
            label: 'Semantic HTML',
            introduction: ""
        },
    },
    {
        id: '8',
        type: "learningPath",
        position: { x: 500, y: 200 },
        data: {
            label: 'Layout and Positioning',
            introduction: ""
        },
    },
];

const edges: Edge[] = [
    {
        id: 'ROOT-0',
        source: 'ROOT',
        target: '1',
    },
    {
        id: '1-2',
        source: '1',
        target: '2',
    },
    {
        id: '2-3',
        source: '2',
        target: '3',
    },
    {
        id: '1-4',
        source: '1',
        target: '4',
        sourceHandle: 'right',
        targetHandle: 'left',
    },
    {
        id: '4-5',
        source: '4',
        target: '5',
    },
    {
        id: '5-6',
        source: '5',
        target: '6',
    },
    {
        id: '4-7',
        source: '4',
        target: '7',
        sourceHandle: 'right',
        targetHandle: 'left',
    },
    {
        id: '5-8',
        source: '5',
        target: '8',
        sourceHandle: 'right',
        targetHandle: 'left'
    }

];