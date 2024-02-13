import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import { LessonData } from "../types";
import LessonPreview from "./LessonPreview";

export default function LessonTabs({ children, lessonContent }: { children: React.ReactNode, lessonContent: LessonData }) {
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
                <LessonPreview content={lessonContent} />
            </TabsContent>
        </Tabs>
    )
}