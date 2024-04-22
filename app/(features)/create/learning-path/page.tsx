import LearningPathEditor from "./components/LearningPathEditor";
import LearningPathSaver from "./components/LearningPathSaver";

export default function LearningPathEditorPage() {
    return (
        <>
            <LearningPathEditor />
            <div className=" flex justify-center my-16">
                <LearningPathSaver />
            </div>
        </>
    )
}