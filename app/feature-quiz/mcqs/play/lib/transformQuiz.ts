import { QuizData } from "@/app/lib/types";
import { codeToHtml } from "@/lib/utils";

export default function transformQuiz(quizzes: QuizData) {
    const transformedQuizzes = quizzes.map((quiz) => ({
        ...quiz,
        code: codeToHtml({ code: quiz.code, lang: 'javascript' })
    }));

    return transformedQuizzes;
} 