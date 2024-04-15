export type QuizData = {
    id: number;
    question: string;
    code: string;
    options: {
        option: string;
        value: string;
        correct: boolean;
    }[];
    explanation: string;
}[];