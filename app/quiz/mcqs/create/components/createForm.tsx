
import QuestionInput from "./question";
import OptionInput from "./option";
import ExplanationInput from "./explanations";
import { createQuiz } from "@/app/lib/action";
import SubmitButton from "@/app/components/SubmitButton";

export default function CreateForm() {
    return (
        <form
            action={createQuiz}
            className="max-w-2xl mx-auto p-4"
        >
            <QuestionInput />
            <div className="space-y-4">
                {[1, 2, 3, 4].map((optionNumber) => (
                    <OptionInput key={optionNumber} optionNumber={optionNumber} />
                ))}
            </div>
            <ExplanationInput />
            <SubmitButton>Save</SubmitButton>
        </form>
    );
}
