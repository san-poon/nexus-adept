'use client';
import { PathsProvider } from "./components/PathsContext";
import { ActivePathProvider } from './components/ActivePathContext';
import Editor from "./components/Editor";

export default function PathEditorPage() {
    return (
        <div className="mx-1 md:mx-4 my-2">
            <PathsProvider>
                <ActivePathProvider>
                    <div className="min-h-[100vh]">
                        <Editor />
                    </div>
                </ActivePathProvider>
            </PathsProvider>
        </div>
    );
}