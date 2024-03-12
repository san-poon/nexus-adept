import { QuizData } from "@/app/lib/types";
import { highlightCode } from "@/lib/utils";

export default function transformQuiz(quizzes: QuizData) {
    return (
        Promise.all(quizzes.map(async (quiz) => ({
            ...quiz,
            code: await highlightCode({ code: quiz.code, lang: 'javascript' })
        })))
    );
}