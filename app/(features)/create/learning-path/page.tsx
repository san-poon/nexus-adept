'use client';
import LearningPathSaver from "./components/LearningPathSaver";
import { PathsProvider } from "./components/PathsContext";
import PathsEditor from "./components/PathsEditor";

export default function PathEditorPage() {
    return (
        <PathsProvider>
            <PathsEditor />
            <div className=" flex justify-center my-16">
                <LearningPathSaver />
            </div>
        </PathsProvider>
    );
}