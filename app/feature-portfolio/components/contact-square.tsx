import Link from "next/link";

// Portfolio contacts
export default function ContactSquare() {
    const contactInfo = [
        { label: 'Email', value: 'sanjibpoon123@gmail.com', url: "" },
        { label: 'GitHub', value: 'github.com/san-poon', url: "https://github.com/san-poon" },
        { label: 'LinkedIn', value: 'linkedin.com/in/san-poon', url: "http://linkedin.com/in/san-poon" },
        { label: 'X/Twitter', value: 'twitter.com/san_poon_2', url: 'https://twitter.com/san_poon_2' },
    ];

    return (
        <div className="mt-6 p-2">
            <h2 className="text-2xl font-semibold mb-4">Contact Square</h2>
            <div className="">
                <ul className="list-disc ml-6 md:ml-20">
                    {contactInfo.map(({ label, value, url }) => (
                        <li key={label} className="mb-2 leading-relaxed">
                            <span className="font-semibold">{label}:</span> <Link href={url}>{value}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
