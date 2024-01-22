/**
 * Fetch should return data in this format.
 * This is a placeholder data, the actual data must be
 * fetched from the database.
 * 
 * This data is to load catgory-hierarchy graph using custom 
 * 'ReactFlow'
 */

const sampleData = [
    {
        id: '1',
        title: "JavaScript",
        childIDs: ['2', '4', '6', '9', '12', '15'],
        parentIDs: [],
    },
    {
        id: '2',
        title: "Introduction to JavaScript",
        childIDs: ['3', '5', '6'],
        parentIDs: ['1'],
    },
    {
        id: '3',
        title: "What is JavaScript",
        parentIDs: ['2'],
        childIDs: [],
    },
    {
        id: '4',
        title: "All about variables",
        childIDs: ['7', '8', '9', '10'],
        parentIDs: ['1'],
    },
    {
        id: '5',
        title: "Variable Declarations",
        parentIDs: ['4'],
        childIDs: [],
    },
    {
        id: '6',
        title: "History of JavaScript",
        parentIDs: ['2'],
        childIDs: [],
    },
    {
        id: '7',
        title: "Hoisting",
        parentIDs: ['4'],
        childIDs: [],
    },
    {
        id: '8',
        title: "Variable Naming Rules",
        parentIDs: ['4'],
        childIDs: [],
    },
    {
        id: '9',
        title: "Variable Scopes",
        parentIDs: ['4'],
        childIDs: [],
    },
    {
        id: '10',
        title: "Data Types",
        parentIDs: ['4'],
        childIDs: ['11'],
    },
    {
        id: '11',
        title: "Primitive Types",
        parentIDs: ['10'],
        childIDs: [],
    },
    {
        id: '12',
        title: "Type Casting",
        childIDs: ['13', '14'],
        parentIDs: ['1'],
    },
    {
        id: '13',
        title: "Explicit & Implicit Type Casting",
        parentIDs: ['12'],
        childIDs: [],
    },
    {
        id: '14',
        title: "Type Conversion vs Coercion",
        parentIDs: ['12'],
        childIDs: [],
    },
    {
        id: '15',
        title: "Data Structures",
        childIDs: ['16', '17', '18'],
        parentIDs: ['1'],
    },
    {
        id: '16',
        title: "Structured Data: JSON",
        parentIDs: ['15'],
        childIDs: [],
    },
    {
        id: '17',
        title: "Keyed Collections",
        parentIDs: ['15'],
        childIDs: [],
    },
    {
        id: '18',
        title: "Indexed Collections",
        parentIDs: ['15'],
        childIDs: [],
    },
    {
        id: '19',
        title: "Equality comparisons",
        childIDs: ['20', '21'],
        parentIDs: ['1'],
    },
    {
        id: '20',
        title: "Value Comparison Operators",
        parentIDs: ['19'],
        childIDs: [],
    },
    {
        id: '21',
        title: "Equality Algorithms",
        parentIDs: ['19'],
        childIDs: [],
    },
    {
        id: '22',
        title: "Loops and Iterations",
        childIDs: ['23', '24', '25', '26'],
        parentIDs: ['1'],
    },
    {
        id: '23',
        title: "for statement",
        parentIDs: ['22'],
        childIDs: [],
    },
    {
        id: '24',
        title: "do...while statement",
        parentIDs: ['22'],
        childIDs: [],
    },
    {
        id: '25',
        title: "while statement",
        parentIDs: ['22'],
        childIDs: [],
    },
    {
        id: '26',
        title: "for...in statement",
        parentIDs: ['22'],
        childIDs: [],
    },

];