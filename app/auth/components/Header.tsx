
export default function Header({ label }: { label: string }) {
    return (
        <div className='w-full flex flex-col gap-y-2 items-center'>
            <h1 className="  text-3xl">
                Login
            </h1>
            <p className="text-sm">
                {label}
            </p>
        </div>
    )
}