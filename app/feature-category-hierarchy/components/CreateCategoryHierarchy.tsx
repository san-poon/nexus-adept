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

export default function CreateCategoryHierarchy() {
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