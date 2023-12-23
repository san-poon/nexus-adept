import clsx from 'clsx';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                'flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors',
                'hover:dark:bg-neutral-800 hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-slate-800',
                'aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
                className,
            )}
        >
            {children}
        </button>
    );
}
