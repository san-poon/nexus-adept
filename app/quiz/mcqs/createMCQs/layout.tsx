
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center dark:bg-slate-900">
            <div className="max-w-md w-full p-6 rounded-lg shadow-md dark:bg-slate-800">
                {children}
            </div>
        </div>
    )
}