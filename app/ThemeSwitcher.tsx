export default function ThemeSwitcher({ darkMode, onToggle }) {
    return (
        <button
            className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800"
            onClick={onToggle}>
            {darkMode ? 'light' : 'dark'}
        </button>
    )
}