'use client';

import { Handle, Position, NodeProps } from 'reactflow';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export default function LearningPathNode({ data, isConnectable }: NodeProps) {
    return (
        <div className='border-2 border-neutral-700 rounded-3xl dark:bg-neutral-900 bg-neutral-50'>
            <Handle className=' opacity-0' type="target" id="a" position={Position.Top} isConnectable={isConnectable} />
            <div>
                <Popover>
                    <PopoverTrigger asChild >
                        <Button className='dark:bg-neutral-900 outline-none'>{data.label}</Button>
                    </PopoverTrigger>
                    <PopoverContent className='border-2 shadow-lg rounded-3xl p-4 bg-neutral-50 dark:bg-neutral-800'>
                        <h1 className='text-xl text-center mb-4'>{data.label}</h1>
                        {data.introduction}
                    </PopoverContent>
                </Popover>
            </div>
            <Handle className='opacity-0' type="source" id="b" position={Position.Bottom} isConnectable={isConnectable} />
        </div>
    )
}