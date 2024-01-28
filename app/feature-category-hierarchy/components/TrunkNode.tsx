'use client';

import { Handle, Position, NodeProps } from 'reactflow';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export default function TrunkNode({ data, isConnectable }: NodeProps) {
    return (
        <div className=''>
            <Handle className=' opacity-0' type="target" id="a" position={Position.Top} isConnectable={isConnectable} /> {/* Default target handler */}
            <Handle className=' opacity-0' type="target" id="b" position={Position.Left} isConnectable={isConnectable} />
            <div>
                <Popover>
                    <PopoverTrigger asChild >
                        <Button className="dark:bg-yellow-800/80 bg-yellow-200">{data.label}</Button>
                    </PopoverTrigger>
                    <PopoverContent className='border-2 shadow-lg rounded-3xl p-4 bg-neutral-50 dark:bg-neutral-800'>
                        <h1 className='text-xl text-center mb-4'>{data.label}</h1>
                        {data.introduction}
                    </PopoverContent>
                </Popover>
            </div>

            <Handle className='opacity-0' type="source" id="c" position={Position.Bottom} isConnectable={isConnectable} /> {/*Default source handler */}
            <Handle className='opacity-0' type="source" id="d" position={Position.Right} isConnectable={isConnectable} />
        </div>
    )
}