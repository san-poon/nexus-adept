export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-md w-full p-6 rounded-lg shadow-md">
                {children}
            </div>
        </div>
    )
}