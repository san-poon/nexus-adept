import { DynamicTextarea } from "./content-blocks";
import { AnOptionProps } from '../types';

export default function QuizInputBlock({ quiz, onQuestionChange, onExplanationChange, onOptionsChange, onCheckedChange }: any) {
    return (
        <div className="m-2">
            <div>
                <label>Question</label>
                <DynamicTextarea
                    // autoFocus={true} // gets weird with lesson-tab switching
                    rows={1}
                    className="px-2 py-2 my-2 bg-neutral-100 dark:bg-neutral-800"
                    placeholder="Question..."
                    value={quiz.value.question}
                    onChange={(e) => onQuestionChange(quiz.id, e.target.value)}
                />
            </div>
            <div>
                <label>Options</label>
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
                            className='px-2 py-2 my-2 bg-neutral-100 dark:bg-neutral-800'
                            placeholder={`Option: ${index + 1}`}
                            value={option.value}
                            onChange={(e) => onOptionsChange(quiz.id, option.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <label>Explanation</label>
                <DynamicTextarea
                    className='px-2 py-2 my-2 bg-neutral-100 dark:bg-neutral-800'
                    rows={2}
                    placeholder='Explanation... Make it clear and concise.'
                    value={quiz.value.explanation}
                    onChange={(e) => onExplanationChange(quiz.id, e.target.value)}
                />
            </div>
        </div>
    )
}