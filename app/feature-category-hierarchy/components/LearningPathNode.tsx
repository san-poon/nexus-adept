'use client';

import { useCallback } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export default function LearningPathNode({ data, isConnectable }: NodeProps) {
    return (
        <div className='border-2 border-neutral-700 p-2 rounded-md'>
            <Handle type="target" id="a" position={Position.Top} isConnectable={isConnectable} />
            <div>
                <Popover>
                    <PopoverTrigger asChild className=''>
                        <Button className='dark:bg-neutral-900 outline-none'>{data.label}</Button>
                    </PopoverTrigger>
                    <PopoverContent className='border-2 shadow-lg rounded-3xl p-4 bg-neutral-50 dark:bg-neutral-800'>
                        {data.value}
                    </PopoverContent>
                </Popover>
            </div>
            <Handle type="source" id="b" position={Position.Bottom} isConnectable={isConnectable} />
        </div>
    )
}