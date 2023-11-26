import QuestionInput from "./components/question";
import OptionInput from "./components/option";
import ExplanationInput from "./components/explanations";
export default function Page() {
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