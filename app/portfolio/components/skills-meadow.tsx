import Card from "@/app/components/Card";

export default function SkillsMeadow() {
    const skillsDetails = [
        {
            skill: 'React.js',
            details: 'Crafted interactive user interfaces for web applications, bringing life to the user experience on the PlayLearnForge platform.'
        },
        {
            skill: 'Next.js',
            details: 'Implemented full-stack functionality seamlessly with Next.js, ensuring optimal performance and a smooth user journey on PlayLearnForge.'
        },
        {
            skill: 'CSS/TailwindCSS',
            details: 'Styled the PlayLearnForge platform adhering to Material Design guidelines, creating visually appealing interfaces for both light and dark modes.'
        },
        {
            skill: 'SQL (@vercel/postgres)',
            details: 'Designed and managed databases using @vercel/postgres, ensuring efficient data storage and retrieval for the dynamic content on PlayLearnForge.'
        },

        {
            skill: 'Git & GitHub',
            details: 'Conducted seamless collaboration using Git for version control, orchestrating the development journey of PlayLearnForge on GitHub.'
        },

    ];

    return (
        <div className="p-4 mt-6">
            <h2 className="text-2xl font-bold dark:text-gray-200 mb-4">Skills/Tools Meadow</h2>
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