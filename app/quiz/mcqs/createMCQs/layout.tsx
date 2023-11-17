
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center ">
            <div className="max-w-2xl w-full p-6 rounded-lg shadow-md ">
                {children}
            </div>
        </main>
    )
}