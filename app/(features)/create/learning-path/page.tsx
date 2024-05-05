'use client';
import LearningPathSaver from "./components/LearningPathSaver";
import { PathsProvider } from "./components/PathsContext";
import { ActivePathProvider } from './components/ActivePathContext';
import PathsEditor from "./components/PathsEditor";

export default function PathEditorPage() {
    return (
        <PathsProvider>
            <ActivePathProvider>
                <PathsEditor />
                <div className=" flex justify-center my-16">
                    <LearningPathSaver />
                </div>
            </ActivePathProvider>
        </PathsProvider>
    );
}