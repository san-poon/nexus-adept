import { QuizData } from "@/app/lib/types";
import { highlightCode } from "@/lib/utils";

export default async function transformQuiz(quizzes: QuizData) {
    try {
        const transformedQuizzes = Promise.all(quizzes.map(async (quiz) => {
            if (!quiz.code) {
                return quiz;
            } else {
                return {
                    ...quiz,
                    code: await highlightCode({ code: quiz.code, lang: 'javascript' })
                }
            }
        }))
        return transformedQuizzes;
    } catch (error) {
        console.log.bind(console);
    }
}

