import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';

export default function CategoryTabs({ children, categoryContent }: { children: React.ReactNode, categoryContent: CategoryContentProps }) {
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
                {/* <CategoryPreview content={categoryContent} /> */}
            </TabsContent>
        </Tabs>
    )
}