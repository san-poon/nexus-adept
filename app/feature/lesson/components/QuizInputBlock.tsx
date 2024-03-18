import { DynamicTextarea } from "./content-blocks";
import { AnOptionProps } from '../lib/types';

export default function QuizInputBlock({ quiz, onQuestionChange, onExplanationChange, onOptionsChange, onCheckedChange }: any) {
    return (
        <div className="m-1 md:m-2 p-1  md:p-4">
            <div>
                <label>Question:</label>
                <DynamicTextarea
                    // autoFocus={true} // gets weird with lesson-tab switching
                    rows={1}
                    className="p-4 my-2"
                    placeholder="Question..."
                    value={quiz.value.question}
                    onChange={(e) => onQuestionChange(quiz.id, e.target.value)}
                />
            </div>
            <div>
                <label>Choices:</label>
                {quiz.value.options.map((option: AnOptionProps, index: number) => (
                    <div key={option.id} className='flex items-center space-x-2 m-2'>
                        <input
                            className='h-4 w-4'
                            type="checkbox"
                            checked={option.isCorrect}
                            onChange={(e) => onCheckedChange(quiz.id, option.id, e.target.checked)}
                        />
                        <DynamicTextarea
                            rows={1}
                            className='p-1 md:p-4 my-2'
                            placeholder={`Option: ${index + 1}`}
                            value={option.value}
                            onChange={(e) => onOptionsChange(quiz.id, option.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <label>Explanation:</label>
                <DynamicTextarea
                    className='p-1 md:p-4 my-2'
                    rows={1}
                    placeholder='Clear and concise explanation here...'
                    value={quiz.value.explanation}
                    onChange={(e) => onExplanationChange(quiz.id, e.target.value)}
                />
            </div>
        </div>
    )
}