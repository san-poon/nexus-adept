export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg">
            {children}
        </div>
    );
}