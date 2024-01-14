import { useCallback } from "react";
import { Handle, Position } from 'reactflow';
import styles from '../styles.module.css';

export default function NodeTextUpdater({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="h-15 border-2 border-neutral-700 p-2 rounded-md">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
                <label htmlFor="text" className="block text-base dark:text-neutral-50 text-neutral-900">
                    Text:
                </label>
                <input type="text" id="text" name="text" onChange={onChange} className=" rounded-3xl px-2 dark:bg-inherit bg-inherit border-2 dark:border-neutral-700" placeholder="First Name" />
            </div>
            <Handle type="source" position={Position.Bottom} id="b" isConnectable={true} />
        </div>
    )
}