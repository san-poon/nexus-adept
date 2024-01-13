/**
 * Anyone interested can create a lesson of a subject. However,
 * it has to be verified to become official. An official lesson
 * can be used as a part of a greater learning-path.
 * A personalized learning path depends on each individual. 
 * But the beginners can never create the learning path themselves,
 * instead experts of each field, will create learning path using the bite-sized lessons already created. 
 * The best example is 'JavaScript' for React vs 'JavaScript' for 'back-end/node.js'.
 * They may have similarites in 'fundamentals' but, when one tries to build something,
 * specific knowledge/practice is necessary. So, a subject must encompass all the topics necessary.
 * 
 * 
 * Start small and iterate: Begin with a few well-defined learning paths in high-demand areas and 
 * gradually expand based on user feedback and engagement.
 * 
 * Focus on quality over quantity: Prioritize well-structured, engaging, and 
 * accurate content over having a vast but unorganized repository.
 * Now, this is a subject, which anyone can use to contribute,
 * because, the platform doesn't allow contributing that isn't specified. 
 * 
 * Based on 'DAG', now we can update it as we like.
 */
const javascriptCurriculumGraph = [
    {
        id: 1,
        title: "JavaScript",
        childIDs: [2, 4, 6, 9, 12, 15],
        parentIDs: [],
    },
    {
        id: 2,
        title: "Introduction to JavaScript",
        childIDs: [3, 4, 5, 6],
        parentIDs: [1],
    },
    {
        id: 3,
        title: "What is JavaScript",
        parentIDs: [2],
        childIDs: [],
    },
    {
        id: 4,
        title: "All about variables",
        childIDs: [7, 8, 9, 10],
        parentIDs: [1],
    },
    {
        id: 5,
        title: "Variable Declarations",
        parentIDs: [4],
        childIDs: [],
    },
    {
        id: 6,
        title: "History of JavaScript",
        parentIDs: [2],
        childIDs: [],
    },
    {
        id: 7,
        title: "Hoisting",
        parentIDs: [4],
        childIDs: [],
    },
    {
        id: 8,
        title: "Variable Naming Rules",
        parentIDs: [4],
        childIDs: [],
    },
    {
        id: 9,
        title: "Variable Scopes",
        parentIDs: [4],
        childIDs: [],
    },
    {
        id: 10,
        title: "Data Types",
        parentIDs: [4],
        childIDs: [11],
    },
    {
        id: 11,
        title: "Primitive Types",
        parentIDs: [10],
        childIDs: [],
    },
    {
        id: 12,
        title: "Type Casting",
        childIDs: [13, 14],
        parentIDs: [1],
    },
    {
        id: 13,
        title: "Explicit & Implicit Type Casting",
        parentIDs: [12],
        childIDs: [],
    },
    {
        id: 14,
        title: "Type Conversion vs Coercion",
        parentIDs: [12],
        childIDs: [],
    },
    {
        id: 15,
        title: "Data Structures",
        childIDs: [16, 17, 18],
        parentIDs: [1],
    },
    {
        id: 16,
        title: "Structured Data: JSON",
        parentIDs: [15],
        childIDs: [],
    },
    {
        id: 17,
        title: "Keyed Collections",
        parentIDs: [15],
        childIDs: [],
    },
    {
        id: 18,
        title: "Indexed Collections",
        parentIDs: [15],
        childIDs: [],
    },
    {
        id: 19,
        title: "Equality comparisons",
        childIDs: [20, 21],
        parentIDs: [1],
    },
    {
        id: 20,
        title: "Value Comparison Operators",
        parentIDs: [19],
        childIDs: [],
    },
    {
        id: 21,
        title: "Equality Algorithms",
        parentIDs: [19],
        childIDs: [],
    },
    {
        id: 22,
        title: "Loops and Iterations",
        childIDs: [23, 24, 25, 26],
        parentIDs: [1],
    },
    {
        id: 23,
        title: "for statement",
        parentIDs: [22],
        childIDs: [],
    },
    {
        id: 24,
        title: "do...while statement",
        parentIDs: [22],
        childIDs: [],
    },
    {
        id: 25,
        title: "while statement",
        parentIDs: [22],
        childIDs: [],
    },
    {
        id: 26,
        title: "for...in statement",
        parentIDs: [22],
        childIDs: [],
    },
];

