// Placeholder data to test

const users = [
    {
        id: 'uuid-0',
        firstName: 'Sanjib',
        lastName: 'Poon',
        email: 'sanjibpoon@gmail.com',
        password: '123456',
        bio: 'Product Engineer | Full-stack Developer | Next.js | React.js | SQL',
        profile_picture_url: ''
    },
];

const categories = [
    {
        id: 'uuid-0',
        name: 'Programming',
        parentIDs: []
    },
    {
        id: 'uuid-1',
        name: 'Web Development',
        parentIDs: ["uuid-0"]
    },
];

module.exports = {
    users,
    categories
};