export default function ThemeSwitcher({ darkMode, onToggle }) {
    return (
        <button
            className="fixed right-4 top-4 px-2 py-3 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
            onClick={onToggle}>
            {darkMode ? 'light' : 'dark'}
        </button>
    )
}