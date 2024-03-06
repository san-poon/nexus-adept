import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import { HierarchyTreeData } from '../lib/types';
import HierarchyPreview from './HierarchyPreview';
import { useState } from 'react';

export default function HierarchyTabs({ children, hierarchies }: { children: React.ReactNode, hierarchies: HierarchyTreeData }) {
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
        <Tabs defaultValue="create" >
            <TabsList className="grid w-full grid-cols-2 sticky top-16 z-50">
                <TabsTrigger value="create">Create</TabsTrigger>
                <TabsTrigger value='preview'>Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
                {children}
            </TabsContent>
            <TabsContent value="preview" className="min-h-screen">
                <HierarchyPreview
                    expandedHierarchies={expandedHierarchies}
                    onExpandedChange={handleExpandedChange}
                    hierarchies={hierarchies}
                />
            </TabsContent>
        </Tabs>
    )
}