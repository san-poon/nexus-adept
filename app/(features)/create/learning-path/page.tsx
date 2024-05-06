'use client';
import { PathsProvider } from "./components/PathsContext";
import { ActivePathProvider } from './components/ActivePathContext';
import { SavePaths } from './components/editor-tools';
import EditorTabs from "./components/EditorTabs";

export default function PathEditorPage() {
    return (
        <PathsProvider>
            <ActivePathProvider>
                <EditorTabs />
                <div className=" flex justify-center my-16">
                    <SavePaths />
                </div>
            </ActivePathProvider>
        </PathsProvider>
    );
}