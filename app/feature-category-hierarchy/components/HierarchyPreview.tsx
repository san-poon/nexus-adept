'use client';

import ReactFlow, {
    Controls,
    Background,
} from 'reactflow';
import 'reactflow/dist/style.css';


export default function HierarchyPreview() {
    return (
        <div className=" h-[90vh]">
            <ReactFlow
                nodes={nodes}
                edges={edges}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

const edges = [{ id: '1-2', source: '1', target: '2' }];

const nodes = [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
    },
];