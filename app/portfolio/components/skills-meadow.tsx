import Card from "@/app/components/Card";

export default function SkillsMeadow() {
    const skillsDetails = [
        { skill: 'React.js', details: 'Built interactive user interfaces for web applications.' },
        { skill: 'Next.js', details: 'Developed fast and scalable React applications with server-side rendering.' },
        { skill: 'TailwindCSS', details: 'Styled web applications with a utility-first CSS framework.' },
        { skill: 'shadcn-ui', details: 'Designed UI components for a seamless user experience.' },
        { skill: '@vercel/postgres', details: 'Managed databases for efficient data storage and retrieval.' },
    ];

    return (
        <div className="skills-meadow p-4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Skills Meadow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsDetails.map((skill, index) => (
                    <Card key={index}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{skill.skill}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{skill.details}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}