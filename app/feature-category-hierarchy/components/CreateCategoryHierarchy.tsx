'use client';

import ReactFlow, {
    Controls,
    Background,
    applyEdgeChanges,
    applyNodeChanges,
    NodeChange,
    EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useState, useCallback } from 'react';

const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: 'JavaScript' },
        type: 'input',
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'Introduction to JavaScript' }
    },
];

const initialEdges = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        label: 'chapter',

    },

]

export default function CreateCategoryHierarchy() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const handleNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const handleEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    return (
        <div className="border-2 dark:border-neutral-700 m-2 md:m-4 h-screen">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={handleNodesChange}
                onEdgesChange={handleEdgesChange}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}