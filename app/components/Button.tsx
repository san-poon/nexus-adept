type ButtonProps = {
    children: React.ReactNode;
    onClick: any;
}


export default function Button({ children, onClick, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >{children}</button>
    )
}