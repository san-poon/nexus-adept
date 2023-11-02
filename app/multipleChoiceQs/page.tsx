'use client'

import React, { useState } from 'react';

const CreateMCQQuiz = () => {
    const [question, setQuestion] = useState('');
    const [choices, setChoices] = useState(['', '']);
    const [hint, setHint] = useState('');
    const [explanation, setExplanation] = useState('');

    const addChoice = () => {
        if (choices.length < 4) {
            setChoices([...choices, '']);
        }
    };

    const removeChoice = (index) => {
        if (choices.length > 2) {
            const updatedChoices = [...choices];
            updatedChoices.splice(index, 1);
            setChoices(updatedChoices);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-center mb-4">Create a New MCQ Quiz</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="question" className="block text-sm font-medium text-gray-600">Question:</label>
                    <textarea
                        id="question"
                        name="question"
                        rows="3"
                        className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-indigo-200"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Answer Choices:</label>
                    <div className="mt-2 space-y-2">
                        {choices.map((choice, index) => (
                            <div key={index} className="flex space-x-2">
                                <input
                                    type="text"
                                    name="choice[]"
                                    value={choice}
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:ring focus:ring-indigo-200"
                                    onChange={(e) => {
                                        const updatedChoices = [...choices];
                                        updatedChoices[index] = e.target.value;
                                        setChoices(updatedChoices);
                                    }}
                                    required
                                />
                                {choices.length > 2 && (
                                    <button
                                        type="button"
                                        onClick={() => removeChoice(index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        {choices.length < 4 && (
                            <button
                                type="button"
                                onClick={addChoice}
                                className="text-indigo-500 hover:text-indigo-700"
                            >
                                Add Choice
                            </button>
                        )}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="hint" className="block text-sm font-medium text-gray-600">Hint (Optional):</label>
                    <input
                        type="text"
                        id="hint"
                        name="hint"
                        value={hint}
                        className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-indigo-200"
                        onChange={(e) => setHint(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="explanation" className="block text-sm font-medium text-gray-600">Explanation (Optional):</label>
                    <textarea
                        id="explanation"
                        name="explanation"
                        rows="3"
                        value={explanation}
                        className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-indigo-200"
                        onChange={(e) => setExplanation(e.target.value)}
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Submit Quiz
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateMCQQuiz;
