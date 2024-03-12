import { QuizData } from "@/app/lib/types";
import { highlightCode } from "@/lib/utils";

export default function transformQuiz(quizzes: QuizData) {

    const transformedQuizzes = Promise.all(quizzes.map(async (quiz) => {
        if (quiz.code === "" || quiz.code === undefined) {
            return "";
        } else {
            return {
                ...quiz,
                code: await highlightCode({ code: quiz.code, lang: 'javascript' })
            }
        }
    }))
    return transformedQuizzes;
}

