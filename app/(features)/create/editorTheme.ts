import { EditorThemeClasses } from "lexical";

const theme: EditorThemeClasses = {
  ltr: ' text-left',
  rtl: ' text-right',
  paragraph: 'leading-8 my-4',
  heading: {
    h1: 'text-3xl mb-6 font-medium tracking-tight',
    h2: 'text-2xl mt-8 mb-4 font-medium',
    h3: 'text-xl mt-6 mb-2 font-medium',
    h4: "text-lg mt-4 mb-2 font-medium"
  },
  text: {
    bold: 'font-bold dark:opacity-90',
    italic: 'italic',
    underline: 'underline underline-offset-4',
    strikethrough: 'line-through'
  },
  list: {
    listitem: 'my-2 ps-1',
    ol: 'list-decimal ms-8 leading-8 marker:text-neutral-700 dark:marker:text-neutral-300',
    ul: 'list-disc ms-8 leading-8 marker:text-neutral-500',
  },
  code: 'rounded-lg bg-wash-50 dark:bg-wash-760 px-1.5 py-1 font-mono',
  blockquote: 'border-l-4 border-gray-300 pl-4 italic',
  link: " no-underline hover:underline underline-offset-4 text-cyan-600 dark:text-cyan-100 transition-colors cursor-pointer",
};

export default theme;