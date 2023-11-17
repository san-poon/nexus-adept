import QuestionInput from "./ui/question";
import OptionInput from "./ui/option";
import ExplanationInput from "./ui/explanations";
export default function CreateMCQs() {
    return (
        <div>
            <QuestionInput />
            <OptionInput optionNumber={1} />
            <OptionInput optionNumber={2} />
            <OptionInput optionNumber={3} />
            <OptionInput optionNumber={4} />
            <ExplanationInput />
        </div>
    )
}