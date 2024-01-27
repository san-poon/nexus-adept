'use client';

import ReactFlow, {
    Controls,
    Background,
    applyEdgeChanges,
    applyNodeChanges,
    MiniMap,
    Node,
    Edge,
    addEdge,
    Connection,
    OnNodesChange,
    OnEdgesChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useState, useCallback } from 'react';
import NodeTextUpdater from './NodeTextUpdater';

const initialNodes: Node[] = [
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
    {
        id: "3",
        type: 'nodeTextUpdater',
        position: { x: 100, y: 200 },
        data: { value: 123 }
    }
];

const initialEdges: Edge[] = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        label: 'chapter',

    },

]

// Either define the nodeTypes outside of the component to prevent 
// re-renderings/bugs or use 'useMemo' hook inside the component.
const nodeTypes = { nodeTextUpdater: NodeTextUpdater };

export default function CategoryPreview() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const handleNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const handleEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    const handleNodesConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div className="border-2 dark:border-neutral-700 m-2 md:m-4 h-screen">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={handleNodesChange}
                onEdgesChange={handleEdgesChange}
                onConnect={handleNodesConnect}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}

// Output from hierarchy creation 
const hierarchyTree = {
    { "1d4ecfc8-3351-4d79-8d71-ebae303b0e12": { "id": "1d4ecfc8-3351-4d79-8d71-ebae303b0e12", "title": "Full-stack with Next.js", "childIDs": ["1f09fa91-2484-47f2-bceb-3e00185ffbe1", "46f74b51-9ab4-4441-8da2-679e89e14d2b", "d17c7875-4966-41e6-959a-ac4f83a84882"], "parentIDs": [] }, "1f09fa91-2484-47f2-bceb-3e00185ffbe1": { "id": "1f09fa91-2484-47f2-bceb-3e00185ffbe1", "title": "HTML, CSS & JS", "childIDs": ["f8a25013-adf1-4087-8dc9-a5e2f2fd92b8", "916ab5f8-f9d5-460f-aa9a-4f1354dc0dcd", "a480ec87-9e4f-47a6-bb19-d5fc55044b91"], "parentIDs": ["1d4ecfc8-3351-4d79-8d71-ebae303b0e12"] }, "f8a25013-adf1-4087-8dc9-a5e2f2fd92b8": { "id": "f8a25013-adf1-4087-8dc9-a5e2f2fd92b8", "title": "HTML", "childIDs": ["bb767ef6-0bf1-46ff-b988-7edfbe596c02"], "parentIDs": ["1f09fa91-2484-47f2-bceb-3e00185ffbe1"] }, "46f74b51-9ab4-4441-8da2-679e89e14d2b": { "id": "46f74b51-9ab4-4441-8da2-679e89e14d2b", "title": "React", "childIDs": [], "parentIDs": ["1d4ecfc8-3351-4d79-8d71-ebae303b0e12"] }, "d17c7875-4966-41e6-959a-ac4f83a84882": { "id": "d17c7875-4966-41e6-959a-ac4f83a84882", "title": "Next.js", "childIDs": [], "parentIDs": ["1d4ecfc8-3351-4d79-8d71-ebae303b0e12"] }, "bb767ef6-0bf1-46ff-b988-7edfbe596c02": { "id": "bb767ef6-0bf1-46ff-b988-7edfbe596c02", "title": "Semantic HTML", "childIDs": [], "parentIDs": ["f8a25013-adf1-4087-8dc9-a5e2f2fd92b8"] }, "916ab5f8-f9d5-460f-aa9a-4f1354dc0dcd": { "id": "916ab5f8-f9d5-460f-aa9a-4f1354dc0dcd", "title": "CSS", "childIDs": ["e3791c15-9c4c-4841-94e7-be60ed4b1918"], "parentIDs": ["1f09fa91-2484-47f2-bceb-3e00185ffbe1"] }, "a480ec87-9e4f-47a6-bb19-d5fc55044b91": { "id": "a480ec87-9e4f-47a6-bb19-d5fc55044b91", "title": "JS", "childIDs": [], "parentIDs": ["1f09fa91-2484-47f2-bceb-3e00185ffbe1"] }, "e3791c15-9c4c-4841-94e7-be60ed4b1918": { "id": "e3791c15-9c4c-4841-94e7-be60ed4b1918", "title": "Layout & Positioning", "childIDs": [], "parentIDs": ["916ab5f8-f9d5-460f-aa9a-4f1354dc0dcd"] } }
}