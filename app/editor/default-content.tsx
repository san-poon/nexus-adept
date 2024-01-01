export const defaultEditorContent = {
    type: "doc",
    content: [
        {
            type: 'heading',
            attrs: { level: 1 },
            content: [{ type: "text", text: "Lesson Title Here..." }],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "A captivating introduction Here..."
                },
            ],
        },
        {
            type: "heading",
            attrs: { level: 2 },
            content: [
                {
                    type: "text",
                    text: "You will learn..."
                },
                {
                    type: "listItem",
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                { type: "text", text: "Obective 1" },
                                { type: "text", text: "Objective 2" },
                                { type: "text", text: "..." },
                            ],
                        },
                    ],
                },
            ],
        },
    ]
}