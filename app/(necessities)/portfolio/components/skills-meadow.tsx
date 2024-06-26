import {
    Card,
    CardContent,
    CardTitle,
    CardHeader
} from '@/components/ui/card';

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
            details: 'Designed and managed databases using `@vercel/postgres`, ensuring efficient data storage and retrieval for the dynamic content on PlayLearnForge.'
        },

        {
            skill: 'Git & GitHub',
            details: 'Conducted seamless collaboration using Git for version control, orchestrating the development journey of PlayLearnForge on GitHub.'
        },

    ];

    return (
        <div className="md:p-4 md:mt-6">
            <h2 className="text-2xl text-center mb-2 md:mb-4">Skills | Tools</h2>
            <div className="grid grid-cols-1 gap-12 md:mx-12 lg:mx-60">
                {skillsDetails.map((skill, index) => (
                    <Card key={index} className=' dark:bg-inherit bg-inherit rounded-3xl shadow-none dark:border-neutral-600'>
                        <CardHeader className=' text-center rounded-t-3xl'>
                            <CardTitle className=' tracking-wider font-normal text-xl'>{skill.skill}</CardTitle>
                        </CardHeader>
                        <CardContent >
                            <p className={` leading-9 md:text-lg`}>{skill.details}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}