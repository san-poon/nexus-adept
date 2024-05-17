'use client';
import { PathsProvider } from "./components/PathsContext";
import { ActivePathProvider } from './components/ActivePathContext';
import { SavePaths } from './components/editor-tools';
import Editor from "./components/Editor";

export default function PathEditorPage() {
    return (
        <PathsProvider>
            <ActivePathProvider>
                <div className="min-h-[78vh]">
                    <Editor />
                </div>
                <div className=" flex justify-center my-16">
                    <SavePaths />
                </div>
            </ActivePathProvider>
        </PathsProvider>
    );
}