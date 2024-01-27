import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import { HierarchyTreeData } from '../lib/types';
import HierarchyPreview from './HierarchyPreview';

export default function HierarchyTabs({ children, hierarchies }: { children: React.ReactNode, hierarchies: HierarchyTreeData }) {
    return (
        <Tabs defaultValue="create" >
            <TabsList className="grid w-full grid-cols-2 sticky top-0 z-50">
                <TabsTrigger value="create">Create</TabsTrigger>
                <TabsTrigger value='preview'>Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
                {children}
            </TabsContent>
            <TabsContent value="preview">
                {/* This is where we need to load React Flow with 'hierarchies data' or 'hierarchiesNodes data' */}
                <HierarchyPreview />
            </TabsContent>
        </Tabs>
    )
}