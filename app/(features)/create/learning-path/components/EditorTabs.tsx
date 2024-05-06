import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import { Paths } from '../lib/types';
import { useState } from 'react';
import Editor from './Editor';

export default function EditorTabs() {
    const [expandedHierarchies, setExpandedHierarchies] = useState(['ROOT']);

    const handleExpandedChange = (categoryID: string) => {
        setExpandedHierarchies((prev: Array<string>) => {
            const isExpanded = expandedHierarchies?.includes(categoryID);
            if (isExpanded) {
                return prev.filter((expandedID) => expandedID !== categoryID)
            }
            return [
                ...prev, categoryID
            ];
        })
    }
    return (
        <Tabs defaultValue="edit" className='min-h-[78vh] w-full'>
            <TabsList className="grid w-full grid-cols-2 sticky top-16 z-10">
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value='preview'>Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
                <Editor />
            </TabsContent>
            <TabsContent value="preview" className="min-h-screen">
                This is a preview section.
            </TabsContent>
        </Tabs>
    )
}