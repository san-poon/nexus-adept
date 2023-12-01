// Portfolio contacts
export default function ContactSquare() {
    const contactInfo = [
        { label: 'Email', value: 'sanjibpoon123@gmail.com' },
        { label: 'GitHub', value: 'github.com/san-poon' },
        { label: 'LinkedIn', value: 'linkedin.com/in/san-poon' },
        { label: 'Twitter', value: 'twitter.com/san_poon2' },
    ];

    return (
        <div className="mt-6 p-2">
            <h2 className="text-2xl font-semibold mb-4">Contact Square</h2>
            <div className="bg-gradient-to-r dark:from-gray-800 dark:to-gray-600 from-gray-300 to-gray-500 p-8 rounded-md shadow-lg">
                <ul className="list-disc ml-6">
                    {contactInfo.map(({ label, value }) => (
                        <li key={label} className="mb-2">
                            <span className="font-bold">{label}:</span> {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
